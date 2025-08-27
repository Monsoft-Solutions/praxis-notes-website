import { NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';
import { db } from '../../db/config';
import { resources } from '../../db/schema/resources';
import { categories } from '../../db/schema/resource-category.table';
import { eq } from 'drizzle-orm';

// Cache resources sitemap data for better performance
const getCachedResourcesSitemapData = unstable_cache(
  async () => {
    const [allResources, allCategories] = await Promise.all([
      db
        .select({
          slug: resources.slug,
          updatedAt: resources.updatedAt,
          createdAt: resources.createdAt,
          status: resources.status,
        })
        .from(resources)
        .where(eq(resources.status, 'published')),
      db
        .select({
          slug: categories.slug,
          updatedAt: categories.updatedAt,
          createdAt: categories.createdAt,
        })
        .from(categories),
    ]);
    return { allResources, allCategories };
  },
  ['resources-sitemap-data'],
  {
    tags: ['resources-sitemap', 'resources', 'categories'],
    revalidate: 3600, // 1 hour - good balance between freshness and performance
  }
);

export async function GET() {
  const requestStart = performance.now();

  try {
    // Fetch cached sitemap data
    const { allResources, allCategories } =
      await getCachedResourcesSitemapData();

    // Base URL from environment or default
    const baseUrl = process.env.SITE_URL || 'https://praxisnotes.com';

    // Generate XML sitemap for resources
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/resources</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/resources/categories</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

${allResources
  .map(
    resource => `  <url>
    <loc>${baseUrl}/resources/${resource.slug}</loc>
    <lastmod>${resource.updatedAt ? new Date(resource.updatedAt).toISOString() : resource.createdAt ? new Date(resource.createdAt).toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}

${allCategories
  .map(
    category => `  <url>
    <loc>${baseUrl}/resources/categories/${category.slug}</loc>
    <lastmod>${category.updatedAt ? new Date(category.updatedAt).toISOString() : category.createdAt ? new Date(category.createdAt).toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    const requestEnd = performance.now();
    console.log(
      `Resources sitemap generation took ${requestEnd - requestStart}ms`
    );
    console.log(
      `Generated resources sitemap with ${allResources.length} resource pages and ${allCategories.length} category pages`
    );

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error generating resources sitemap:', error);

    // Return minimal sitemap in case of error
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${process.env.SITE_URL || 'https://praxisnotes.com'}/resources</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

    return new NextResponse(fallbackSitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300, s-maxage=300', // Shorter cache for fallback
      },
      status: 500,
    });
  }
}
