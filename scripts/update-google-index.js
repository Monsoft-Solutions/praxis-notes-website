#!/usr/bin/env node

/**
 * This script manually updates Google's index with URLs from the dynamic sitemap.
 * It's useful for forcing Google to re-index the site after major content updates.
 *
 * The script fetches the sitemap from the live URL (best for dynamic sitemaps)
 * and falls back to local files if the URL is not accessible.
 *
 * Usage:
 *   pnpm update-google-index
 *   # or directly: npx env-cmd node scripts/update-google-index.js
 *
 * Requirements:
 *   - GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY environment variables
 *   - SITE_URL environment variable (defaults to https://www.praxisnotes.com)
 *   - @monsoft/google-indexing package
 */

import { join } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import xml2js from 'xml2js';
import { GoogleIndexingClient } from '@monsoft/google-indexing';

// Convert __dirname in ESM
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuration
const BASE_URL = process.env.SITE_URL || 'https://www.praxisnotes.com';

// Possible static sitemap paths (fallback only)
const SITEMAP_PATHS = [join(__dirname, '../public/sitemap_static.xml')];

// Helper functions for credentials
function getClientEmail() {
  if (!process.env.GOOGLE_CLIENT_EMAIL) {
    throw new Error('GOOGLE_CLIENT_EMAIL environment variable is not set');
  }
  return process.env.GOOGLE_CLIENT_EMAIL;
}

function getPrivateKey() {
  if (!process.env.GOOGLE_PRIVATE_KEY) {
    throw new Error('GOOGLE_PRIVATE_KEY environment variable is not set');
  }
  // Handle newlines in the private key (environment variables can strip newlines)
  return process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
}

/**
 * Extract URLs from sitemap, trying multiple sources
 */
async function extractUrls() {
  // Try fetching from URL first (best for dynamic sitemaps)
  console.log(`🌐 Fetching sitemap from ${BASE_URL}/sitemap.xml...`);
  try {
    const response = await fetch(`${BASE_URL}/sitemap.xml`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const xml = await response.text();
    const result = await xml2js.parseStringPromise(xml);

    if (!result.urlset || !result.urlset.url) {
      throw new Error('Sitemap has unexpected format or no URLs');
    }

    console.log(`✅ Successfully fetched sitemap from URL`);
    return result.urlset.url.map(u => u.loc[0]);
  } catch (error) {
    console.error(`❌ Failed to fetch sitemap from URL:`, error.message);
    console.log('⚠️ Falling back to local file search...');
  }

  // Fallback: try file-based sitemaps
  for (const sitemapPath of SITEMAP_PATHS) {
    try {
      if (!fs.existsSync(sitemapPath)) {
        console.log(
          `⚠️ Sitemap not found at ${sitemapPath}, trying next location...`
        );
        continue;
      }

      console.log(`✅ Found sitemap at ${sitemapPath}`);
      const xml = fs.readFileSync(sitemapPath, 'utf8');
      const result = await xml2js.parseStringPromise(xml);

      if (!result.urlset || !result.urlset.url) {
        console.warn('⚠️ Sitemap has unexpected format or no URLs');
        continue;
      }

      return result.urlset.url.map(u => u.loc[0]);
    } catch (error) {
      console.error(`❌ Error with sitemap at ${sitemapPath}:`, error.message);
    }
  }

  console.error('❌ Could not load sitemap from any source');
  return [];
}

/**
 * Main execution function
 */
async function main() {
  try {
    console.warn('Starting Google indexing update...');

    // Initialize Google Indexing client
    const client = new GoogleIndexingClient({
      clientEmail: getClientEmail(),
      privateKey: getPrivateKey(),
      baseUrl: BASE_URL,
    });

    await client.initialize();

    // Extract URLs from sitemap
    console.warn('Loading URLs from sitemap...');
    const urls = await extractUrls();

    if (urls.length === 0) {
      console.error('No URLs found in sitemap!');
      process.exit(1);
    }

    console.warn(`Found ${urls.length} URLs in sitemap.`);

    // Create indexable URLs
    const indexableUrls = urls.map(url => ({
      url,
      type: 'URL_UPDATED',
    }));

    // Submit to Google for indexing
    console.warn(
      `Submitting ${indexableUrls.length} URLs to Google Indexing API...`
    );
    const results = await client.notifyUrlUpdates(indexableUrls);

    // Report results
    const successCount = results.filter(r => r.success).length;
    const failedCount = results.length - successCount;

    console.warn('Google Indexing Results:');
    console.warn(`- Total URLs: ${results.length}`);
    console.warn(`- Successfully indexed: ${successCount}`);
    console.warn(`- Failed: ${failedCount}`);

    if (failedCount > 0) {
      console.warn('\nFailed URLs:');
      results
        .filter(r => !r.success)
        .forEach(r => {
          console.warn(`- ${r.url}: ${r.error}`);
        });
    }

    console.warn('\nGoogle indexing update completed.');
  } catch (error) {
    console.error('Error updating Google index:', error);
    process.exit(1);
  }
}

// Run the script
main();
