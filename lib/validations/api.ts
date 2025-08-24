import { z } from 'zod';

/**
 * Image data schema for API
 */
export const imageDataSchema = z.object({
  url: z.string().url('Invalid image URL'),
  alt: z.string().min(1, 'Alt text is required'),
  title: z.string().optional(),
  description: z.string().min(1, 'Description is required'),
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

/**
 * Resource update schema for API - allows partial updates
 */
export const updateResourceSchema = z.object({
  postId: z.string().uuid('Invalid post ID'),
  slug: z.string().min(1, 'Slug is required').optional(),
  title: z.string().min(1, 'Title is required').optional(),
  metaDescription: z.string().min(1, 'Meta description is required').optional(),
  metaTitle: z.string().optional(),
  metaKeywords: z.string().optional(),
  excerpt: z.string().optional(),
  date: z.string().min(1, 'Date is required').optional(),
  readingTime: z.string().optional(),
  content: z.string().min(1, 'Content is required').optional(),
  status: z.enum(['draft', 'readyToPublish', 'published']).optional(),
  authorId: z.string().uuid('Invalid author ID').optional(),
  featuredImageUrl: z.string().url('Invalid featured image URL').optional(),
  featuredImage: imageDataSchema.optional(),
  categoryIds: z.array(z.string().uuid('Invalid category ID')).optional(),
  tagIds: z.array(z.string().uuid('Invalid tag ID')).optional(),
});

export type CreateResourceRequest = z.infer<typeof createResourceSchema>;
export type UpdateResourceRequest = z.infer<typeof updateResourceSchema>;
export type ImageDataRequest = z.infer<typeof imageDataSchema>;
