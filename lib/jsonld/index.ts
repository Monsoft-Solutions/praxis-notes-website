// Schemas
export { generateOrganizationSchema } from './schemas/organization.json-ld';
export { generateWebsiteSchema } from './schemas/website.json-ld';
export { generateSaaSProductSchema } from './schemas/saas-product.json-ld';

// Components
export { JsonLdScript } from './components/json-ld-script';
export { JsonLdProvider } from './components/json-ld-provider';

// Utils
export { combineSchemas, validateSchema, sanitizeJsonLd } from './utils';

// Types
export type { OrganizationSchemaProps } from './schemas/organization.json-ld';
export type { WebsiteSchemaProps } from './schemas/website.json-ld';
export type { SaaSProductSchemaProps } from './schemas/saas-product.json-ld';
export type { JsonLdSchema, JsonLdData } from './shared/types';
