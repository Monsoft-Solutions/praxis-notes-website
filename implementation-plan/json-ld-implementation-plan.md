# JSON-LD Implementation Plan for Praxis Notes Website

## Overview

This implementation plan provides a comprehensive approach to enhance SEO through JSON-LD structured data implementation across the Praxis Notes website. The plan is designed for NextJS 15 and focuses on creating a centralized, reusable system for managing structured data across multiple page types.

## Project Context

**Website:** Praxis Notes - AI-Powered ABA Session Notes SaaS Platform
**Technology:** NextJS 15, TypeScript, Tailwind CSS
**Current Pages:**

- Home (SaaS landing page)
- About (organization/team information)
- Pricing (subscription plans)
- Resources (blog/articles)
- Individual resource pages
- Features pages
- Contact, Terms, Privacy pages

## Phase 1: Foundation Setup (Week 1)

### 1.1 Create JSON-LD Schema Directory Structure

```
lib/
  jsonld/
    schemas/
      organization.json-ld.ts          # Organization schema
      website.json-ld.ts              # Website schema
      saas-product.json-ld.ts         # SoftwareApplication schema
      blog-posting.json-ld.ts         # BlogPosting schema
      article.json-ld.ts              # Article schema
      faq-page.json-ld.ts            # FAQPage schema
      contact-page.json-ld.ts        # ContactPage schema
      about-page.json-ld.ts          # AboutPage schema
      pricing-page.json-ld.ts        # Service/Product pricing
      breadcrumb.json-ld.ts          # BreadcrumbList schema
    shared/
      organization-data.json-ld.ts    # Reusable organization info
      author-data.json-ld.ts         # Author information
      constants.json-ld.ts           # Common constants
      utils.json-ld.ts               # Helper functions
    components/
      json-ld-provider.tsx   # React component for injection
      json-ld-script.tsx     # Generic script component
    index.ts                 # Main exports
```

### 1.2 Install Required Dependencies

```bash
# If not already installed
npm install @types/react @types/node
```

### 1.3 Create Base Infrastructure Files

#### `lib/jsonld/shared/organization-data.ts`

```typescript
import { CONTACT_INFO } from '../../contact-info';

export const ORGANIZATION_BASE_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Praxis Notes',
  alternateName: 'PraxisNotes',
  description:
    'AI-Powered ABA Session Notes platform for RBTs, BCBAs, and clinics',
  url: 'https://praxisnotes.com',
  logo: 'https://praxisnotes.com/images/logo/praxis-note-logo-main.png',
  email: CONTACT_INFO.email,
  telephone: CONTACT_INFO.phone.e164,
  address: {
    '@type': 'PostalAddress',
    addressLocality: CONTACT_INFO.address.city,
    addressRegion: CONTACT_INFO.address.state,
    addressCountry: CONTACT_INFO.address.country,
  },
  sameAs: [
    CONTACT_INFO.social.facebook,
    CONTACT_INFO.social.instagram,
    CONTACT_INFO.social.tiktok,
  ],
  foundingDate: '2023',
  industryIdentifier: 'Healthcare Technology',
  keywords: [
    'ABA notes',
    'session notes',
    'applied behavior analysis',
    'healthcare technology',
  ],
} as const;
```

#### `lib/jsonld/shared/constants.ts`

```typescript
export const SCHEMA_CONTEXT = 'https://schema.org';
export const WEBSITE_BASE_URL = 'https://praxisnotes.com';

export const COMMON_KEYWORDS = [
  'ABA notes',
  'session notes',
  'applied behavior analysis',
  'RBT notes',
  'BCBA documentation',
  'ABA therapy documentation',
  'behavioral therapy',
  'HIPAA compliant',
] as const;

export const AUTHOR_DEFAULT = {
  '@type': 'Organization',
  name: 'Praxis Notes Team',
  url: 'https://praxisnotes.com/about',
} as const;
```

## Phase 2: Core Schema Implementation (Week 2)

### 2.1 Implement Base Schemas

#### `lib/jsonld/schemas/organization.ts`

