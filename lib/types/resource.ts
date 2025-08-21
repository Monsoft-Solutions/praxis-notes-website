import type { Resource, InsertResource } from '../../db/schema/resources';
import type { BaseAuthor } from './author';
import type { BaseCategory } from './category';
import type { BaseTag } from './tag';

/**
 * Base resource types from database schema
 */
export type BaseResource = Resource;
export type CreateResource = InsertResource;

/**
 * Resource status enum for type safety
 */
export type ResourceStatus = 'draft' | 'readyToPublish' | 'published';

/**
 * Extended resource type with author relation for client rendering
 */
export type ResourceWithAuthor = BaseResource & {
  author: BaseAuthor | null;
};

/**
 * Extended resource type with categories relation for client rendering
 */
export type ResourceWithCategories = BaseResource & {
  categories: BaseCategory[];
};

/**
 * Extended resource type with tags relation for client rendering
 */
export type ResourceWithTags = BaseResource & {
  tags: BaseTag[];
};

/**
 * Full resource type with all relations for comprehensive client rendering
 */
export type ResourceWithRelations = BaseResource & {
  author: BaseAuthor | null;
  categories: BaseCategory[];
  tags: BaseTag[];
};

/**
 * Resource preview type for listing pages and cards
 */
export type ResourcePreview = Pick<
  BaseResource,
  'id' | 'slug' | 'title' | 'excerpt' | 'date' | 'readingTime' | 'featuredImage'
> & {
  author: Pick<BaseAuthor, 'id' | 'name' | 'avatarUrl'> | null;
  categories: Pick<BaseCategory, 'id' | 'name' | 'slug'>[];
};

/**
 * Resource metadata type for SEO and social sharing
 */
export type ResourceMetadata = Pick<
  BaseResource,
  'title' | 'metaDescription' | 'metaTitle' | 'metaKeywords' | 'featuredImage'
>;

/**
 * Resource form data type for creating/editing resources
 */
export type ResourceFormData = Omit<
  CreateResource,
  'id' | 'createdAt' | 'updatedAt'
> & {
  categoryIds: string[];
  tagIds: string[];
};

/**
 * Resource filter options for search and filtering
 */
export type ResourceFilters = {
  status?: ResourceStatus[];
  categoryIds?: string[];
  tagIds?: string[];
  authorId?: string;
  searchQuery?: string;
  dateFrom?: string;
  dateTo?: string;
};

/**
 * Resource sort options
 */
export type ResourceSortField = 'date' | 'title' | 'createdAt' | 'updatedAt';
export type ResourceSortOrder = 'asc' | 'desc';

export type ResourceSort = {
  field: ResourceSortField;
  order: ResourceSortOrder;
};
