import { MetadataRoute } from 'next';
import { unstable_cache } from 'next/cache';
import { db } from '../db/config';
import { resources } from '../db/schema/resources';
import { categories } from '../db/schema/resource-category.table';
import { eq } from 'drizzle-orm';

// Cache sitemap data for better performance
const getCachedSitemapData = unstable_cache(
  async () => {
    const [allResources, allCategories] = await Promise.all([
      db.select().from(resources).where(eq(resources.status, 'published')),
      db.select().from(categories),
    ]);
    return { allResources, allCategories };
  },
  ['sitemap-data'],
  {
    tags: ['sitemap', 'resources', 'categories'],
    revalidate: 3600, // 1 hour - good balance between freshness and performance
  }
);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const requestStart = performance.now();

  // Fetch cached sitemap data
  const { allResources, allCategories } = await getCachedSitemapData();

  // Base URL from environment or default
  const baseUrl = process.env.SITE_URL || 'https://praxisnotes.com';

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features/create-aba-notes`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/features/review-aba-notes`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/features/track-aba-progress`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/features/hipaa-compliant-aba`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/design-system`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `https://app.praxisnotes.com/auth/sign-up`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];

  // Dynamic routes for resources
  const resourceRoutes = allResources.map(resource => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified: resource.updatedAt || new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic routes for categories
  const categoryRoutes = allCategories.map(category => ({
    url: `${baseUrl}/resources/categories/${category.slug}`,
    lastModified: category.updatedAt || new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const requestEnd = performance.now();
  console.log(`Sitemap generation took ${requestEnd - requestStart}ms`);
  console.log(
    `Generated sitemap with ${staticRoutes.length} static routes, ${resourceRoutes.length} resource routes, and ${categoryRoutes.length} category routes`
  );

  return [
    ...staticRoutes,
    ...resourceRoutes,
    ...categoryRoutes,
  ] as MetadataRoute.Sitemap;
}
