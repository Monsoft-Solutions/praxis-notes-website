import type { tags } from '../../db/schema/tag.table';
import type { BaseResource } from './resource';

/**
 * Base tag types from database schema
 */
export type BaseTag = typeof tags.$inferSelect;
export type CreateTag = typeof tags.$inferInsert;

/**
 * Tag with resource count for display purposes
 */
export type TagWithCount = BaseTag & {
  resourceCount: number;
};

/**
 * Tag with associated resources for detailed views
 */
export type TagWithResources = BaseTag & {
  resources: Pick<
    BaseResource,
    'id' | 'slug' | 'title' | 'excerpt' | 'date' | 'featuredImage'
  >[];
};

/**
 * Tag preview type for chips, badges, and navigation
 */
export type TagPreview = Pick<BaseTag, 'id' | 'name' | 'slug'>;

/**
 * Tag form data type for creating/editing tags
 */
export type TagFormData = Omit<CreateTag, 'id' | 'createdAt'>;

/**
 * Tag filter options for admin interfaces
 */
export type TagFilters = {
  searchQuery?: string;
  hasResources?: boolean;
  createdAfter?: string;
  createdBefore?: string;
  minResourceCount?: number;
  maxResourceCount?: number;
};

/**
 * Tag sort options
 */
export type TagSortField =
  | 'name'
  | 'createdAt'
  | 'resourceCount'
  | 'popularity';
export type TagSortOrder = 'asc' | 'desc';

export type TagSort = {
  field: TagSortField;
  order: TagSortOrder;
};

/**
 * Tag cloud data for visualization
 */
export type TagCloudItem = TagPreview & {
  weight: number; // Relative importance/frequency (1-10)
  resourceCount: number;
};

/**
 * Popular tags type for trending/featured sections
 */
export type PopularTag = TagPreview & {
  resourceCount: number;
  isPopular: boolean;
  rank: number;
};

/**
 * Tag statistics for analytics
 */
export type TagStats = {
  totalTags: number;
  averageResourcesPerTag: number;
  mostPopularTag: TagWithCount;
  leastUsedTags: TagWithCount[];
  recentlyCreatedTags: BaseTag[];
};
