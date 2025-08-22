import { unstable_cache } from 'next/cache';
import { db } from 'website/db/config';
import { categories, resources, resourceCategories } from 'website/db/schema';
import { eq, desc, count, sql, inArray } from 'drizzle-orm';
import type {
  ResourceWithRelations,
  CategoryWithCount,
  CategoryWithResources,
} from './types';

/**
 * Internal function to fetch all categories with resource counts
 */
async function _getAllCategoriesWithCounts(): Promise<CategoryWithCount[]> {
  try {
    const result = await db
      .select({
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
        description: categories.description,
        createdAt: categories.createdAt,
        updatedAt: categories.updatedAt,
        resourceCount: count(resourceCategories.resourceId),
      })
      .from(categories)
      .leftJoin(
        resourceCategories,
        eq(categories.id, resourceCategories.categoryId)
      )
      .leftJoin(resources, eq(resourceCategories.resourceId, resources.id))
      .where(eq(resources.status, 'published'))
      .groupBy(
        categories.id,
        categories.name,
        categories.slug,
        categories.description,
        categories.createdAt,
        categories.updatedAt
      )
      .orderBy(desc(count(resourceCategories.resourceId)), categories.name);

    return result.map(item => ({
      ...item,
      resourceCount: Number(item.resourceCount),
    }));
  } catch (error) {
    console.error('Error fetching categories with counts:', error);
    return [];
  }
}

/**
 * Gets a category by its slug with associated resources
 * @param slug The category slug
 * @param page The page number for pagination (optional)
 * @param pageSize Number of resources per page (optional)
 * @returns Category with its resources and pagination info
 */
export async function getCategoryBySlugWithResources(
  slug: string,
  page = 1,
  pageSize = 6
): Promise<{
  category: CategoryWithResources | null;
  totalCount: number;
  totalPages: number;
}> {
  try {
    // First, get the category
    const categoryResult = await db.query.categories.findFirst({
      where: eq(categories.slug, slug),
    });

    if (!categoryResult) {
      return {
        category: null,
        totalCount: 0,
        totalPages: 0,
      };
    }

    // Get total count of resources in this category
    const countResult = await db
      .select({ count: count() })
      .from(resources)
      .innerJoin(
        resourceCategories,
        eq(resources.id, resourceCategories.resourceId)
      )
      .where(
        sql`${resourceCategories.categoryId} = ${categoryResult.id} AND ${resources.status} = 'published'`
      );

    const totalCount = Number(countResult[0].count);
    const totalPages = Math.ceil(totalCount / pageSize);

    // Get paginated resources for this category
    const offset = (page - 1) * pageSize;

    const resourcesResult = await db.query.resources.findMany({
      where: sql`${resources.status} = 'published'`,
      orderBy: [desc(resources.date)],
      limit: pageSize,
      offset: offset,
      with: {
        author: true,
        featuredImage: true,
        resourceCategories: {
          with: {
            category: true,
          },
          where: eq(resourceCategories.categoryId, categoryResult.id),
        },
        resourceTags: {
          with: {
            tag: true,
          },
        },
      },
    });

    // Filter resources to only include those that have the specified category
    const filteredResources = resourcesResult.filter(resource =>
      resource.resourceCategories.some(
        rc => rc.categoryId === categoryResult.id
      )
    );

    // Transform the data
    const transformedResources = filteredResources.map(resource => {
      const { resourceCategories, resourceTags, ...baseResource } = resource;
      return {
        ...baseResource,
        readingTime: baseResource.readingTime || '',
        categories: resourceCategories.map(rc => rc.category),
        tags: resourceTags.map(rt => rt.tag),
      };
    });

    const categoryWithResources: CategoryWithResources = {
      ...categoryResult,
      resources: transformedResources.map(resource => ({
        id: resource.id,
        slug: resource.slug,
        title: resource.title,
        excerpt: resource.excerpt || resource.metaDescription,
        date: resource.date,
        featuredImageId: resource.featuredImageId,
      })),
    };

    return {
      category: categoryWithResources,
      totalCount,
      totalPages,
    };
  } catch (error) {
    console.error('Error fetching category with resources:', error);
    return {
      category: null,
      totalCount: 0,
      totalPages: 0,
    };
  }
}

