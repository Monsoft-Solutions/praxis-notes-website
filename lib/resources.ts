import { unstable_cache } from 'next/cache';
import { db } from 'website/db/config';
import { resources, resourceCategories, resourceTags } from 'website/db/schema';
import { eq, desc, count, inArray, sql, and, lt, gt, ne } from 'drizzle-orm';
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
 * Gets related resources based on shared categories or tags with enhanced scoring
 * @param currentResourceId The ID of the current resource to exclude
 * @param categoryIds Array of category IDs to match
 * @param tagIds Array of tag IDs to match
 * @param limit Maximum number of results to return (default: 3)
 * @param currentReadingTime Current resource reading time for similarity bonus
 */
export async function getRelatedResources(
  currentResourceId: string,
  categoryIds: string[],
  tagIds: string[],
  limit = 3,
  currentReadingTime?: string
): Promise<ResourceWithRelations[]> {
  try {
    // If no categories or tags, return empty array
    if (categoryIds.length === 0 && tagIds.length === 0) {
      return [];
    }

    // Map to track resource scores
    const resourceScores = new Map<string, number>();

    // Find resources with shared categories (weight: 40%)
    if (categoryIds.length > 0) {
      const resourcesWithSharedCategories = await db
        .select({
          resourceId: resourceCategories.resourceId,
          categoryId: resourceCategories.categoryId,
        })
        .from(resourceCategories)
        .where(inArray(resourceCategories.categoryId, categoryIds));

      resourcesWithSharedCategories.forEach(row => {
        if (row.resourceId !== currentResourceId) {
          const currentScore = resourceScores.get(row.resourceId) || 0;
          resourceScores.set(row.resourceId, currentScore + 0.4);
        }
      });
    }

    // Find resources with shared tags (weight: 30%)
    if (tagIds.length > 0) {
      const resourcesWithSharedTags = await db
        .select({
          resourceId: resourceTags.resourceId,
          tagId: resourceTags.tagId,
        })
        .from(resourceTags)
        .where(inArray(resourceTags.tagId, tagIds));

      resourcesWithSharedTags.forEach(row => {
        if (row.resourceId !== currentResourceId) {
          const currentScore = resourceScores.get(row.resourceId) || 0;
          resourceScores.set(row.resourceId, currentScore + 0.3);
        }
      });
    }

    // If no related resources found, return empty array
    if (resourceScores.size === 0) {
      return [];
    }

    // Get the actual resources with their relations
    const relatedResources = await db.query.resources.findMany({
      where: inArray(resources.id, Array.from(resourceScores.keys())),
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

    // Transform and calculate final scores
    const transformedResources = relatedResources.map(resource => {
      const { resourceCategories, resourceTags, ...baseResource } = resource;
      const transformed = {
        ...baseResource,
        readingTime: baseResource.readingTime || '',
        categories: resourceCategories.map(rc => rc.category),
        tags: resourceTags.map(rt => rt.tag),
      };

      let score = resourceScores.get(resource.id) || 0;

      // Recency bonus (weight: 5%)
      const daysSincePublished = Math.floor(
        (Date.now() - new Date(resource.date).getTime()) / (1000 * 60 * 60 * 24)
      );
      const recencyScore = Math.max(0, 1 - daysSincePublished / 365) * 0.05;
      score += recencyScore;

      // Popularity bonus based on views (weight: 15%)
      const viewsScore = Math.min(1, (resource.views || 0) / 1000) * 0.15;
      score += viewsScore;

      // Reading time similarity bonus (additional)
      if (currentReadingTime && resource.readingTime) {
        const currentMinutes = parseInt(
          currentReadingTime.match(/\d+/)?.[0] || '0'
        );
        const resourceMinutes = parseInt(
          resource.readingTime.match(/\d+/)?.[0] || '0'
        );
        const timeDiff = Math.abs(currentMinutes - resourceMinutes);

        // Bonus if reading times are within 5 minutes of each other
        if (timeDiff <= 5) {
          score += 0.1;
        }
      }

      return { resource: transformed, score };
    });

    // Sort by score and return top results
    return transformedResources
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.resource);
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
 * Gets the previous and next resources for navigation
 * @param currentDate The date of the current resource
 * @param currentId The ID of the current resource
 * @returns Object with previous and next resource info
 */
export async function getAdjacentResources(
  currentDate: Date,
  currentId: string
): Promise<{
  previous: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}> {
  try {
    const currentDateStr = currentDate.toISOString().slice(0, 10);
    // Get previous resource (older, earlier date)
    const previousResource = await db.query.resources.findFirst({
      where: and(
        lt(resources.date, currentDateStr),
        eq(resources.status, 'published'),
        ne(resources.id, currentId)
      ),
      orderBy: [desc(resources.date)],
      columns: {
        slug: true,
        title: true,
      },
    });

    // Get next resource (newer, later date)
    const nextResource = await db.query.resources.findFirst({
      where: and(
        gt(resources.date, currentDateStr),
        eq(resources.status, 'published'),
        ne(resources.id, currentId)
      ),
      orderBy: [resources.date],
      columns: {
        slug: true,
        title: true,
      },
    });

    return {
      previous: previousResource || null,
      next: nextResource || null,
    };
  } catch (error) {
    console.error('Error fetching adjacent resources:', error);
    return {
      previous: null,
      next: null,
    };
  }
}

/**
 * Gets popular resources by category based on view count
 * @param categoryId The category ID to filter by (optional)
 * @param limit Maximum number of results to return (default: 5)
 */
export async function getPopularResources(
  categoryId?: string,
  limit = 5
): Promise<ResourceWithRelations[]> {
  try {
    let query;

    if (categoryId) {
      // Get resources with specific category, ordered by views
      const resourcesInCategory = await db
        .select({ resourceId: resourceCategories.resourceId })
        .from(resourceCategories)
        .where(eq(resourceCategories.categoryId, categoryId));

      const resourceIds = resourcesInCategory.map(r => r.resourceId);

      if (resourceIds.length === 0) {
        return [];
      }

      query = db.query.resources.findMany({
        where: inArray(resources.id, resourceIds),
        orderBy: [desc(resources.views), desc(resources.date)],
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
    } else {
      // Get all resources ordered by views
      query = db.query.resources.findMany({
        orderBy: [desc(resources.views), desc(resources.date)],
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
    }

    const result = await query;

    return result.map(resource => {
      const { resourceCategories, resourceTags, ...baseResource } = resource;
      return {
        ...baseResource,
        readingTime: baseResource.readingTime || '',
        categories: resourceCategories.map(rc => rc.category),
        tags: resourceTags.map(rt => rt.tag),
      };
    });
  } catch (error) {
    console.error('Error fetching popular resources:', error);
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