```typescript
import { ORGANIZATION_BASE_DATA } from '../shared/organization-data';

export interface OrganizationSchemaProps {
  additionalInfo?: {
    numberOfEmployees?: string;
    foundingDate?: string;
    awards?: string[];
  };
}

export function generateOrganizationSchema(props?: OrganizationSchemaProps) {
  return {
    ...ORGANIZATION_BASE_DATA,
    ...(props?.additionalInfo?.numberOfEmployees && {
      numberOfEmployees: props.additionalInfo.numberOfEmployees,
    }),
    ...(props?.additionalInfo?.foundingDate && {
      foundingDate: props.additionalInfo.foundingDate,
    }),
    ...(props?.additionalInfo?.awards && {
      award: props.additionalInfo.awards,
    }),
  };
}
```

#### `lib/jsonld/schemas/website.ts`

```typescript
import { WEBSITE_BASE_URL, SCHEMA_CONTEXT } from '../shared/constants';
import { ORGANIZATION_BASE_DATA } from '../shared/organization-data';

export interface WebsiteSchemaProps {
  name?: string;
  description?: string;
  about?: string;
}

export function generateWebsiteSchema(props?: WebsiteSchemaProps) {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'WebSite',
    name: props?.name || 'Praxis Notes',
    description: props?.description || 'AI-Powered ABA Session Notes platform',
    url: WEBSITE_BASE_URL,
    publisher: ORGANIZATION_BASE_DATA,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${WEBSITE_BASE_URL}/resources?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    about:
      props?.about ||
      'Applied Behavior Analysis documentation and session notes',
  };
}
```

#### `lib/jsonld/schemas/saas-product.ts`

```typescript
import { SCHEMA_CONTEXT, WEBSITE_BASE_URL } from '../shared/constants';
import { ORGANIZATION_BASE_DATA } from '../shared/organization-data';

export interface SaaSProductSchemaProps {
  name?: string;
  description?: string;
  features?: string[];
  pricing?: {
    currency: string;
    minPrice: number;
    maxPrice: number;
  };
}

export function generateSaaSProductSchema(props?: SaaSProductSchemaProps) {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'SoftwareApplication',
    name: props?.name || 'Praxis Notes',
    description:
      props?.description ||
      'AI-Powered ABA Session Notes platform for behavioral therapy professionals',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web Browser',
    url: WEBSITE_BASE_URL,
    publisher: ORGANIZATION_BASE_DATA,
    offers: props?.pricing
      ? {
          '@type': 'AggregateOffer',
          priceCurrency: props.pricing.currency,
          lowPrice: props.pricing.minPrice,
          highPrice: props.pricing.maxPrice,
          offerCount: 4, // Free, Individual, Pro, Team
          availability: 'https://schema.org/InStock',
        }
      : undefined,
    featureList: props?.features || [
      'AI-powered session note generation',
      'HIPAA-compliant documentation',
      'Insurance-ready notes',
      'Multi-client management',
      'Real-time collaboration',
    ],
    screenshot: `${WEBSITE_BASE_URL}/images/session-screenshot.png`,
    softwareVersion: '2.0',
    datePublished: '2023-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  };
}
```

### 2.2 Create React Components

#### `lib/jsonld/components/json-ld-script.tsx`

```typescript
import Script from 'next/script';

interface JsonLdScriptProps {
  data: Record<string, any>;
  id?: string;
}

export function JsonLdScript({ data, id }: JsonLdScriptProps) {
  return (
    <Script
      id={id || 'json-ld'}
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0).replace(/</g, '\\u003c'),
      }}
    />
  );
}
```

#### `lib/jsonld/components/json-ld-provider.tsx`

```typescript
import { JsonLdScript } from './json-ld-script';

interface JsonLdProviderProps {
  schemas: Record<string, any>[];
  children?: React.ReactNode;
}

export function JsonLdProvider({ schemas, children }: JsonLdProviderProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLdScript
          key={`schema-${index}`}
          data={schema}
          id={`json-ld-${index}`}
        />
      ))}
      {children}
    </>
  );
}
```

