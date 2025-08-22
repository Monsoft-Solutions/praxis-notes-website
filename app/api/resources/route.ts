import { NextRequest } from 'next/server';
import { put } from '@vercel/blob';
import { revalidatePath, revalidateTag } from 'next/cache';
import { db } from 'website/db/config';
import {
  resources,
  resourceCategories,
  resourceTags,
  categories,
  tags,
  authors,
  images,
} from 'website/db/schema';
import {
  withApiAuth,
  createSuccessResponse,
  createErrorResponse,
} from 'website/lib/api/middleware';
import { createResourceSchema } from 'website/lib/validations/api';
import { calculateReadingTime } from 'website/lib/utils/reading-time';
import { notifyGoogleResourceCreated } from 'website/lib/google-indexing';
import { eq, inArray } from 'drizzle-orm';

/**
 * Download image from URL and upload to Vercel Blob, then create image record
 */
async function downloadAndUploadImage(
  imageUrl: string,
  slug: string,
  alt: string,
  title?: string,
  description?: string
): Promise<string> {
  try {
    // Download the image
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }

    // Get the content type from the response
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Extract file extension from URL or use default
    const extension = contentType.split('/')[1];

    // Generate a unique filename
    const timestamp = Date.now();
    const filename = `resources/${slug}-${timestamp}.${extension}`;

    // Convert response to blob
    const blob = await response.blob();

    // Upload to Vercel Blob
    const { url } = await put(filename, blob, {
      access: 'public',
      contentType,
    });

    // Create image record in database
    const [imageRecord] = await db
      .insert(images)
      .values({
        url,
        alt,
        title,
        description,
        mimeType: contentType,
        originalFilename: imageUrl.split('/').pop() || filename,
        fileSize: blob.size,
      })
      .returning();

    return imageRecord.id;
  } catch (error) {
    console.error('Error downloading and uploading image:', error);
    throw new Error(
      `Failed to process featured image: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

async function postHandler(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const validationResult = createResourceSchema.safeParse(body);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map(
        err => err.message
      );
      return createErrorResponse(
        `Validation failed: ${errorMessages.join(', ')}`,
        400
      );
    }

    const data = validationResult.data;

    // Verify author exists
    const author = await db
      .select({ id: authors.id })
      .from(authors)
      .where(eq(authors.id, data.authorId))
      .limit(1);

    if (author.length === 0) {
      return createErrorResponse('Author not found', 404);
    }

    // Verify categories exist
    if (data.categoryIds.length > 0) {
      const existingCategories = await db
        .select({ id: categories.id })
        .from(categories)
        .where(inArray(categories.id, data.categoryIds));

      if (existingCategories.length !== data.categoryIds.length) {
        return createErrorResponse('One or more categories not found', 404);
      }
    }

    // Verify tags exist
    if (data.tagIds.length > 0) {
      const existingTags = await db
        .select({ id: tags.id })
        .from(tags)
        .where(inArray(tags.id, data.tagIds));

      if (existingTags.length !== data.tagIds.length) {
        return createErrorResponse('One or more tags not found', 404);
      }
    }

    // Process featured image if provided
    let featuredImageId: string | undefined;

    // Handle legacy featuredImageUrl for backward compatibility
    if (data.featuredImageUrl) {
      try {
        featuredImageId = await downloadAndUploadImage(
          data.featuredImageUrl,
          data.slug,
          data.title, // Use title as alt text for legacy images
          data.title
        );
      } catch (error) {
        return createErrorResponse(
          error instanceof Error
            ? error.message
            : 'Failed to process featured image',
          400
        );
      }
    }

    // Handle new featuredImage structure
    if (data.featuredImage) {
      try {
        const [imageRecord] = await db
          .insert(images)
          .values({
            url: data.featuredImage.url,
            alt: data.featuredImage.alt,
            title: data.featuredImage.title,
            description: data.featuredImage.description,
            width: data.featuredImage.width,
            height: data.featuredImage.height,
            fileSize: data.featuredImage.fileSize,
            mimeType: data.featuredImage.mimeType,
            originalFilename: data.featuredImage.originalFilename,
            blurDataUrl: data.featuredImage.blurDataUrl,
          })
          .returning();

        featuredImageId = imageRecord.id;
      } catch (error) {
        return createErrorResponse(
          error instanceof Error
            ? error.message
            : 'Failed to create featured image record',
          400
        );
      }
    }

    // Calculate reading time if not provided
    const readingTime = data.readingTime || calculateReadingTime(data.content);

    // Start a transaction to create the resource and its relationships
    const result = await db.transaction(async tx => {
      // Create the resource
      const [newResource] = await tx
        .insert(resources)
        .values({
          slug: data.slug,
          title: data.title,
          metaDescription: data.metaDescription,
          metaTitle: data.metaTitle,
          metaKeywords: data.metaKeywords,
          excerpt: data.excerpt,
          date: data.date,
          readingTime: readingTime,
          content: data.content,
          status: data.status,
          authorId: data.authorId,
          featuredImageId: featuredImageId,
        })
        .returning();

      // Create category relationships
      if (data.categoryIds.length > 0) {
        await tx.insert(resourceCategories).values(
          data.categoryIds.map(categoryId => ({
            resourceId: newResource.id,
            categoryId,
          }))
        );
      }

      // Create tag relationships
      if (data.tagIds.length > 0) {
        await tx.insert(resourceTags).values(
          data.tagIds.map(tagId => ({
            resourceId: newResource.id,
            tagId,
          }))
        );
      }

      return newResource;
    });

    // Revalidate relevant pages after successful creation
    try {
      // Revalidate main resources page
      revalidatePath('/resources');

      // Revalidate categories listing page
      revalidatePath('/resources/categories');

      // Revalidate specific category pages that this resource belongs to
      if (data.categoryIds.length > 0) {
        const categorySlugResults = await db
          .select({ slug: categories.slug })
          .from(categories)
          .where(inArray(categories.id, data.categoryIds));

        for (const category of categorySlugResults) {
          revalidatePath(`/resources/categories/${category.slug}`);
        }
      }

      // Revalidate cache tags
      revalidateTag('resources');
      revalidateTag('categories');
      revalidateTag('sitemap'); // Revalidate sitemap to include new resource
    } catch (revalidationError) {
      console.warn('Revalidation failed:', revalidationError);
      // Don't fail the request if revalidation fails
    }

    // Notify Google about the new resource (async, non-blocking)
    // This runs after successful creation and revalidation
    notifyGoogleResourceCreated(result.slug).catch(error => {
      // Log error but don't fail the request
      console.warn(
        'Google indexing notification failed for resource:',
        result.slug,
        error
      );
    });

    return createSuccessResponse(
      {
        id: result.id,
        slug: result.slug,
        title: result.title,
        featuredImageId: result.featuredImageId,
        status: result.status,
        createdAt: result.createdAt,
      },
      'Resource created successfully'
    );
  } catch (error) {
    console.error('Error creating resource:', error);
    throw error;
  }
}

export const POST = withApiAuth(postHandler);
