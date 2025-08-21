import type { authors } from '../../db/schema/author.table';
import type { BaseResource } from './resource';

/**
 * Base author types from database schema
 */
export type BaseAuthor = typeof authors.$inferSelect;
export type CreateAuthor = typeof authors.$inferInsert;

/**
 * Author with resource count for display purposes
 */
export type AuthorWithCount = BaseAuthor & {
  resourceCount: number;
  publishedResourceCount: number;
};

/**
 * Author with associated resources for profile pages
 */
export type AuthorWithResources = BaseAuthor & {
  resources: Pick<
    BaseResource,
    'id' | 'slug' | 'title' | 'excerpt' | 'date' | 'status' | 'featuredImage'
  >[];
};

/**
 * Author preview type for bylines and author cards
 */
export type AuthorPreview = Pick<
  BaseAuthor,
  'id' | 'name' | 'avatarUrl' | 'bio'
>;

/**
 * Author byline type for minimal display in articles
 */
export type AuthorByline = Pick<BaseAuthor, 'id' | 'name' | 'avatarUrl'>;

/**
 * Author form data type for creating/editing authors
 */
export type AuthorFormData = Omit<
  CreateAuthor,
  'id' | 'createdAt' | 'updatedAt'
>;

/**
 * Author filter options for admin interfaces
 */
export type AuthorFilters = {
  searchQuery?: string;
  hasResources?: boolean;
  hasPublishedResources?: boolean;
  createdAfter?: string;
  createdBefore?: string;
  minResourceCount?: number;
  maxResourceCount?: number;
};

/**
 * Author sort options
 */
export type AuthorSortField =
  | 'name'
  | 'email'
  | 'createdAt'
  | 'updatedAt'
  | 'resourceCount'
  | 'publishedResourceCount';

export type AuthorSortOrder = 'asc' | 'desc';

export type AuthorSort = {
  field: AuthorSortField;
  order: AuthorSortOrder;
};

/**
 * Author profile type for comprehensive author pages
 */
export type AuthorProfile = BaseAuthor & {
  resourceCount: number;
  publishedResourceCount: number;
  recentResources: Pick<
    BaseResource,
    'id' | 'slug' | 'title' | 'date' | 'excerpt' | 'featuredImage'
  >[];
  isActive: boolean;
};

/**
 * Author statistics for analytics
 */
export type AuthorStats = {
  totalAuthors: number;
  activeAuthors: number;
  averageResourcesPerAuthor: number;
  topContributors: AuthorWithCount[];
  recentlyJoinedAuthors: BaseAuthor[];
};

/**
 * Author role type (if needed for future permissions)
 */
export type AuthorRole = 'writer' | 'editor' | 'admin';

export type AuthorWithRole = BaseAuthor & {
  role: AuthorRole;
  permissions: string[];
};