## Phase 3: Page-Specific Schema Implementation (Week 3)

### 3.1 Blog/Resource Schemas

#### `lib/jsonld/schemas/blog-posting.ts`

```typescript
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
  return {
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
}
```

### 3.2 Pricing Page Schema

#### `lib/jsonld/schemas/pricing-page.ts`

```typescript
import { SCHEMA_CONTEXT, WEBSITE_BASE_URL } from '../shared/constants';
import { ORGANIZATION_BASE_DATA } from '../shared/organization-data';

export interface PricingPlan {
  name: string;
  price: number;
  currency: string;
  billingPeriod: 'MONTH' | 'YEAR';
  description: string;
  features: string[];
}

export interface PricingPageSchemaProps {
  plans: PricingPlan[];
}

export function generatePricingPageSchema({ plans }: PricingPageSchemaProps) {
  const offers = plans.map(plan => ({
    '@type': 'Offer',
    name: plan.name,
    description: plan.description,
    price: plan.price,
    priceCurrency: plan.currency,
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: plan.price,
      priceCurrency: plan.currency,
      billingIncrement: plan.billingPeriod === 'MONTH' ? 'P1M' : 'P1Y',
    },
    eligibleQuantity: {
      '@type': 'QuantitativeValue',
      minValue: 1,
    },
    availability: 'https://schema.org/InStock',
    validFrom: new Date().toISOString(),
    seller: ORGANIZATION_BASE_DATA,
  }));

  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Product',
    name: 'Praxis Notes Subscription Plans',
    description:
      'AI-powered ABA session notes platform with flexible pricing plans',
    brand: ORGANIZATION_BASE_DATA,
    offers: offers,
    category: 'Software as a Service',
    url: `${WEBSITE_BASE_URL}/pricing`,
  };
}
```

### 3.3 FAQ Schema

#### `lib/jsonld/schemas/faq-page.ts`

```typescript
import { SCHEMA_CONTEXT } from '../shared/constants';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQPageSchemaProps {
  faqs: FAQItem[];
  aboutPage?: string;
}

export function generateFAQPageSchema({ faqs, aboutPage }: FAQPageSchemaProps) {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    ...(aboutPage && {
      about: aboutPage,
    }),
  };
}
```

## Phase 4: Integration with Pages (Week 4)

### 4.1 Update Root Layout

#### `app/layout.tsx` (add to existing)

```typescript
import { generateOrganizationSchema, generateWebsiteSchema } from 'website/lib/jsonld';
import { JsonLdProvider } from 'website/lib/jsonld/components/json-ld-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Base schemas for all pages
  const baseSchemas = [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
  ];

  return (
    <html lang="en" className="scroll-smooth w-full">
      <head>
        <JsonLdProvider schemas={baseSchemas} />
      </head>
      <body>
        {/* existing content */}
        {children}
      </body>
    </html>
  );
}
```

### 4.2 Update Home Page

#### `app/page.tsx` (add to existing)

```typescript
import { generateSaaSProductSchema } from 'website/lib/jsonld';
import { JsonLdScript } from 'website/lib/jsonld/components/json-ld-script';

export default function Home() {
  const productSchema = generateSaaSProductSchema({
    features: [
      'AI-powered session note generation',
      'HIPAA-compliant documentation',
      'Insurance-ready notes',
      'Multi-client management',
      'Real-time collaboration',
    ],
    pricing: {
      currency: 'USD',
      minPrice: 0, // Free plan
      maxPrice: 199, // Team plan
    },
  });

  return (
    <>
      <JsonLdScript data={productSchema} id="saas-product-schema" />
      {/* existing content */}
    </>
  );
}
```

### 4.3 Update About Page

#### `app/about/page.tsx` (add to existing)

```typescript
import { generateOrganizationSchema } from 'website/lib/jsonld';
import { JsonLdScript } from 'website/lib/jsonld/components/json-ld-script';

export default function AboutPage() {
  const organizationSchema = generateOrganizationSchema({
    additionalInfo: {
      numberOfEmployees: '10-50',
      foundingDate: '2023',
      awards: ['Healthcare Innovation Award 2024'],
    },
  });

  return (
    <>
      <JsonLdScript data={organizationSchema} id="about-organization-schema" />
      {/* existing content */}
    </>
  );
}
```

