// Schemas
export { generateOrganizationSchema } from './schemas/organization.json-ld';
export { generateWebsiteSchema } from './schemas/website.json-ld';
export { generateSaaSProductSchema } from './schemas/saas-product.json-ld';
export { generateBlogPostingSchema } from './schemas/blog-posting.json-ld';
export { generateArticleSchema } from './schemas/article.json-ld';
export { generateFAQPageSchema } from './schemas/faq-page.json-ld';
export { generatePricingPageSchema } from './schemas/pricing-page.json-ld';
export { generateContactPageSchema } from './schemas/contact-page.json-ld';
export { generateAboutPageSchema } from './schemas/about-page.json-ld';
export { generateBreadcrumbSchema } from './schemas/breadcrumb.json-ld';

// Components
export { JsonLdScript } from './components/json-ld-script';
export { JsonLdProvider } from './components/json-ld-provider';

// Utils
export { combineSchemas, validateSchema, sanitizeJsonLd } from './utils';

// Advanced Utils (Phase 5)
export { SchemaValidator } from './validation';
export { MetadataSync } from './metadata-sync';
export { SchemaPerformance } from './performance';

// Types
export type { OrganizationSchemaProps } from './schemas/organization.json-ld';
export type { WebsiteSchemaProps } from './schemas/website.json-ld';
export type { SaaSProductSchemaProps } from './schemas/saas-product.json-ld';
export type { BlogPostingSchemaProps } from './schemas/blog-posting.json-ld';
export type { ArticleSchemaProps } from './schemas/article.json-ld';
export type { FAQPageSchemaProps, FAQItem } from './schemas/faq-page.json-ld';
export type {
  PricingPageSchemaProps,
  PricingPlan,
} from './schemas/pricing-page.json-ld';
export type { AboutPageSchemaProps } from './schemas/about-page.json-ld';
export type {
  BreadcrumbSchemaProps,
  BreadcrumbItem,
} from './schemas/breadcrumb.json-ld';
export type { JsonLdSchema, JsonLdData } from './shared/types';
