# ISR and Caching Implementation Guide

This document explains how Incremental Static Regeneration (ISR) and caching work in the PraxisNotes application to handle dynamic content inserted via API.

## Problem Solved

Previously, the application used static generation (`generateStaticParams`) but content was inserted dynamically via API. This created a mismatch where:

- New resources wouldn't appear until the next build
- New categories wouldn't have pages generated
- Content updates required manual rebuilds

## Solution Implementation

### 1. Incremental Static Regeneration (ISR)

All resource-related pages now use ISR with automatic revalidation:

```typescript
// Enable ISR with 12 hour revalidation (43200 seconds)
// On-demand revalidation via API ensures immediate updates when content is added
export const revalidate = 43200;
```

**Pages with ISR:**

- `/resources` - Main resources listing (12h revalidation)
- `/resources/categories` - Categories listing (12h revalidation)
- `/resources/categories/[slug]` - Individual category pages (12h revalidation)

### 2. Cache Tags and Data Fetching

Data fetching functions use Next.js `unstable_cache` with tags:

```typescript
export const getPaginatedResources = unstable_cache(
  _getPaginatedResources,
  ['paginated-resources'],
  {
    tags: ['resources'],
    revalidate: 43200, // 12 hours
  }
);

export const getAllCategoriesWithCounts = unstable_cache(
  _getAllCategoriesWithCounts,
  ['categories-with-counts'],
  {
    tags: ['categories', 'resources'],
    revalidate: 43200, // 12 hours
  }
);
```

**Cache Tags Used:**

- `resources` - For all resource-related data
- `categories` - For all category-related data

### 3. On-Demand Revalidation

When new content is created via API, the system automatically revalidates affected pages:

```typescript
// In /api/resources POST handler
import { revalidatePath, revalidateTag } from 'next/cache';

// After successful resource creation:
try {
  // Revalidate main resources page
  revalidatePath('/resources');

  // Revalidate categories listing page
  revalidatePath('/resources/categories');

  // Revalidate specific category pages
  for (const category of categorySlugResults) {
    revalidatePath(`/resources/categories/${category.slug}`);
  }

  // Revalidate cache tags
  revalidateTag('resources');
  revalidateTag('categories');
} catch (revalidationError) {
  console.warn('Revalidation failed:', revalidationError);
  // Don't fail the request if revalidation fails
}
```

## How It Works

### Normal Operation

1. **First Request**: Page is statically generated and cached
2. **Subsequent Requests**: Served from cache (fast response)
3. **After 12 hours**: Next request triggers regeneration in background
4. **Background Regeneration**: Fresh data fetched, page rebuilt
5. **Cache Updated**: New version served to future requests

### API-Triggered Updates

1. **New Resource Created**: API POST to `/api/resources`
2. **Resource Saved**: Database transaction completes
3. **Revalidation Triggered**: Affected pages marked for regeneration
4. **Immediate Update**: Pages regenerate on next request
5. **Cache Invalidated**: Old cached data is cleared

## Benefits

### Performance

- ✅ **Fast Initial Load**: Pages served from cache
- ✅ **Background Updates**: Regeneration doesn't block requests
- ✅ **Smart Caching**: Only affected pages are invalidated

### User Experience

- ✅ **Fresh Content**: New resources appear immediately (via on-demand revalidation)
- ✅ **No Manual Builds**: Content updates automatically
- ✅ **Graceful Fallback**: If revalidation fails, old content still works

### SEO & Scalability

- ✅ **Static Benefits**: Search engines see static HTML
- ✅ **Dynamic Content**: Always up-to-date information
- ✅ **Efficient**: Only regenerates when needed

## Configuration

### Revalidation Intervals

**Standard Intervals (43200 seconds/12 hours):**

- All resource-related pages (excellent caching performance)
- Category listings and definitions
- Navigation data

**Note:** All content updates happen immediately via on-demand revalidation when resources are added through the API. The 12-hour interval serves as a fallback safety net.

### Cache Keys

Cache keys are designed to be specific and avoid collisions:

```typescript
// Specific to function and parameters
['paginated-resources']['categories-with-counts']['resources-by-category'][ // For paginated resources // For categories with counts // For category-specific resources
  'all-categories'
]; // For basic category list
```

## Monitoring and Debugging

### Build Output

The build shows revalidation settings:

```
├ ○ /resources/categories    3.31 kB  124 kB  1m  1y
```

- `1m` = Revalidation interval (1 minute)
- `1y` = Cache expiration (1 year)

### Logs

Revalidation attempts are logged:

```typescript
console.warn('Revalidation failed:', revalidationError);
```

### Cache Headers

Next.js adds appropriate cache headers:

- `Cache-Control: s-maxage=43200, stale-while-revalidate`
- Allows CDNs and browsers to cache appropriately

## Best Practices

### When Adding New API Endpoints

1. **Identify Affected Pages**: Which pages display the data being modified?
2. **Add Revalidation**: Include `revalidatePath()` calls for affected routes
3. **Use Cache Tags**: Tag related data with `revalidateTag()`
4. **Handle Errors**: Don't let revalidation failures break the API

### When Adding New Pages

1. **Add ISR**: Include `export const revalidate = 43200;` (12 hours)
2. **Use Cache Tags**: Tag data fetching functions appropriately
3. **Consider Dependencies**: What other pages might be affected?

### Performance Optimization

1. **Group Related Updates**: Batch revalidation calls
2. **Specific Paths**: Revalidate specific pages, not broad patterns
3. **Appropriate Intervals**: Balance freshness vs. performance
4. **Monitor Usage**: Watch for excessive regeneration

## Migration from Static Generation

The transition from pure static generation to ISR maintains:

- ✅ **SEO Benefits**: Pages still generate static HTML
- ✅ **Performance**: Fast loading with caching
- ✅ **Scalability**: Can handle traffic spikes
- ✅ **Reliability**: Fallback to cached content if regeneration fails

But adds:

- ✅ **Dynamic Updates**: Content updates without rebuilds
- ✅ **API-Driven**: Content management via API
- ✅ **Real-Time**: Changes appear immediately via on-demand revalidation
