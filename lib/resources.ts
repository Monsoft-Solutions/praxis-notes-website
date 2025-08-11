import { db } from 'website/db/config';
import { resources, type Resource } from 'website/db/schema';
import { eq, desc, count } from 'drizzle-orm';

/**
 * Loads resources from the database with pagination
 * @param page The page number (starts at 1)
 * @param pageSize Number of items per page
 * @returns Paginated resources and total count
 */
export async function getPaginatedResources(
  page = 1,
  pageSize = 6
): Promise<{
  resources: Resource[];
  totalCount: number;
  totalPages: number;
}> {
  try {
    const offset = (page - 1) * pageSize;

    // Get the resources for the current page
    const result = await db.query.resources.findMany({
      orderBy: resources => [desc(resources.date)],
      limit: pageSize,
      offset: offset,
    });

    // Get the total count of resources for pagination
    const countResult = await db.select({ count: count() }).from(resources);
    const totalCount = Number(countResult[0].count);
    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      resources: result.map(resource => ({
        ...resource,
        readingTime: resource.readingTime || '',
      })),
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
export async function getAllResources(): Promise<Resource[]> {
  try {
    const result = await db.query.resources.findMany({
      orderBy: resources => [desc(resources.date)],
    });

    return result.map(resource => ({
      ...resource,
      readingTime: resource.readingTime || '',
    }));
  } catch (error) {
    console.error('Error fetching resources:', error);
    return [];
  }
}

/**
 * Gets a resource by its slug
 */
export async function getResourceBySlug(
  slug: string | string[] | undefined
): Promise<Resource | undefined> {
  if (!slug) return undefined;

  // Handle if slug is an array (for backward compatibility)
  const slugValue = Array.isArray(slug) ? slug[0] : slug;

  try {
    const resource = await db.query.resources.findFirst({
      where: eq(resources.slug, slugValue),
    });

    if (!resource) return undefined;

    return {
      ...resource,
      readingTime: resource.readingTime || '',
    };
  } catch (error) {
    console.error(`Error fetching resource with slug ${slugValue}:`, error);
    return undefined;
  }
}
