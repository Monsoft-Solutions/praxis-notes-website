import type { JsonLdSchema, JsonLdData } from './shared/types';

export function combineSchemas(...schemas: JsonLdSchema[]): JsonLdSchema {
  if (schemas.length === 1) {
    return schemas[0];
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Graph',
    '@graph': schemas,
  };
}

export function validateSchema(schema: JsonLdSchema): boolean {
  // Basic validation
  return Boolean(schema['@context'] && schema['@type']);
}

export function sanitizeJsonLd(data: JsonLdData): string {
  return JSON.stringify(data, null, 0).replace(/</g, '\\u003c');
}
