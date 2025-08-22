import type { Metadata } from 'next';
import type { JsonLdSchema } from './shared/types';

/**
 * Utilities to sync JSON-LD data with Next.js metadata
 */
export class MetadataSync {
  /**
   * Extract metadata from JSON-LD schema for Next.js metadata
   */
  static extractMetadataFromSchema(schema: JsonLdSchema): Partial<Metadata> {
    switch (schema['@type']) {
      case 'BlogPosting':
        return this.extractBlogPostingMetadata(schema);
      case 'Article':
        return this.extractArticleMetadata(schema);
      case 'Product':
        return this.extractProductMetadata(schema);
      case 'Organization':
        return this.extractOrganizationMetadata(schema);
      default:
        return {};
    }
  }

  private static extractBlogPostingMetadata(
    schema: JsonLdSchema
  ): Partial<Metadata> {
    return {
      title: schema.headline as string,
      description: schema.description as string,
      authors: schema.author
        ? [{ name: (schema.author as Record<string, unknown>).name as string }]
        : undefined,
      keywords: Array.isArray(schema.keywords)
        ? schema.keywords.join(', ')
        : (schema.keywords as string),
      openGraph: {
        type: 'article',
        title: schema.headline as string,
        description: schema.description as string,
        publishedTime: schema.datePublished as string,
        modifiedTime: schema.dateModified as string,
        authors: schema.author
          ? [(schema.author as Record<string, unknown>).name as string]
          : undefined,
        images: schema.image
          ? [
              typeof schema.image === 'string'
                ? schema.image
                : ((schema.image as Record<string, unknown>).url as string),
            ]
          : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: schema.headline as string,
        description: schema.description as string,
        images: schema.image
          ? [
              typeof schema.image === 'string'
                ? schema.image
                : ((schema.image as Record<string, unknown>).url as string),
            ]
          : undefined,
      },
    };
  }

  private static extractArticleMetadata(
    schema: JsonLdSchema
  ): Partial<Metadata> {
    return this.extractBlogPostingMetadata(schema); // Similar structure
  }

  private static extractProductMetadata(
    schema: JsonLdSchema
  ): Partial<Metadata> {
    return {
      title: schema.name as string,
      description: schema.description as string,
      openGraph: {
        type: 'website',
        title: schema.name as string,
        description: schema.description as string,
        images: schema.image
          ? [
              typeof schema.image === 'string'
                ? schema.image
                : ((schema.image as Record<string, unknown>).url as string),
            ]
          : undefined,
      },
    };
  }

  private static extractOrganizationMetadata(
    schema: JsonLdSchema
  ): Partial<Metadata> {
    return {
      title: schema.name as string,
      description: schema.description as string,
      openGraph: {
        type: 'website',
        title: schema.name as string,
        description: schema.description as string,
        images: schema.logo ? [schema.logo as string] : undefined,
      },
    };
  }

  /**
   * Generate unified metadata combining Next.js metadata with JSON-LD
   */
  static generateUnifiedMetadata(
    baseMetadata: Metadata,
    schemas: JsonLdSchema[]
  ): Metadata {
    const extractedMetadata = schemas
      .map(schema => this.extractMetadataFromSchema(schema))
      .reduce((acc, meta) => ({ ...acc, ...meta }), {});

    return {
      ...baseMetadata,
      ...extractedMetadata,
      // Ensure base metadata takes precedence for critical fields
      title: baseMetadata.title || extractedMetadata.title,
      description: baseMetadata.description || extractedMetadata.description,
    };
  }

  /**
   * Validate consistency between metadata and JSON-LD
   */
  static validateMetadataConsistency(
    metadata: Metadata,
    schemas: JsonLdSchema[]
  ): {
    consistent: boolean;
    issues: string[];
  } {
    const issues: string[] = [];

    schemas.forEach((schema, index) => {
      if (schema['@type'] === 'BlogPosting' || schema['@type'] === 'Article') {
        // Check title consistency
        const metaTitle =
          typeof metadata.title === 'string'
            ? metadata.title
            : ((metadata.title as Record<string, unknown>)?.default as string);

        if (
          schema.headline &&
          metaTitle &&
          !metaTitle.includes(schema.headline as string)
        ) {
          issues.push(
            `Schema ${index + 1}: Title mismatch between metadata and JSON-LD`
          );
        }

        // Check description consistency
        if (
          schema.description &&
          metadata.description &&
          schema.description !== metadata.description
        ) {
          issues.push(
            `Schema ${index + 1}: Description mismatch between metadata and JSON-LD`
          );
        }
      }
    });

    return {
      consistent: issues.length === 0,
      issues,
    };
  }
}