### 4.4 Update Resource Pages

#### `app/resources/[slug]/page.tsx` (add to existing)

```typescript
import { generateBlogPostingSchema } from 'website/lib/jsonld';
import { JsonLdScript } from 'website/lib/jsonld/components/json-ld-script';

export default async function ResourcePage({ params }: { params: Promise<ResourceParams> }) {
  const slug = (await params).slug;
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const blogPostingSchema = generateBlogPostingSchema({
    resource,
    url: `https://praxisnotes.com/resources/${slug}`,
  });

  return (
    <>
      <JsonLdScript data={blogPostingSchema} id="blog-posting-schema" />
      {/* existing content */}
    </>
  );
}
```

### 4.5 Update Pricing Page

#### `app/pricing/page.tsx` (add to existing)

```typescript
import { generatePricingPageSchema, generateFAQPageSchema } from 'website/lib/jsonld';
import { JsonLdScript } from 'website/lib/jsonld/components/json-ld-script';

export default function PricingPage() {
  const pricingSchema = generatePricingPageSchema({
    plans: [
      {
        name: 'Free',
        price: 0,
        currency: 'USD',
        billingPeriod: 'MONTH',
        description: 'Perfect for trying out Praxis Notes',
        features: ['10 notes per month', '1 client', 'Basic templates'],
      },
      {
        name: 'Individual',
        price: 29,
        currency: 'USD',
        billingPeriod: 'MONTH',
        description: 'For individual ABA professionals',
        features: ['30 notes per month', '1 client', 'Advanced templates', 'Priority support'],
      },
      // Add other plans...
    ],
  });

  const faqSchema = generateFAQPageSchema({
    faqs: [
      {
        question: 'Can I cancel my subscription at any time?',
        answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.',
      },
      // Add other FAQs...
    ],
    aboutPage: 'ABA session notes pricing and subscription plans',
  });

  return (
    <>
      <JsonLdScript data={pricingSchema} id="pricing-schema" />
      <JsonLdScript data={faqSchema} id="faq-schema" />
      {/* existing content */}
    </>
  );
}
```

## Phase 5: Advanced Features & Optimization (Week 5)

### 5.1 Breadcrumb Schema

#### `lib/jsonld/schemas/breadcrumb.ts`

```typescript
import { SCHEMA_CONTEXT, WEBSITE_BASE_URL } from '../shared/constants';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function generateBreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
```

### 5.2 Contact Page Schema

#### `lib/jsonld/schemas/contact-page.ts`

```typescript
import { SCHEMA_CONTEXT } from '../shared/constants';
import { ORGANIZATION_BASE_DATA } from '../shared/organization-data';

export function generateContactPageSchema() {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'ContactPage',
    mainEntity: ORGANIZATION_BASE_DATA,
    significantLink: ['mailto:support@praxisnotes.com', 'tel:+13057974357'],
    about: 'Contact information for Praxis Notes customer support and sales',
  };
}
```

### 5.3 Schema Aggregation Utility

#### `lib/jsonld/utils.ts`

```typescript
export function combineSchemas(
  ...schemas: Record<string, any>[]
): Record<string, any> {
  if (schemas.length === 1) {
    return schemas[0];
  }

  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}

export function validateSchema(schema: Record<string, any>): boolean {
  // Basic validation
  return schema['@context'] && schema['@type'];
}

export function sanitizeJsonLd(data: Record<string, any>): string {
  return JSON.stringify(data, null, 0).replace(/</g, '\\u003c');
}
```

### 5.4 Main Export File

#### `lib/jsonld/index.ts`

```typescript
// Schemas
export { generateOrganizationSchema } from './schemas/organization';
export { generateWebsiteSchema } from './schemas/website';
export { generateSaaSProductSchema } from './schemas/saas-product';
export { generateBlogPostingSchema } from './schemas/blog-posting';
export { generatePricingPageSchema } from './schemas/pricing-page';
export { generateFAQPageSchema } from './schemas/faq-page';
export { generateBreadcrumbSchema } from './schemas/breadcrumb';
export { generateContactPageSchema } from './schemas/contact-page';

