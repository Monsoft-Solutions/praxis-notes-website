import { unstable_cache } from 'next/cache';
import { db } from 'website/db/config';
import { tags, resources, resourceTags } from 'website/db/schema';
import { eq, desc, count, sql, inArray } from 'drizzle-orm';
import type {
  ResourceWithRelations,
  TagWithCount,
  TagWithResources,
} from './types';

/**
 * Internal function to fetch all tags with resource counts
 */
async function _getAllTagsWithCounts(): Promise<TagWithCount[]> {
  try {
    const result = await db
      .select({
        id: tags.id,
        name: tags.name,
        slug: tags.slug,
        createdAt: tags.createdAt,
        resourceCount: count(resourceTags.resourceId),
      })
      .from(tags)
      .leftJoin(resourceTags, eq(tags.id, resourceTags.tagId))
      .leftJoin(resources, eq(resourceTags.resourceId, resources.id))
      .where(eq(resources.status, 'published'))
      .groupBy(tags.id, tags.name, tags.slug, tags.createdAt)
      .orderBy(desc(count(resourceTags.resourceId)), tags.name);

    return result.map(item => ({
      ...item,
      resourceCount: Number(item.resourceCount),
    }));
  } catch (error) {
    console.error('Error fetching tags with counts:', error);
    return [];
  }
}

/**
 * Gets a tag by its slug with associated resources
 * @param slug The tag slug
 * @param page The page number for pagination (optional)
 * @param pageSize Number of resources per page (optional)
 * @returns Tag with its resources and pagination info
 */
export async function getTagBySlugWithResources(
  slug: string,
  page = 1,
  pageSize = 6
): Promise<{
  tag: TagWithResources | null;
  totalCount: number;
  totalPages: number;
}> {
  try {
    // First, get the tag
    const tagResult = await db.query.tags.findFirst({
      where: eq(tags.slug, slug),
    });

    if (!tagResult) {
      return {
        tag: null,
        totalCount: 0,
        totalPages: 0,
      };
    }

    // Use the helper function to get server-side filtered and paginated resources
    const resourcesData = await _getResourcesByTag(slug, page, pageSize);

    // Build the TagWithResources structure from the helper's result
    const tagWithResources: TagWithResources = {
      ...tagResult,
      resources: resourcesData.resources.map(resource => ({
        id: resource.id,
        slug: resource.slug,
        title: resource.title,
        excerpt: resource.excerpt || resource.metaDescription,
        date: resource.date,
        featuredImageId: resource.featuredImageId,
      })),
    };

    return {
      tag: tagWithResources,
      totalCount: resourcesData.totalCount,
      totalPages: resourcesData.totalPages,
    };
  } catch (error) {
    console.error('Error fetching tag with resources:', error);
    return {
      tag: null,
      totalCount: 0,
      totalPages: 0,
    };
  }
}

/**
 * Internal function to get resources by tag slug
 */
async function _getResourcesByTag(
  slug: string,
  page = 1,
  pageSize = 6
): Promise<{
  resources: ResourceWithRelations[];
  tag: Omit<TagWithResources, 'resources'> | null;
  totalCount: number;
  totalPages: number;
}> {
  try {
    // First, get the tag
    const tagResult = await db.query.tags.findFirst({
      where: eq(tags.slug, slug),
    });

    if (!tagResult) {
      return {
        resources: [],
        tag: null,
        totalCount: 0,
        totalPages: 0,
      };
    }

    // Get total count of published resources with this tag
    const countResult = await db
      .select({ count: count() })
      .from(resources)
      .innerJoin(resourceTags, eq(resources.id, resourceTags.resourceId))
      .where(
        sql`${resourceTags.tagId} = ${tagResult.id} AND ${resources.status} = 'published'`
      );

    const totalCount = Number(countResult[0].count);
    const totalPages = Math.ceil(totalCount / pageSize);

    // Get paginated resources for this tag with full relations
    const offset = (page - 1) * pageSize;

    const resourcesResult = await db
      .select()
      .from(resources)
      .innerJoin(resourceTags, eq(resources.id, resourceTags.resourceId))
      .where(
        sql`${resourceTags.tagId} = ${tagResult.id} AND ${resources.status} = 'published'`
      )
      .orderBy(desc(resources.date))
      .limit(pageSize)
      .offset(offset);

    // Get full resource details with relations
    const resourceIds = resourcesResult.map(item => item.resources.id);

    if (resourceIds.length === 0) {
      return {
        resources: [],
        tag: tagResult,
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
      tag: tagResult,
      totalCount,
      totalPages,
    };
  } catch (error) {
    console.error('Error fetching resources by tag:', error);
    return {
      resources: [],
      tag: null,
      totalCount: 0,
      totalPages: 0,
    };
  }
}

/**
 * Internal function to get all tags
 */
async function _getAllTags() {
  try {
    const result = await db.query.tags.findMany({
      orderBy: [tags.name],
    });

    return result;
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

/**
 * Loads all tags with resource counts (cached)
 * @returns Array of tags with their resource counts
 */
export const getAllTagsWithCounts = unstable_cache(
  _getAllTagsWithCounts,
  ['tags-with-counts'],
  {
    tags: ['tags', 'resources'],
    revalidate: 43200, // 12 hours
  }
);

/**
 * Gets resources by tag slug with full relations for display (cached)
 * @param slug The tag slug
 * @param page The page number for pagination
 * @param pageSize Number of resources per page
 * @returns Paginated resources and tag info
 */
export const getResourcesByTag = unstable_cache(
  _getResourcesByTag,
  ['resources-by-tag'],
  {
    tags: ['tags', 'resources'],
    revalidate: 43200, // 12 hours
  }
);

/**
 * Gets all tags for navigation and listing (cached)
 * @returns Array of basic tag information
 */
export const getAllTags = unstable_cache(_getAllTags, ['all-tags'], {
  tags: ['tags'],
  revalidate: 43200, // 12 hours - tags change infrequently
});
