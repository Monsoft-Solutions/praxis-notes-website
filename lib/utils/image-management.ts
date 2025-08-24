import { put, del } from '@vercel/blob';
import { db } from 'website/db/config';
import { images } from 'website/db/schema';
import { eq } from 'drizzle-orm';
import type { ImageDataRequest } from 'website/lib/validations/api';

/**
 * Extract the original filename from an image URL
 * @param imageUrl - The URL of the image
 * @returns The original filename
 */
export function extractImageOriginalFilename(imageUrl: string): string {
  const urlParts = imageUrl.split('/');
  return urlParts[urlParts.length - 1];
}

/**
 * Download image from URL and upload to Vercel Blob, then create image record
 * Enhanced version that supports full image metadata
 */
export async function downloadAndUploadImage(
  imageUrl: string,
  slug: string,
  alt: string,
  title?: string,
  description?: string,
  width?: number,
  height?: number,
  mimeType?: string,
  originalFilename?: string,
  blurDataUrl?: string
): Promise<string> {
  try {
    // Download the image
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }

    // Get the content type from the response or use provided mimeType
    const contentType =
      mimeType || response.headers.get('content-type') || 'image/jpeg';

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

    // Create image record in database with all provided metadata
    const [imageRecord] = await db
      .insert(images)
      .values({
        url,
        alt,
        title,
        description,
        width,
        height,
        fileSize: blob.size,
        mimeType: contentType,
        originalFilename:
          originalFilename || extractImageOriginalFilename(imageUrl),
        blurDataUrl,
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

/**
 * Delete an image from Vercel Blob storage and remove its database record
 * @param imageId - The database ID of the image to delete
 * @returns Promise<boolean> - true if deletion was successful, false otherwise
 */
export async function deleteImage(imageId: string): Promise<boolean> {
  try {
    // Get the image record from database
    const imageRecord = await db
      .select()
      .from(images)
      .where(eq(images.id, imageId))
      .limit(1);

    if (imageRecord.length === 0) {
      console.warn(`Image with ID ${imageId} not found in database`);
      return false;
    }

    const image = imageRecord[0];

    // Delete from Vercel Blob storage
    try {
      await del(image.url);
    } catch (blobError) {
      console.warn(
        `Failed to delete image from Vercel Blob: ${image.url}`,
        blobError
      );
      // Continue with database deletion even if blob deletion fails
    }

    // Delete from database
    await db.delete(images).where(eq(images.id, imageId));

    console.log(`Successfully deleted image: ${imageId}`);
    return true;
  } catch (error) {
    console.error(`Error deleting image ${imageId}:`, error);
    return false;
  }
}

/**
 * Handle featured image update for a resource
 * Compares the new image with the existing one and updates if necessary
 * @param currentImageId - The current featured image ID (if any)
 * @param newImageData - The new image data from the request
 * @param resourceSlug - The resource slug for generating unique filenames
 * @returns Promise<string | null> - The new image ID or null if no change needed
 */
export async function handleFeaturedImageUpdate(
  currentImageId: string | null,
  newImageData: ImageDataRequest | undefined,
  resourceSlug: string
): Promise<{ newImageId: string | null; shouldUpdate: boolean }> {
  // If no new image data provided, keep current image
  if (!newImageData) {
    return { newImageId: currentImageId, shouldUpdate: false };
  }

  // If no current image, always create new one
  if (!currentImageId) {
    const newImageId = await downloadAndUploadImage(
      newImageData.url,
      resourceSlug,
      newImageData.alt,
      newImageData.title,
      newImageData.description,
      newImageData.width,
      newImageData.height,
      newImageData.mimeType,
      newImageData.originalFilename,
      newImageData.blurDataUrl
    );
    return { newImageId, shouldUpdate: true };
  }

  // Get current image details from database
  const currentImageRecord = await db
    .select()
    .from(images)
    .where(eq(images.id, currentImageId))
    .limit(1);

  if (currentImageRecord.length === 0) {
    // Current image not found in database, create new one
    const newImageId = await downloadAndUploadImage(
      newImageData.url,
      resourceSlug,
      newImageData.alt,
      newImageData.title,
      newImageData.description,
      newImageData.width,
      newImageData.height,
      newImageData.mimeType,
      newImageData.originalFilename,
      newImageData.blurDataUrl
    );
    return { newImageId, shouldUpdate: true };
  }

  const currentImage = currentImageRecord[0];

  // Compare original filenames to determine if image should be updated
  const newOriginalFilename =
    newImageData.originalFilename ||
    extractImageOriginalFilename(newImageData.url);
  const currentOriginalFilename = currentImage.originalFilename;

  // If original filenames are different, update the image
  if (newOriginalFilename !== currentOriginalFilename) {
    // Download and upload new image
    const newImageId = await downloadAndUploadImage(
      newImageData.url,
      resourceSlug,
      newImageData.alt,
      newImageData.title,
      newImageData.description,
      newImageData.width,
      newImageData.height,
      newImageData.mimeType,
      newImageData.originalFilename,
      newImageData.blurDataUrl
    );

    // Delete old image (async, non-blocking)
    deleteImage(currentImageId).catch(error => {
      console.warn(`Failed to delete old image ${currentImageId}:`, error);
    });

    return { newImageId, shouldUpdate: true };
  }

  // Same image, no update needed
  return { newImageId: currentImageId, shouldUpdate: false };
}
