import type { Image, InsertImage } from '../../db/schema/image.table';

/**
 * Base image types from database schema
 */
export type BaseImage = Image;
export type CreateImage = InsertImage;

/**
 * Image with computed properties for client rendering
 */
export type ImageWithMeta = BaseImage & {
  aspectRatio?: number; // calculated from width/height
  sizeCategory?: 'small' | 'medium' | 'large' | 'xl'; // based on fileSize
};

/**
 * Image preview type for listings and references
 */
export type ImagePreview = Pick<
  BaseImage,
  'id' | 'url' | 'alt' | 'title' | 'width' | 'height' | 'blurDataUrl'
>;

/**
 * Image upload data type for creating images
 */
export type ImageUploadData = Omit<
  CreateImage,
  'id' | 'createdAt' | 'updatedAt'
>;

/**
 * Image metadata for optimization
 */
export type ImageMeta = {
  width: number;
  height: number;
  fileSize: number;
  mimeType: string;
  aspectRatio: number;
};
