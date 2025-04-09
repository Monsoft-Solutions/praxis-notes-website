import { db } from "website/db/config";
import { resources } from "website/db/schema";
import { eq, desc } from "drizzle-orm";

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  content: string;
  cta?: {
    title: string;
    content: string;
    buttonText: string;
    buttonLink: string;
  } | null;
  author?: {
    name: string;
    title?: string;
    image?: string;
  } | null;
  tags?: string[] | null;
  image?: string | null;
}

/**
 * Loads all resources from the database
 */
export async function getAllResources(): Promise<Resource[]> {
  try {
    const result = await db.query.resources.findMany({
      orderBy: (resources) => [desc(resources.date)],
    });

    return result.map((resource) => ({
      ...resource,
      readingTime: resource.readingTime || "",
    }));
  } catch (error) {
    console.error("Error fetching resources:", error);
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
      readingTime: resource.readingTime || "",
    };
  } catch (error) {
    console.error(`Error fetching resource with slug ${slugValue}:`, error);
    return undefined;
  }
}
