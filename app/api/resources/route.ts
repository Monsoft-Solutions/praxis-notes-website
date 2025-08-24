import { NextRequest } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { db } from 'website/db/config';
import {
  resources,
  resourceCategories,
  resourceTags,
  categories,
  tags,
  authors,
} from 'website/db/schema';
import {
  withApiAuth,
  createSuccessResponse,
  createErrorResponse,
} from 'website/lib/api/middleware';
import {
  createResourceSchema,
  updateResourceSchema,
} from 'website/lib/validations/api';
import { calculateReadingTime } from 'website/lib/utils/reading-time';
import { notifyGoogleResourceCreated } from 'website/lib/google-indexing';
import {
  downloadAndUploadImage,
  handleFeaturedImageUpdate,
} from 'website/lib/utils/image-management';
import { eq, inArray } from 'drizzle-orm';

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

    // Handle new featuredImage structure - download and upload with metadata
    if (data.featuredImage) {
      try {
        featuredImageId = await downloadAndUploadImage(
          data.featuredImage.url,
          data.slug,
          data.featuredImage.alt,
          data.featuredImage.title,
          data.featuredImage.description,
          data.featuredImage.width,
          data.featuredImage.height,
          data.featuredImage.mimeType,
          data.featuredImage.originalFilename,
          data.featuredImage.blurDataUrl
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

async function patchHandler(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const validationResult = updateResourceSchema.safeParse(body);

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
    const { postId, ...updateData } = data;

    // Check if resource exists
    const existingResource = await db
      .select()
      .from(resources)
      .where(eq(resources.id, postId))
      .limit(1);

    if (existingResource.length === 0) {
      return createErrorResponse('Resource not found', 404);
    }

    const currentResource = existingResource[0];

    // Verify author exists if authorId is being updated
    if (updateData.authorId) {
      const author = await db
        .select({ id: authors.id })
        .from(authors)
        .where(eq(authors.id, updateData.authorId))
        .limit(1);

      if (author.length === 0) {
        return createErrorResponse('Author not found', 404);
      }
    }

    // Verify categories exist if categoryIds is being updated
    if (updateData.categoryIds && updateData.categoryIds.length > 0) {
      const existingCategories = await db
        .select({ id: categories.id })
        .from(categories)
        .where(inArray(categories.id, updateData.categoryIds));

      if (existingCategories.length !== updateData.categoryIds.length) {
        return createErrorResponse('One or more categories not found', 404);
      }
    }

    // Verify tags exist if tagIds is being updated
    if (updateData.tagIds && updateData.tagIds.length > 0) {
      const existingTags = await db
        .select({ id: tags.id })
        .from(tags)
        .where(inArray(tags.id, updateData.tagIds));

      if (existingTags.length !== updateData.tagIds.length) {
        return createErrorResponse('One or more tags not found', 404);
      }
    }

    // Calculate reading time if content is being updated and readingTime is not provided
    let readingTime = updateData.readingTime;
    if (updateData.content && !updateData.readingTime) {
      readingTime = calculateReadingTime(updateData.content);
    }

    // Handle featured image updates
    let featuredImageId: string | null = currentResource.featuredImageId;
    let imageUpdateError: string | null = null;

    // Handle legacy featuredImageUrl for backward compatibility
    if (updateData.featuredImageUrl) {
      try {
        const newImageId = await downloadAndUploadImage(
          updateData.featuredImageUrl,
          updateData.slug || currentResource.slug,
          updateData.title || currentResource.title, // Use title as alt text for legacy images
          updateData.title || currentResource.title
        );

        // If there was a previous image, delete it
        if (currentResource.featuredImageId) {
          const { deleteImage } = await import(
            'website/lib/utils/image-management'
          );
          deleteImage(currentResource.featuredImageId).catch(error => {
            console.warn(
              `Failed to delete old image ${currentResource.featuredImageId}:`,
              error
            );
          });
        }

        featuredImageId = newImageId;
      } catch (error) {
        imageUpdateError =
          error instanceof Error
            ? error.message
            : 'Failed to process featured image';
      }
    }

    // Handle new featuredImage structure with smart update logic
    if (updateData.featuredImage && !imageUpdateError) {
      try {
        const resourceSlug = updateData.slug || currentResource.slug;
        const { newImageId, shouldUpdate } = await handleFeaturedImageUpdate(
          currentResource.featuredImageId,
          updateData.featuredImage,
          resourceSlug
        );

        if (shouldUpdate) {
          featuredImageId = newImageId;
        }
      } catch (error) {
        imageUpdateError =
          error instanceof Error
            ? error.message
            : 'Failed to process featured image';
      }
    }

    // Return error if image processing failed
    if (imageUpdateError) {
      return createErrorResponse(imageUpdateError, 400);
    }

    // Prepare update data for resource table
    const resourceUpdateData: Partial<typeof resources.$inferInsert> = {};

    // Only include fields that are being updated
    if (updateData.slug !== undefined)
      resourceUpdateData.slug = updateData.slug;
    if (updateData.title !== undefined)
      resourceUpdateData.title = updateData.title;
    if (updateData.metaDescription !== undefined)
      resourceUpdateData.metaDescription = updateData.metaDescription;
    if (updateData.metaTitle !== undefined)
      resourceUpdateData.metaTitle = updateData.metaTitle;
    if (updateData.metaKeywords !== undefined)
      resourceUpdateData.metaKeywords = updateData.metaKeywords;
    if (updateData.excerpt !== undefined)
      resourceUpdateData.excerpt = updateData.excerpt;
    if (updateData.date !== undefined)
      resourceUpdateData.date = updateData.date;
    if (readingTime !== undefined) resourceUpdateData.readingTime = readingTime;
    if (updateData.content !== undefined)
      resourceUpdateData.content = updateData.content;
    if (updateData.status !== undefined)
      resourceUpdateData.status = updateData.status;
    if (updateData.authorId !== undefined)
      resourceUpdateData.authorId = updateData.authorId;

    // Update featured image ID if it changed
    if (featuredImageId !== currentResource.featuredImageId) {
      resourceUpdateData.featuredImageId = featuredImageId;
    }

    // Always update the updatedAt timestamp
    resourceUpdateData.updatedAt = new Date();

    // Start a transaction to update the resource and its relationships
    const result = await db.transaction(async tx => {
      // Update the resource if there are changes
      let updatedResource = currentResource;
      if (Object.keys(resourceUpdateData).length > 0) {
        [updatedResource] = await tx
          .update(resources)
          .set(resourceUpdateData)
          .where(eq(resources.id, postId))
          .returning();
      }

      // Update category relationships if categoryIds is provided
      if (updateData.categoryIds !== undefined) {
        // Delete existing category relationships
        await tx
          .delete(resourceCategories)
          .where(eq(resourceCategories.resourceId, postId));

        // Create new category relationships
        if (updateData.categoryIds.length > 0) {
          await tx.insert(resourceCategories).values(
            updateData.categoryIds.map(categoryId => ({
              resourceId: postId,
              categoryId,
            }))
          );
        }
      }

      // Update tag relationships if tagIds is provided
      if (updateData.tagIds !== undefined) {
        // Delete existing tag relationships
        await tx
          .delete(resourceTags)
          .where(eq(resourceTags.resourceId, postId));

        // Create new tag relationships
        if (updateData.tagIds.length > 0) {
          await tx.insert(resourceTags).values(
            updateData.tagIds.map(tagId => ({
              resourceId: postId,
              tagId,
            }))
          );
        }
      }

      return updatedResource;
    });

    // Revalidate relevant pages after successful update
    try {
      // Revalidate main resources page
      revalidatePath('/resources');

      // Revalidate the specific resource page
      revalidatePath(`/resources/${result.slug}`);

      // Revalidate categories listing page
      revalidatePath('/resources/categories');

      // Revalidate category pages that this resource belongs to (both old and new)
      const allCategoryIds = new Set<string>();

      // Get current categories for this resource
      const currentCategories = await db
        .select({ categoryId: resourceCategories.categoryId })
        .from(resourceCategories)
        .where(eq(resourceCategories.resourceId, postId));

      currentCategories.forEach(cat => allCategoryIds.add(cat.categoryId));

      // Add any new categories from the update
      if (updateData.categoryIds) {
        updateData.categoryIds.forEach(id => allCategoryIds.add(id));
      }

      if (allCategoryIds.size > 0) {
        const categorySlugResults = await db
          .select({ slug: categories.slug })
          .from(categories)
          .where(inArray(categories.id, Array.from(allCategoryIds)));

        for (const category of categorySlugResults) {
          revalidatePath(`/resources/categories/${category.slug}`);
        }
      }

      // Revalidate cache tags
      revalidateTag('resources');
      revalidateTag('categories');
      revalidateTag('sitemap'); // Revalidate sitemap in case slug changed
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
        status: result.status,
        updatedAt: result.updatedAt,
        featuredImageId: result.featuredImageId,
      },
      'Resource updated successfully'
    );
  } catch (error) {
    console.error('Error updating resource:', error);
    throw error;
  }
}

export const POST = withApiAuth(postHandler);
export const PATCH = withApiAuth(patchHandler);
