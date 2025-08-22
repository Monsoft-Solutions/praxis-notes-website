# Metadata & JSON-LD Implementation Guide

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Layout Metadata System](#layout-metadata-system)
4. [Page Metadata Patterns](#page-metadata-patterns)
5. [JSON-LD Implementation](#json-ld-implementation)
6. [Creating New Pages](#creating-new-pages)
7. [SEO Best Practices](#seo-best-practices)
8. [Testing & Validation](#testing--validation)

---

## Overview

Our website implements a comprehensive SEO strategy using **both** standard HTML metadata and JSON-LD structured data, following Next.js 15 best practices.

### Dual Approach Benefits:

- **HTML Metadata**: Standard search engine optimization, social media sharing
- **JSON-LD**: Rich structured data for enhanced search results and AI understanding

### Current Implementation Status:

✅ **16 pages** with comprehensive metadata  
✅ **Layout title template system** implemented  
✅ **JSON-LD structured data** for key pages  
✅ **Social media optimization** (Open Graph + Twitter)  
✅ **Next.js 15 compliance** with `generateMetadata`

---

## Architecture

```
Layout (app/layout.tsx)
├── Base metadata (title template, defaults)
├── Global settings (verification, robots)
└── Page-specific overrides
    ├── Title (inherits template)
    ├── Description
    ├── Keywords
    ├── Social media tags
    └── SEO directives
```

### Key Files:

```
app/layout.tsx              # Base metadata & title templates
lib/jsonld/                 # JSON-LD implementation
├── components/
│   ├── json-ld-provider.tsx
│   └── json-ld-script.tsx
├── schemas/                # Structured data schemas
├── shared/                 # Common data & utilities
└── utils.ts               # Helper functions
public/manifest.json        # PWA manifest
```

---

## Layout Metadata System

### Title Template System

**Location**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: {
    template: '%s | Praxis Notes',
    default: 'Praxis Notes - AI-Powered ABA Session Notes for RBTs & BCBAs',
  },
  // ... other base metadata
};
```

**How it works:**

- Pages provide title part: `"Contact Us - Get Support"`
- Result: `"Contact Us - Get Support | Praxis Notes"`
- Home page uses default title

### Base Global Metadata

```typescript
// Global settings that apply to all pages
{
  metadataBase: new URL('https://praxisnotes.com'),

  // Default description (pages can override)
  description: 'Transform your ABA documentation...',

  // Base keywords (pages extend)
  keywords: ['ABA session notes', 'applied behavior analysis', ...],

  // Global verification
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },

  // PWA manifest
  manifest: '/manifest.json',

  // Global robots
  robots: {
    index: true,
    follow: true,
    googleBot: { /* enhanced settings */ },
  },
}
```

---

## Page Metadata Patterns

### Standard Page Metadata Template

```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  // Title (without suffix - template adds "| Praxis Notes")
  title: 'Page Title - Descriptive Subtitle',

  // SEO-optimized description (150-160 chars)
  description:
    'Detailed description that includes primary keywords and value proposition.',

  // Targeted keywords for this page
  keywords: [
    'primary keyword',
    'secondary keyword',
    'long-tail keyword',
    'ABA-specific terms',
  ].join(', '),

  // Canonical URL
  alternates: {
    canonical: 'https://praxisnotes.com/page-path',
  },

  // Open Graph for social sharing
  openGraph: {
    title: 'Page Title - Descriptive Subtitle',
    description:
      'Social media optimized description (can be different from meta description).',
    url: 'https://praxisnotes.com/page-path',
    siteName: 'Praxis Notes',
    type: 'website',
    images: [
      {
        url: 'https://praxisnotes.com/images/page-hero.jpg',
        alt: 'Descriptive alt text for social image',
        width: 1200,
        height: 630,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image', // or 'summary'
    title: 'Twitter-optimized title',
    description: 'Twitter-optimized description.',
    images: ['https://praxisnotes.com/images/page-hero.jpg'],
  },

  // Content categorization
  category: 'Product Features', // or 'Legal', 'Education & Resources', etc.

  // Page-specific robots (if different from global)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### Page Categories Used

- **Product Features**: Features, feature subpages
- **Education & Resources**: Resources, educational content
- **Legal**: Terms, privacy, cookies
- **Design & Development**: Design system, examples
- **Examples & Demos**: Demo pages (often `index: false`)

---

## JSON-LD Implementation

### Available Schemas

| Schema         | Usage               | Location            |
| -------------- | ------------------- | ------------------- |
| `organization` | Global company data | All pages           |
| `website`      | Site navigation     | All pages           |
| `blog-posting` | Resource articles   | `/resources/[slug]` |
| `article`      | General articles    | Content pages       |
| `breadcrumb`   | Navigation paths    | Dynamic pages       |
| `contact-page` | Contact info        | `/contact`          |
| `faq-page`     | FAQ sections        | Pages with FAQs     |
| `pricing-page` | Pricing info        | `/pricing`          |
| `saas-product` | Product details     | Product pages       |
| `about-page`   | Company info        | `/about`            |

### Implementation Pattern

```typescript
// In page component
import { generateBlogPostingSchema, JsonLdScript } from 'website/lib/jsonld';

export default function ResourcePage({ resource }) {
  const jsonLd = generateBlogPostingSchema({
    title: resource.title,
    description: resource.description,
    datePublished: resource.date,
    dateModified: resource.updatedAt,
    author: resource.author,
    url: `https://praxisnotes.com/resources/${resource.slug}`,
    image: resource.featuredImage?.url,
  });

  return (
    <>
      <JsonLdScript data={jsonLd} />
      {/* Page content */}
    </>
  );
}
```

### Adding New JSON-LD Schemas

1. **Create schema file**: `lib/jsonld/schemas/new-schema.json-ld.ts`
2. **Export from index**: Add to `lib/jsonld/index.ts`
3. **Use in component**: Import and render with `JsonLdScript`

Example schema structure:

```typescript
export interface NewSchemaProps {
  title: string;
  description: string;
  // ... other props
}

export function generateNewSchema(props: NewSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SchemaType',
    name: props.title,
    description: props.description,
    // ... other properties
  };
}
```

---

## Creating New Pages

### Step-by-Step Checklist

#### 1. Set Up Basic Page Structure

```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  // Use template pattern
};

export default function NewPage() {
  return (
    <div>
      {/* JSON-LD if needed */}
      {/* Page content */}
    </div>
  );
}
```

#### 2. Configure Metadata

**Required Fields:**

- [ ] `title` (without "| Praxis Notes" suffix)
- [ ] `description` (SEO optimized, 150-160 chars)
- [ ] `keywords` (array format with `.join(', ')`)
- [ ] `alternates.canonical` (full URL)

**Recommended Fields:**

- [ ] `openGraph` (title, description, url, images)
- [ ] `twitter` (card type, title, description, images)
- [ ] `category` (appropriate category)

**Optional Fields:**

- [ ] `robots` (if different from global)
- [ ] Custom social images
- [ ] Page-specific verification

#### 3. Choose Keywords Strategy

**Primary Keywords** (2-3):

- Main topic/feature
- ABA-specific terms
- Target audience terms

**Secondary Keywords** (4-6):

- Related features
- Technical terms
- Use case keywords

**Long-tail Keywords** (4-6):

- Specific phrases
- Question-based terms
- Comparison terms

#### 4. Add JSON-LD (if applicable)

**When to add JSON-LD:**

- Content pages (articles, resources)
- Product/feature pages
- Contact/about pages
- Landing pages

**When to skip:**

- Simple legal pages
- Example/demo pages
- Internal tools

#### 5. Test Implementation

- [ ] Build passes (`pnpm run build`)
- [ ] Metadata appears correctly
- [ ] Social sharing works
- [ ] JSON-LD validates (if used)

---

## SEO Best Practices

### Title Optimization

```typescript
// ✅ Good
title: 'Create ABA Notes - AI-Powered Session Documentation';

// ❌ Bad
title: 'Create ABA Notes | Praxis Notes'; // template adds suffix
```

### Description Guidelines

- **Length**: 150-160 characters
- **Include**: Primary keyword, value proposition, target audience
- **Action**: Use active voice and compelling language

```typescript
// ✅ Good (156 chars)
description: 'Generate detailed ABA session notes in seconds with AI-powered tools. Save 75% of documentation time while maintaining clinical quality.';

// ❌ Bad (too short, not compelling)
description: 'Create ABA notes with AI.';
```

### Keyword Strategy

```typescript
keywords: [
  // Primary (most important)
  'create ABA notes',
  'AI session notes',

  // Secondary (supporting)
  'ABA note generation',
  'automated documentation',
  'session note creator',

  // Long-tail (specific)
  'behavioral analysis notes',
  'clinical documentation AI',
  'therapy note generator',
].join(', ');
```

### Social Media Optimization

**Image Requirements:**

- **Size**: 1200x630px (Open Graph), 1200x675px (Twitter)
- **Format**: JPG or PNG
- **Content**: Branded, descriptive, readable text

**Description Strategy:**

- Can be different from meta description
- More conversational tone
- Include call-to-action

---

## Testing & Validation

### Build Testing

```bash
# Always test build after metadata changes
pnpm run build
```

### Validation Tools

**HTML Metadata:**

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

**JSON-LD:**

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [JSON-LD Playground](https://json-ld.org/playground/)

**SEO Analysis:**

- Google Search Console
- [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/)
- [Lighthouse SEO Audit](https://developers.google.com/web/tools/lighthouse)

### Common Issues & Solutions

**Build Errors:**

```typescript
// ❌ Missing comma in keywords array
keywords: [
  'keyword1'
  'keyword2'  // Missing comma
].join(', ')

// ✅ Fixed
keywords: [
  'keyword1',
  'keyword2',
].join(', ')
```

**TypeScript Errors:**

```typescript
// ❌ Incorrect property type
openGraph: {
  images: 'https://example.com/image.jpg'; // Should be array
}

// ✅ Fixed
openGraph: {
  images: [
    {
      url: 'https://example.com/image.jpg',
      alt: 'Description',
      width: 1200,
      height: 630,
    },
  ];
}
```

---

## Quick Reference Templates

### Feature Page Template

```typescript
export const metadata: Metadata = {
  title: 'Feature Name - Benefit Description',
  description:
    'Action-oriented description with primary keyword and value proposition for target audience.',
  keywords: [
    'feature primary keyword',
    'ABA specific term',
    'target audience keyword',
    'benefit keyword',
    'use case keyword',
  ].join(', '),
  alternates: {
    canonical: 'https://praxisnotes.com/features/feature-name',
  },
  openGraph: {
    title: 'Feature Name - Benefit Description',
    description: 'Social media optimized description.',
    url: 'https://praxisnotes.com/features/feature-name',
    siteName: 'Praxis Notes',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Feature Name with Benefit',
    description: 'Twitter optimized description.',
  },
  category: 'Product Features',
};
```

### Content Page Template

```typescript
export const metadata: Metadata = {
  title: 'Content Topic - Educational Value',
  description:
    'Learn about [topic] with expert guidance. Discover [benefits] for [audience].',
  keywords: [
    'educational keyword',
    'topic keyword',
    'audience keyword',
    'benefit keyword',
  ].join(', '),
  alternates: {
    canonical: 'https://praxisnotes.com/content/topic',
  },
  openGraph: {
    title: 'Content Topic - Educational Value',
    description: 'Social description focusing on educational value.',
    url: 'https://praxisnotes.com/content/topic',
    siteName: 'Praxis Notes',
    type: 'article',
    images: [
      {
        url: 'https://praxisnotes.com/images/content-hero.jpg',
        alt: 'Descriptive alt text',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Topic Guide',
    description: 'Educational content for ABA professionals.',
    images: ['https://praxisnotes.com/images/content-hero.jpg'],
  },
  category: 'Education & Resources',
};
```

---

## Maintenance Guidelines

### Regular Reviews

- **Monthly**: Check for new keyword opportunities
- **Quarterly**: Review social media performance
- **Bi-annually**: Update JSON-LD schemas
- **Annually**: Comprehensive SEO audit

### Performance Monitoring

- Google Search Console performance
- Social media sharing analytics
- Core Web Vitals impact
- Rich results appearance

### Updates & Changes

1. **Always test builds** after metadata changes
2. **Validate JSON-LD** when adding new schemas
3. **Check social previews** before deploying
4. **Monitor rankings** after significant changes

---

_Last Updated: January 2025_  
_Next Review: April 2025_
