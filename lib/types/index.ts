/**
 * Type definitions for the PraxisNotes application
 *
 * This index file exports all type definitions organized by domain:
 * - Resource types: Core content types with relations
 * - Author types: Content author types and profiles
 * - Category types: Content categorization types
 * - Tag types: Content tagging and organization types
 */

// Resource types
export type {
  BaseResource,
  CreateResource,
  ResourceStatus,
  ResourceWithAuthor,
  ResourceWithCategories,
  ResourceWithTags,
  ResourceWithRelations,
  ResourcePreview,
  ResourceMetadata,
  ResourceFormData,
  ResourceFilters,
  ResourceSortField,
  ResourceSortOrder,
  ResourceSort,
} from './resource';

// Author types
export type {
  BaseAuthor,
  CreateAuthor,
  AuthorWithCount,
  AuthorWithResources,
  AuthorPreview,
  AuthorByline,
  AuthorFormData,
  AuthorFilters,
  AuthorSortField,
  AuthorSortOrder,
  AuthorSort,
  AuthorProfile,
  AuthorStats,
  AuthorRole,
  AuthorWithRole,
} from './author';

// Category types
export type {
  BaseCategory,
  CreateCategory,
  CategoryWithCount,
  CategoryWithResources,
  CategoryPreview,
  CategoryFormData,
  CategoryFilters,
  CategorySortField,
  CategorySortOrder,
  CategorySort,
  CategoryNode,
} from './category';

// Tag types
export type {
  BaseTag,
  CreateTag,
  TagWithCount,
  TagWithResources,
  TagPreview,
  TagFormData,
  TagFilters,
  TagSortField,
  TagSortOrder,
  TagSort,
  TagCloudItem,
  PopularTag,
  TagStats,
} from './tag';

/**
 * Common utility types for the application
 */

/**
 * Generic pagination type for list responses
 */
export type PaginationInfo = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

/**
 * Generic paginated response type
 */
export type PaginatedResponse<T> = {
  data: T[];
  pagination: PaginationInfo;
};

/**
 * API response wrapper type
 */
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

/**
 * Search and filter base types
 */
export type SearchOptions = {
  query?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

/**
 * Content status types for drafts and publishing
 */
export type ContentStatus =
  | 'draft'
  | 'readyToPublish'
  | 'published'
  | 'archived';

/**
 * Date range filter type
 */
export type DateRange = {
  from?: string;
  to?: string;
};

/**
 * Generic ID type for database entities
 */
export type EntityId = string;

/**
 * Generic timestamp fields
 */
export type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};

/**
 * SEO metadata type for pages and content
 */
export type SeoMetadata = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
};