// Components
export { JsonLdScript } from './components/json-ld-script';
export { JsonLdProvider } from './components/json-ld-provider';

// Utils
export { combineSchemas, validateSchema, sanitizeJsonLd } from './utils';

// Types
export type { OrganizationSchemaProps } from './schemas/organization';
export type { WebsiteSchemaProps } from './schemas/website';
export type { SaaSProductSchemaProps } from './schemas/saas-product';
export type { BlogPostingSchemaProps } from './schemas/blog-posting';
export type {
  PricingPageSchemaProps,
  PricingPlan,
} from './schemas/pricing-page';
export type { FAQPageSchemaProps, FAQItem } from './schemas/faq-page';
export type {
  BreadcrumbSchemaProps,
  BreadcrumbItem,
} from './schemas/breadcrumb';
```

## Phase 6: Testing & Validation (Week 6)

### 6.1 Create Testing Utilities

#### `lib/jsonld/testing/schema-validator.ts`

```typescript
export class SchemaValidator {
  static async validateWithGoogle(url: string): Promise<any> {
    // Integration with Google's Rich Results Test API
    console.log(`Validate ${url} with Google Rich Results Test`);
    // Implementation would call Google's API
  }

  static validateLocalSchema(schema: Record<string, any>): {
    valid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    if (!schema['@context']) {
      errors.push('Missing @context');
    }

    if (!schema['@type']) {
      errors.push('Missing @type');
    }

    // Add more validation rules

    return { valid: errors.length === 0, errors };
  }
}
```

### 6.2 Validation Checklist

1. **Manual Testing:**
   - Use Google's Rich Results Test: https://search.google.com/test/rich-results
   - Use Schema.org validator: https://validator.schema.org/
   - Test each page type individually

2. **Automated Testing:**
   - Add schema validation to your CI/CD pipeline
   - Create unit tests for schema generation functions
   - Test with different data inputs

3. **Monitoring:**
   - Set up Google Search Console monitoring
   - Track structured data errors
   - Monitor rich results appearance

## Phase 7: Documentation & Maintenance (Week 7)

### 7.1 Create Documentation

#### `docs/json-ld-guide.md`

```markdown
# JSON-LD Implementation Guide

## Adding New Schema Types

1. Create schema file in `lib/jsonld/schemas/`
2. Export generation function
3. Add type definitions
4. Update main index.ts exports
5. Add tests

## Page Integration

1. Import required schema generators
2. Generate schema with page-specific data
3. Add JsonLdScript component
4. Test with validation tools

## Best Practices

- Keep schemas relevant to page content
- Use specific schema types when available
- Validate regularly
- Monitor Search Console for errors
```

### 7.2 Maintenance Schedule

1. **Weekly:** Check Google Search Console for structured data errors
2. **Monthly:** Validate schemas with Google's tools
3. **Quarterly:** Review and update organization data
4. **Annually:** Review schema types for new opportunities

## Expected Outcomes

### SEO Benefits

- Enhanced search result appearance with rich snippets
- Better understanding of content by search engines
- Improved click-through rates from search results
- Potential for featured snippets and knowledge panels

### Technical Benefits

- Centralized, maintainable schema management
- Type-safe schema generation
- Reusable components across pages
- Easy testing and validation

### Performance Considerations

- Minimal performance impact (schemas are small)
- Server-side rendering compatible
- No runtime JavaScript required for schemas
- Efficient caching of static schema data

## Security Notes

- All JSON-LD output is sanitized to prevent XSS
- No sensitive data should be included in schemas
- Validate all dynamic content before schema generation

## Success Metrics

- Google Search Console structured data reports
- Rich results appearance in search
- Click-through rate improvements
- Search ranking improvements for target keywords

This implementation plan provides a robust foundation for JSON-LD structured data that will enhance your website's SEO while maintaining clean, maintainable code architecture.
