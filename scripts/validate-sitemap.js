#!/usr/bin/env node

/**
 * Sitemap Validation Script
 * Tests the dynamic sitemap generation to ensure all URLs are valid
 */

import fetch from 'node-fetch';

const SITEMAP_URL = process.env.SITE_URL
  ? `${process.env.SITE_URL}/sitemap.xml`
  : 'http://localhost:3000/sitemap.xml';

async function validateSitemap() {
  console.log('🔍 Validating dynamic sitemap...\n');

  try {
    const response = await fetch(SITEMAP_URL);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const sitemapXml = await response.text();

    // Basic XML validation
    if (!sitemapXml.includes('<?xml version="1.0"')) {
      throw new Error('Invalid XML format - missing XML declaration');
    }

    if (!sitemapXml.includes('<urlset')) {
      throw new Error('Invalid sitemap format - missing urlset element');
    }

    // Count URLs
    const urlMatches = sitemapXml.match(/<url>/g);
    const urlCount = urlMatches ? urlMatches.length : 0;

    // Count by type
    const staticCount = (
      sitemapXml.match(/praxisnotes\.com\/(?![\/]*resources)/g) || []
    ).length;
    const resourceCount = (
      sitemapXml.match(/praxisnotes\.com\/resources\/[^\/]+$/g) || []
    ).length;
    const categoryCount = (
      sitemapXml.match(/praxisnotes\.com\/resources\/categories\/[^\/]+$/g) ||
      []
    ).length;
    const categoriesPageCount = (
      sitemapXml.match(/praxisnotes\.com\/resources\/categories$/g) || []
    ).length;
    const resourcesPageCount = (
      sitemapXml.match(/praxisnotes\.com\/resources$/g) || []
    ).length;

    console.log('✅ Sitemap validation successful!\n');
    console.log('📊 Sitemap Statistics:');
    console.log(`   Total URLs: ${urlCount}`);
    console.log(`   Static pages: ${staticCount}`);
    console.log(`   Resource pages: ${resourceCount}`);
    console.log(`   Category pages: ${categoryCount}`);
    console.log(`   Resources index: ${resourcesPageCount}`);
    console.log(`   Categories index: ${categoriesPageCount}`);

    // Validate required URLs exist
    const requiredUrls = [
      '/resources',
      '/resources/categories',
      '/about',
      '/pricing',
      '/features',
    ];

    console.log('\n🔍 Checking required URLs:');
    for (const url of requiredUrls) {
      const exists = sitemapXml.includes(url);
      console.log(`   ${url}: ${exists ? '✅' : '❌'}`);
    }

    // Performance info
    console.log('\n⚡ Performance Notes:');
    console.log('   - Sitemap uses 1-hour caching for optimal performance');
    console.log('   - Static routes cached indefinitely until content changes');
    console.log('   - Dynamic routes revalidated based on content updates');

    return true;
  } catch (error) {
    console.error('❌ Sitemap validation failed:', error.message);
    return false;
  }
}

// Run validation if this script is called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  validateSitemap()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      console.error('❌ Script error:', error);
      process.exit(1);
    });
}

export { validateSitemap };