/**
 * Internal function to get resources by category slug
 */
async function _getResourcesByCategory(
  slug: string,
  page = 1,
  pageSize = 6
): Promise<{
  resources: ResourceWithRelations[];
  category: Omit<CategoryWithResources, 'resources'> | null;
  totalCount: number;
  totalPages: number;
}> {
  try {
    // First, get the category
    const categoryResult = await db.query.categories.findFirst({
      where: eq(categories.slug, slug),
    });

    if (!categoryResult) {
      return {
        resources: [],
        category: null,
        totalCount: 0,
        totalPages: 0,
      };
    }

    // Get total count of published resources in this category
    const countResult = await db
      .select({ count: count() })
      .from(resources)
      .innerJoin(
        resourceCategories,
        eq(resources.id, resourceCategories.resourceId)
      )
      .where(
        sql`${resourceCategories.categoryId} = ${categoryResult.id} AND ${resources.status} = 'published'`
      );

    const totalCount = Number(countResult[0].count);
    const totalPages = Math.ceil(totalCount / pageSize);

    // Get paginated resources for this category with full relations
    const offset = (page - 1) * pageSize;

    const resourcesResult = await db
      .select()
      .from(resources)
      .innerJoin(
        resourceCategories,
        eq(resources.id, resourceCategories.resourceId)
      )
      .where(
        sql`${resourceCategories.categoryId} = ${categoryResult.id} AND ${resources.status} = 'published'`
      )
      .orderBy(desc(resources.date))
      .limit(pageSize)
      .offset(offset);

    // Get full resource details with relations
    const resourceIds = resourcesResult.map(item => item.resources.id);

    if (resourceIds.length === 0) {
      return {
        resources: [],
        category: categoryResult,
        totalCount,
        totalPages,
      };
    }

    const fullResourcesResult = await db.query.resources.findMany({
      where: inArray(resources.id, resourceIds),
      with: {
        author: true,
        featuredImage: true,
        resourceCategories: {
          with: {
            category: true,
          },
        },
        resourceTags: {
          with: {
            tag: true,
          },
        },
      },
    });

    // Transform the data to match ResourceWithRelations structure
    const transformedResources = fullResourcesResult.map(resource => {
      const { resourceCategories, resourceTags, ...baseResource } = resource;
      return {
        ...baseResource,
        readingTime: baseResource.readingTime || '',
        categories: resourceCategories.map(rc => rc.category),
        tags: resourceTags.map(rt => rt.tag),
      };
    });

    // Sort by date to maintain order after the join
    transformedResources.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return {
      resources: transformedResources,
      category: categoryResult,
      totalCount,
      totalPages,
    };
  } catch (error) {
    console.error('Error fetching resources by category:', error);
    return {
      resources: [],
      category: null,
      totalCount: 0,
      totalPages: 0,
    };
  }
}

/**
 * Internal function to get all categories
 */
async function _getAllCategories() {
  try {
    const result = await db.query.categories.findMany({
      orderBy: [categories.name],
    });

    return result;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

/**
 * Loads all categories with resource counts (cached)
 * @returns Array of categories with their resource counts
 */
export const getAllCategoriesWithCounts = unstable_cache(
  _getAllCategoriesWithCounts,
  ['categories-with-counts'],
  {
    tags: ['categories', 'resources'],
    revalidate: 43200, // 12 hours
  }
);

/**
 * Gets resources by category slug with full relations for display (cached)
 * @param slug The category slug
 * @param page The page number for pagination
 * @param pageSize Number of resources per page
 * @returns Paginated resources and category info
 */
export const getResourcesByCategory = unstable_cache(
  _getResourcesByCategory,
  ['resources-by-category'],
  {
    tags: ['categories', 'resources'],
    revalidate: 43200, // 12 hours
  }
);

/**
 * Gets all categories for navigation and listing (cached)
 * @returns Array of basic category information
 */
export const getAllCategories = unstable_cache(
  _getAllCategories,
  ['all-categories'],
  {
    tags: ['categories'],
    revalidate: 43200, // 12 hours - categories change infrequently
  }
);
