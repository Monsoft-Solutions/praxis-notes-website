#!/usr/bin/env node

/**
 * This script manually updates Google's index with URLs from the sitemap.
 * It's useful for forcing Google to re-index the site after major content updates.
 *
 * Usage:
 *   node scripts/update-google-index.js
 *
 * Requirements:
 *   - GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY environment variables containing the service account credentials
 *   - Installed @monsoft/google-indexing package
 */

import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import {
  GoogleIndexingClient,
  extractUrlsFromSitemap,
} from "@monsoft/google-indexing";

// Convert __dirname in ESM
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuration
const BASE_URL = process.env.SITE_URL || "https://www.praxisnotes.com";
const SITEMAP_PATH = join(__dirname, "../public/sitemap_static.xml");

// Helper functions for credentials
function getClientEmail() {
  if (!process.env.GOOGLE_CLIENT_EMAIL) {
    throw new Error("GOOGLE_CLIENT_EMAIL environment variable is not set");
  }
  return process.env.GOOGLE_CLIENT_EMAIL;
}

function getPrivateKey() {
  if (!process.env.GOOGLE_PRIVATE_KEY) {
    throw new Error("GOOGLE_PRIVATE_KEY environment variable is not set");
  }
  // Handle newlines in the private key (environment variables can strip newlines)
  return process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
}

/**
 * Main execution function
 */
async function main() {
  try {
    console.warn("Starting Google indexing update...");

    // Initialize Google Indexing client
    const client = new GoogleIndexingClient({
      clientEmail: getClientEmail(),
      privateKey: getPrivateKey(),
      baseUrl: BASE_URL,
      sitemapPath: SITEMAP_PATH,
    });

    await client.initialize();

    // Extract URLs from sitemap
    console.warn(`Loading URLs from sitemap: ${SITEMAP_PATH}...`);
    const urls = extractUrlsFromSitemap(SITEMAP_PATH);

    if (urls.length === 0) {
      console.error("No URLs found in sitemap!");
      process.exit(1);
    }

    console.warn(`Found ${urls.length} URLs in sitemap.`);

    // Create indexable URLs
    const indexableUrls = urls.map((url) => ({
      url,
      type: "URL_UPDATED",
    }));

    // Submit to Google for indexing
    console.warn(
      `Submitting ${indexableUrls.length} URLs to Google Indexing API...`
    );
    const results = await client.notifyUrlUpdates(indexableUrls);

    // Report results
    const successCount = results.filter((r) => r.success).length;
    const failedCount = results.length - successCount;

    console.warn("Google Indexing Results:");
    console.warn(`- Total URLs: ${results.length}`);
    console.warn(`- Successfully indexed: ${successCount}`);
    console.warn(`- Failed: ${failedCount}`);

    if (failedCount > 0) {
      console.warn("\nFailed URLs:");
      results
        .filter((r) => !r.success)
        .forEach((r) => {
          console.warn(`- ${r.url}: ${r.error}`);
        });
    }

    console.warn("\nGoogle indexing update completed.");
  } catch (error) {
    console.error("Error updating Google index:", error);
    process.exit(1);
  }
}

// Run the script
main();
