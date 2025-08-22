import type { JsonLdSchema } from './shared/types';

/**
 * Performance optimizations for JSON-LD schemas
 */
export class SchemaPerformance {
  private static schemaCache = new Map<string, JsonLdSchema>();

  /**
   * Memoize schema generation for better performance
   */
  static memoizeSchema<T extends unknown[], R extends JsonLdSchema>(
    fn: (...args: T) => R,
    keyGenerator?: (...args: T) => string
  ): (...args: T) => R {
    return (...args: T): R => {
      const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);

      if (this.schemaCache.has(key)) {
        return this.schemaCache.get(key) as R;
      }

      const result = fn(...args);
      this.schemaCache.set(key, result);
      return result;
    };
  }

  /**
   * Clear schema cache (useful for development or memory management)
   */
  static clearCache(): void {
    this.schemaCache.clear();
  }

  /**
   * Get cache statistics
   */
  static getCacheStats(): {
    size: number;
    keys: string[];
  } {
    return {
      size: this.schemaCache.size,
      keys: Array.from(this.schemaCache.keys()),
    };
  }

  /**
   * Compress JSON-LD output by removing unnecessary whitespace
   */
  static compressSchema(schema: JsonLdSchema): string {
    return JSON.stringify(schema).replace(/</g, '\\u003c');
  }

  /**
   * Lazy load schemas only when needed
   */
  static createLazySchema<T extends unknown[]>(
    generator: (...args: T) => JsonLdSchema
  ): (...args: T) => () => JsonLdSchema {
    return (...args: T) => {
      let schema: JsonLdSchema | null = null;

      return () => {
        if (!schema) {
          schema = generator(...args);
        }
        return schema;
      };
    };
  }

  /**
   * Batch multiple schemas for efficient rendering
   */
  static batchSchemas(schemas: JsonLdSchema[]): JsonLdSchema {
    if (schemas.length === 1) {
      return schemas[0];
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'Graph',
      '@graph': schemas,
    } as JsonLdSchema;
  }

  /**
   * Remove duplicate schemas by @type and key properties
   */
  static deduplicateSchemas(schemas: JsonLdSchema[]): JsonLdSchema[] {
    const seen = new Set<string>();

    return schemas.filter(schema => {
      const key = `${schema['@type']}-${schema.name || schema.headline || schema.url}`;

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
  }

  /**
   * Analyze schema size and suggest optimizations
   */
  static analyzeSchemaSize(schema: JsonLdSchema): {
    size: number;
    suggestions: string[];
  } {
    const jsonString = JSON.stringify(schema);
    const size = new Blob([jsonString]).size;
    const suggestions: string[] = [];

    // Size-based suggestions
    if (size > 10000) {
      // 10KB
      suggestions.push(
        'Schema is quite large (>10KB). Consider splitting into multiple schemas.'
      );
    }

    // Content-based suggestions
    if (schema.description && (schema.description as string).length > 500) {
      suggestions.push(
        'Description is very long. Consider shortening for better performance.'
      );
    }

    if (Array.isArray(schema.keywords) && schema.keywords.length > 20) {
      suggestions.push(
        'Too many keywords. Consider focusing on the most important ones.'
      );
    }

    return { size, suggestions };
  }
}
