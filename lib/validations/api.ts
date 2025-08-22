import { z } from 'zod';

/**
 * Image data schema for API
 */
export const imageDataSchema = z.object({
  url: z.string().url('Invalid image URL'),
  alt: z.string().min(1, 'Alt text is required'),
  title: z.string().optional(),
  description: z.string().optional(),
  width: z.number().positive('Width must be positive').optional(),
  height: z.number().positive('Height must be positive').optional(),
  fileSize: z.number().positive('File size must be positive').optional(),
  mimeType: z.string().optional(),
  originalFilename: z.string().optional(),
  blurDataUrl: z.string().optional(),
});

/**
 * Resource creation schema for API
 */
export const createResourceSchema = z.object({
  slug: z.string().min(1, 'Slug is required'),
  title: z.string().min(1, 'Title is required'),
  metaDescription: z.string().min(1, 'Meta description is required'),
  metaTitle: z.string().optional(),
  metaKeywords: z.string().optional(),
  excerpt: z.string().optional(),
  date: z.string().min(1, 'Date is required'),
  readingTime: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
  status: z.enum(['draft', 'readyToPublish', 'published']).default('published'),
  authorId: z.string().uuid('Invalid author ID'),
  featuredImageUrl: z.string().url('Invalid featured image URL').optional(),
  featuredImage: imageDataSchema.optional(),
  categoryIds: z.array(z.string().uuid('Invalid category ID')).default([]),
  tagIds: z.array(z.string().uuid('Invalid tag ID')).default([]),
});

export type CreateResourceRequest = z.infer<typeof createResourceSchema>;
export type ImageDataRequest = z.infer<typeof imageDataSchema>;
