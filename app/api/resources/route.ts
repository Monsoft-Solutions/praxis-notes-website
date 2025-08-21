import { NextRequest } from 'next/server';
import { put } from '@vercel/blob';
import { db } from '../../../db/config';
import {
  resources,
  resourceCategories,
  resourceTags,
  categories,
  tags,
  authors,
} from '../../../db/schema';
import {
  withApiAuth,
  createSuccessResponse,
  createErrorResponse,
} from '../../../lib/api/middleware';
import { createResourceSchema } from '../../../lib/validations/api';
import { eq, inArray } from 'drizzle-orm';

/**
 * Download image from URL and upload to Vercel Blob
 */
async function downloadAndUploadImage(
  imageUrl: string,
  slug: string
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

    return url;
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
    let featuredImageUrl: string | undefined;
    if (data.featuredImageUrl) {
      try {
        featuredImageUrl = await downloadAndUploadImage(
          data.featuredImageUrl,
          data.slug
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
          readingTime: data.readingTime,
          content: data.content,
          status: data.status,
          authorId: data.authorId,
          featuredImage: featuredImageUrl,
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

    return createSuccessResponse(
      {
        id: result.id,
        slug: result.slug,
        title: result.title,
        featuredImage: result.featuredImage,
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
