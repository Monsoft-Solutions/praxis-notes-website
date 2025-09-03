import { unstable_cache } from 'next/cache';
import { db } from 'website/db/config';
import { resources, resourceCategories, resourceTags } from 'website/db/schema';
import { eq, desc, count, inArray, sql } from 'drizzle-orm';
import type { ResourceWithRelations } from './types';

/**
 * Internal function to fetch paginated resources from database
 */
async function _getPaginatedResources(
  page = 1,
  pageSize = 6
): Promise<{
  resources: ResourceWithRelations[];
  totalCount: number;
  totalPages: number;
}> {
  try {
    const offset = (page - 1) * pageSize;

    // Get the resources for the current page with relations
    const result = await db.query.resources.findMany({
      orderBy: resources => [desc(resources.date)],
      limit: pageSize,
      offset: offset,
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

    // Get the total count of resources for pagination
    const countResult = await db.select({ count: count() }).from(resources);
    const totalCount = Number(countResult[0].count);
    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      resources: result.map(resource => {
        // Transform the data to match ResourceWithRelations structure
        const { resourceCategories, resourceTags, ...baseResource } = resource;
        return {
          ...baseResource,
          readingTime: baseResource.readingTime || '',
          categories: resourceCategories.map(rc => rc.category),
          tags: resourceTags.map(rt => rt.tag),
        };
      }),
      totalCount,
      totalPages,
    };
  } catch (error) {
    console.error('Error fetching paginated resources:', error);
    return {
      resources: [],
      totalCount: 0,
      totalPages: 0,
    };
  }
}

/**
 * Loads all resources from the database
 */
export async function getAllResources(): Promise<ResourceWithRelations[]> {
  try {
    const result = await db.query.resources.findMany({
      orderBy: resources => [desc(resources.date)],
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

    return result.map(resource => {
      // Transform the data to match ResourceWithRelations structure
      const { resourceCategories, resourceTags, ...baseResource } = resource;
      return {
        ...baseResource,
        readingTime: baseResource.readingTime || '',
        categories: resourceCategories.map(rc => rc.category),
        tags: resourceTags.map(rt => rt.tag),
      };
    });
  } catch (error) {
    console.error('Error fetching resources:', error);
    return [];
  }
}

/**
 * Gets a resource by its slug without incrementing view count (for metadata)
 */
export async function getResourceBySlugForMetadata(
  slug: string | string[] | undefined
): Promise<ResourceWithRelations | undefined> {
  if (!slug) return undefined;

  // Handle if slug is an array (for backward compatibility)
  const slugValue = Array.isArray(slug) ? slug[0] : slug;

  try {
    const resource = await db.query.resources.findFirst({
      where: eq(resources.slug, slugValue),
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

    if (!resource) return undefined;

    // Transform the data to match the expected structure (NO view increment)
    const { resourceCategories, resourceTags, ...baseResource } = resource;

    const transformedResource = {
      ...baseResource,
      readingTime: baseResource.readingTime || '',
      categories: resourceCategories.map(rc => rc.category),
      tags: resourceTags.map(rt => rt.tag),
    };

    return transformedResource as ResourceWithRelations;
  } catch (error) {
    console.error(`Error fetching resource with slug ${slugValue}:`, error);
    return undefined;
  }
}

/**
 * Gets a resource by its slug and increments view count
 */
export async function getResourceBySlug(
  slug: string | string[] | undefined
): Promise<ResourceWithRelations | undefined> {
  if (!slug) return undefined;

  // Handle if slug is an array (for backward compatibility)
  const slugValue = Array.isArray(slug) ? slug[0] : slug;

  try {
    const resource = await db.query.resources.findFirst({
      where: eq(resources.slug, slugValue),
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

    if (!resource) return undefined;

    // Increment the view count for this resource
    try {
      await db
        .update(resources)
        .set({
          views: sql`${resources.views} + 1`,
          updatedAt: new Date(),
        })
        .where(eq(resources.id, resource.id));
    } catch (viewUpdateError) {
      // Log the error but don't fail the request if view update fails
      console.error(
        `Error updating view count for resource ${resource.id}:`,
        viewUpdateError
      );
    }

    // Transform the data to match the expected structure
    const { resourceCategories, resourceTags, ...baseResource } = resource;

    const transformedResource = {
      ...baseResource,
      readingTime: baseResource.readingTime || '',
      categories: resourceCategories.map(rc => rc.category),
      tags: resourceTags.map(rt => rt.tag),
      // Include the updated view count (we increment by 1 from the current value)
      views: (baseResource.views || 0) + 1,
    };

    return transformedResource as ResourceWithRelations;
  } catch (error) {
    console.error(`Error fetching resource with slug ${slugValue}:`, error);
    return undefined;
  }
}

/**
 * Gets related resources based on shared categories or tags
 * @param currentResourceId The ID of the current resource to exclude
 * @param categoryIds Array of category IDs to match
 * @param tagIds Array of tag IDs to match
 * @param limit Maximum number of results to return (default: 3)
 */
export async function getRelatedResources(
  currentResourceId: string,
  categoryIds: string[],
  tagIds: string[],
  limit = 3
): Promise<ResourceWithRelations[]> {
  try {
    // If no categories or tags, return empty array
    if (categoryIds.length === 0 && tagIds.length === 0) {
      return [];
    }

    // Build a query to find resources that share categories or tags
    const relatedResourceIds = new Set<string>();

    // Find resources with shared categories
    if (categoryIds.length > 0) {
      const resourcesWithSharedCategories = await db
        .select({ resourceId: resourceCategories.resourceId })
        .from(resourceCategories)
        .where(inArray(resourceCategories.categoryId, categoryIds));

      resourcesWithSharedCategories.forEach(row => {
        if (row.resourceId !== currentResourceId) {
          relatedResourceIds.add(row.resourceId);
        }
      });
    }

    // Find resources with shared tags
    if (tagIds.length > 0) {
      const resourcesWithSharedTags = await db
        .select({ resourceId: resourceTags.resourceId })
        .from(resourceTags)
        .where(inArray(resourceTags.tagId, tagIds));

      resourcesWithSharedTags.forEach(row => {
        if (row.resourceId !== currentResourceId) {
          relatedResourceIds.add(row.resourceId);
        }
      });
    }

    // If no related resources found, return empty array
    if (relatedResourceIds.size === 0) {
      return [];
    }

    // Get the actual resources with their relations
    const relatedResources = await db.query.resources.findMany({
      where: inArray(resources.id, Array.from(relatedResourceIds)),
      orderBy: [desc(resources.date)],
      limit: limit,
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

    return relatedResources.map(resource => {
      // Transform the data to match ResourceWithRelations structure
      const { resourceCategories, resourceTags, ...baseResource } = resource;
      return {
        ...baseResource,
        readingTime: baseResource.readingTime || '',
        categories: resourceCategories.map(rc => rc.category),
        tags: resourceTags.map(rt => rt.tag),
      };
    });
  } catch (error) {
    console.error('Error fetching related resources:', error);
    return [];
  }
}

/**
 * Internal function to fetch latest resources from database
 */
async function _getLatestResources(
  limit = 6
): Promise<ResourceWithRelations[]> {
  try {
    const result = await db.query.resources.findMany({
      orderBy: resources => [desc(resources.date)],
      limit: limit,
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

    return result.map(resource => {
      // Transform the data to match ResourceWithRelations structure
      const { resourceCategories, resourceTags, ...baseResource } = resource;
      return {
        ...baseResource,
        readingTime: baseResource.readingTime || '',
        categories: resourceCategories.map(rc => rc.category),
        tags: resourceTags.map(rt => rt.tag),
      };
    });
  } catch (error) {
    console.error('Error fetching latest resources:', error);
    return [];
  }
}

/**
 * Gets the latest resources (cached)
 * @param limit Number of latest resources to fetch (default: 6)
 * @returns Latest resources
 */
export const getLatestResources = unstable_cache(
  _getLatestResources,
  ['latest-resources'],
  {
    tags: ['resources'],
    revalidate: 43200, // 12 hours
  }
);

/**
 * Loads resources from the database with pagination (cached)
 * @param page The page number (starts at 1)
 * @param pageSize Number of items per page
 * @returns Paginated resources and total count
 */
export const getPaginatedResources = unstable_cache(
  _getPaginatedResources,
  ['paginated-resources'],
  {
    tags: ['resources'],
    revalidate: 43200, // 12 hours
  }
);
