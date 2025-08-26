import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL || 'https://praxisnotes.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/', '/api/'],
    },
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/resources-sitemap.xml`],
  };
}
