import { SCHEMA_CONTEXT, WEBSITE_BASE_URL } from '../shared/constants';
import { ORGANIZATION_BASE_DATA } from '../shared/organization-data';
import type { ResourceWithRelations } from '../../types/resource';

export interface BlogPostingSchemaProps {
  resource: ResourceWithRelations;
  url: string;
}

export function generateBlogPostingSchema({
  resource,
  url,
}: BlogPostingSchemaProps) {
  console.log('Generating blog posting schema for resource:', resource.title);
  const output = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BlogPosting',
    headline: resource.title,
    description: resource.metaDescription || resource.excerpt,
    datePublished: resource.date,
    dateModified: resource.updatedAt,
    author: resource.author
      ? {
          '@type': 'Person',
          name: resource.author.name,
          ...(resource.author.avatarUrl && {
            image: resource.author.avatarUrl,
          }),
        }
      : ORGANIZATION_BASE_DATA,
    publisher: ORGANIZATION_BASE_DATA,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(resource.featuredImage && {
      image: {
        '@type': 'ImageObject',
        url: resource.featuredImage.url,
        alt: resource.featuredImage.alt,
        ...(resource.featuredImage.width && {
          width: resource.featuredImage.width,
        }),
        ...(resource.featuredImage.height && {
          height: resource.featuredImage.height,
        }),
      },
    }),
    keywords: [
      ...(resource.metaKeywords?.split(',').map(k => k.trim()) || []),
      ...resource.categories.map(cat => cat.name),
      ...resource.tags.map(tag => tag.name),
    ],
    about: {
      '@type': 'Thing',
      name: 'Applied Behavior Analysis',
      description: 'ABA therapy documentation and session notes',
    },
    isPartOf: {
      '@type': 'Blog',
      name: 'Praxis Notes Resources',
      url: `${WEBSITE_BASE_URL}/resources`,
    },
    ...(resource.readingTime && {
      timeRequired: resource.readingTime,
    }),
  };

  return output;
}
