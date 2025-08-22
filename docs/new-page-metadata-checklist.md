# New Page Metadata Checklist

Quick reference for implementing metadata when creating new pages.

## 📋 Implementation Checklist

### 1. Basic Setup

- [ ] Import `Metadata` from 'next'
- [ ] Add `export const metadata: Metadata = { ... }`
- [ ] Place metadata before component definition

### 2. Required Fields

- [ ] **Title**: Without "| Praxis Notes" suffix (template adds it)
- [ ] **Description**: 150-160 characters, SEO optimized
- [ ] **Keywords**: Array format with targeted terms
- [ ] **Canonical URL**: Full URL with https://praxisnotes.com

### 3. Recommended Fields

- [ ] **Open Graph**: title, description, url, siteName, type
- [ ] **Twitter Card**: card type, title, description
- [ ] **Category**: Appropriate page category

### 4. Optional Enhancements

- [ ] **Images**: Social media images (1200x630px)
- [ ] **Robots**: Custom directives if needed
- [ ] **JSON-LD**: Structured data for content pages

---

## 🎯 Quick Templates

### Feature Page

```typescript
export const metadata: Metadata = {
  title: 'Feature Name - Key Benefit',
  description:
    'Action-focused description with primary keyword and value proposition.',
  keywords: [
    'primary feature keyword',
    'ABA related term',
    'target user keyword',
    'benefit keyword',
  ].join(', '),
  alternates: { canonical: 'https://praxisnotes.com/features/feature-name' },
  openGraph: {
    title: 'Feature Name - Key Benefit',
    description: 'Social media optimized description.',
    url: 'https://praxisnotes.com/features/feature-name',
    siteName: 'Praxis Notes',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Feature Name',
    description: 'Brief benefit description.',
  },
  category: 'Product Features',
};
```

### Content/Resource Page

```typescript
export const metadata: Metadata = {
  title: 'Topic Guide - Educational Value',
  description:
    'Learn about [topic] with expert guidance for ABA professionals.',
  keywords: [
    'topic keyword',
    'educational term',
    'ABA keyword',
    'audience term',
  ].join(', '),
  alternates: { canonical: 'https://praxisnotes.com/path/page-name' },
  openGraph: {
    title: 'Topic Guide - Educational Value',
    description: 'Educational content description for social sharing.',
    url: 'https://praxisnotes.com/path/page-name',
    siteName: 'Praxis Notes',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Topic Guide',
    description: 'Educational content for ABA professionals.',
  },
  category: 'Education & Resources',
};
```

### Legal/Policy Page

```typescript
export const metadata: Metadata = {
  title: 'Policy Name - Legal Information',
  description:
    'Important legal information about [policy topic] for Praxis Notes users.',
  keywords: [
    'policy keyword',
    'legal term',
    'compliance keyword',
    'user rights',
  ].join(', '),
  alternates: { canonical: 'https://praxisnotes.com/policy-name' },
  openGraph: {
    title: 'Policy Name - Praxis Notes',
    description: 'Legal information and user rights for our platform.',
    url: 'https://praxisnotes.com/policy-name',
    siteName: 'Praxis Notes',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Praxis Notes Policy Name',
    description: 'Legal information for platform users.',
  },
  category: 'Legal',
};
```

---

## 🎨 Page Categories

Choose the appropriate category:

- **`Product Features`**: Main features, feature subpages
- **`Education & Resources`**: Resources, guides, educational content
- **`Legal`**: Terms, privacy, cookies, compliance
- **`Design & Development`**: Design system, component demos
- **`Examples & Demos`**: Demo pages, showcases (often with `index: false`)

---

## 🚀 Keyword Strategy

### Primary Keywords (2-3)

Focus on the main topic and ABA-specific terms:

- Main feature/topic name
- ABA industry term
- Target audience identifier

### Secondary Keywords (4-6)

Supporting terms and related concepts:

- Feature benefits
- Technical terms
- Use case descriptions
- Related ABA terminology

### Long-tail Keywords (4-6)

Specific phrases and questions:

- "How to [action]"
- "[Feature] for [audience]"
- Comparison terms
- Problem-solving phrases

**Example for "Create ABA Notes" page:**

```typescript
keywords: [
  // Primary
  'create ABA notes',
  'AI session notes',
  'ABA note generation',

  // Secondary
  'automated documentation',
  'session note creator',
  'behavioral analysis notes',

  // Long-tail
  'clinical documentation AI',
  'therapy note generator',
  'ABA session writing',
].join(', ');
```

---

## 🔍 SEO Guidelines

### Title Best Practices

- **Format**: `Primary Keyword - Benefit/Description`
- **Length**: 50-60 characters (excluding "| Praxis Notes")
- **Include**: Primary keyword and clear benefit
- **Avoid**: Keyword stuffing, generic terms

### Description Best Practices

- **Length**: 150-160 characters
- **Include**: Primary keyword, value proposition, target audience
- **Tone**: Action-oriented, compelling
- **End**: Consider call-to-action

### Social Media Optimization

- **Images**: 1200x630px, branded, readable text
- **Descriptions**: Can differ from meta description
- **Tone**: More conversational for social platforms

---

## 🛠️ Testing Steps

1. **Build Test**: `pnpm run build`
2. **Validate Syntax**: Check for TypeScript errors
3. **Preview**: Test social media sharing
4. **JSON-LD**: Validate structured data (if used)

### Common Issues

- Missing commas in keyword arrays
- Incorrect image format (should be array/object)
- Title too long with template suffix
- Description exceeding 160 characters

---

## 📚 JSON-LD Quick Add

For content pages, add structured data:

```typescript
import { generateBlogPostingSchema, JsonLdScript } from 'website/lib/jsonld';

export default function ContentPage() {
  const jsonLd = generateBlogPostingSchema({
    title: 'Page Title',
    description: 'Page description',
    url: 'https://praxisnotes.com/page-path',
    datePublished: '2025-01-01',
    author: { name: 'Author Name' },
  });

  return (
    <>
      <JsonLdScript data={jsonLd} />
      {/* Page content */}
    </>
  );
}
```

---

_Quick Reference - Keep this handy when creating new pages!_
