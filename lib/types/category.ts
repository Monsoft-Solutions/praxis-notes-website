import type {
  Category,
  InsertCategory,
} from '../../db/schema/resource-category.table';
import type { BaseResource } from './resource';

/**
 * Base category types from database schema
 */
export type BaseCategory = Category;
export type CreateCategory = InsertCategory;

/**
 * Category with resource count for display purposes
 */
export type CategoryWithCount = BaseCategory & {
  resourceCount: number;
};

/**
 * Category with associated resources for detailed views
 */
export type CategoryWithResources = BaseCategory & {
  resources: Pick<
    BaseResource,
    'id' | 'slug' | 'title' | 'excerpt' | 'date' | 'featuredImage'
  >[];
};

/**
 * Category preview type for navigation and listing
 */
export type CategoryPreview = Pick<
  BaseCategory,
  'id' | 'name' | 'slug' | 'description'
>;

/**
 * Category form data type for creating/editing categories
 */
export type CategoryFormData = Omit<
  CreateCategory,
  'id' | 'createdAt' | 'updatedAt'
>;

/**
 * Category filter options for admin interfaces
 */
export type CategoryFilters = {
  searchQuery?: string;
  hasResources?: boolean;
  createdAfter?: string;
  createdBefore?: string;
};

/**
 * Category sort options
 */
export type CategorySortField =
  | 'name'
  | 'createdAt'
  | 'updatedAt'
  | 'resourceCount';
export type CategorySortOrder = 'asc' | 'desc';

export type CategorySort = {
  field: CategorySortField;
  order: CategorySortOrder;
};

/**
 * Category tree structure for hierarchical display (if needed in future)
 */
export type CategoryNode = BaseCategory & {
  children?: CategoryNode[];
  parent?: CategoryNode | null;
  level: number;
};
