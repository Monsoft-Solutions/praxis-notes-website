import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { google } from "googleapis";
import { JWT } from "google-auth-library";
import xml2js from "xml2js";

// Get current directory using ESM compatible approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Possible sitemap paths (in order of preference)
const SITEMAP_PATHS = [
  path.join(__dirname, "../.next/server/app/sitemap.xml.rsc"),
  path.join(__dirname, "../.next/server/app/sitemap.xml"),
  path.join(__dirname, "../public/sitemap_static.xml"),
];
const CACHE_PATH = path.join(__dirname, "./sitemap.cache.json");
const BATCH_SIZE = 10; // Process in smaller batches to avoid rate limits
const BATCH_DELAY_MS = 1000; // Delay between batches

// Check if required environment variables are set
if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
  console.error(
    "❌ Missing required environment variables: GOOGLE_CLIENT_EMAIL and/or GOOGLE_PRIVATE_KEY"
  );
  process.exit(1);
}

// Initialize Google Auth
const auth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/indexing"],
});

const indexing = google.indexing({ version: "v3", auth });

// Parse the sitemap XML file to extract URLs
async function getUrlsFromSitemap() {
  let lastError = null;

  // Try each possible sitemap path
  for (const sitemapPath of SITEMAP_PATHS) {
    try {
      if (!fs.existsSync(sitemapPath)) {
        console.log(
          `⚠️ Sitemap not found at ${sitemapPath}, trying next location...`
        );
        continue;
      }

      console.log(`✅ Found sitemap at ${sitemapPath}`);
      const xml = fs.readFileSync(sitemapPath, "utf8");
      const result = await xml2js.parseStringPromise(xml);

      if (!result.urlset || !result.urlset.url) {
        console.warn("⚠️ Sitemap has unexpected format or no URLs");
        continue;
      }

      return result.urlset.url.map((u) => u.loc[0]);
    } catch (error) {
      console.error(`❌ Error with sitemap at ${sitemapPath}:`, error.message);
      lastError = error;
    }
  }

  // If we get here, all attempts failed
  console.error("❌ Could not read sitemap from any location", lastError);
  return [];
}

// Load previously notified URLs from cache
function loadCache() {
  try {
    if (fs.existsSync(CACHE_PATH)) {
      return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
    }
  } catch (error) {
    console.warn("⚠️ Failed to load cache, starting fresh:", error.message);
  }
  return [];
}

// Save current URLs to cache
function saveCache(urls) {
  try {
    const dir = path.dirname(CACHE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(CACHE_PATH, JSON.stringify(urls, null, 2));
  } catch (error) {
    console.error("❌ Failed to save cache:", error.message);
  }
}

// Helper to wait between batches
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Notify Google in batches with retry logic
async function notifyGoogle(urls) {
  let successCount = 0;
  let failureCount = 0;

  // Process in batches to avoid rate limits
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);

    console.log(
      `🔄 Processing batch ${i / BATCH_SIZE + 1}/${Math.ceil(
        urls.length / BATCH_SIZE
      )}`
    );

    for (const url of batch) {
      try {
        await indexing.urlNotifications.publish({
          requestBody: {
            url,
            type: "URL_UPDATED",
          },
        });
        console.log(`✅ Notified Google: ${url}`);
        successCount++;
      } catch (err) {
        console.error(`❌ Failed to notify Google for ${url}`, err.message);
        failureCount++;

        // Log additional error details for debugging
        if (err.response && err.response.data) {
          console.error(
            "Error details:",
            JSON.stringify(err.response.data, null, 2)
          );
        }
      }
    }

    // Don't wait after the last batch
    if (i + BATCH_SIZE < urls.length) {
      console.log(`⏱️ Waiting ${BATCH_DELAY_MS}ms before next batch...`);
      await sleep(BATCH_DELAY_MS);
    }
  }

  return { successCount, failureCount };
}

// Main function
async function run() {
  console.log("🚀 Starting Google Search Console notification process");

  try {
    const currentUrls = await getUrlsFromSitemap();
    console.log(`📄 Found ${currentUrls.length} URLs in sitemap`);

    if (currentUrls.length === 0) {
      console.log("⚠️ No URLs found in sitemap, exiting.");
      return;
    }

    const previousUrls = loadCache();
    console.log(`📋 Found ${previousUrls.length} URLs in cache`);

    // Find new or updated URLs
    const newUrls = currentUrls.filter((url) => !previousUrls.includes(url));

    if (newUrls.length === 0) {
      console.log("ℹ️ No new or updated URLs to notify.");
      return;
    }

    console.log(`🔔 ${newUrls.length} new/updated URLs detected.`);

    const { successCount, failureCount } = await notifyGoogle(newUrls);

    // Only update cache if at least some notifications were successful
    if (successCount > 0) {
      saveCache(currentUrls);
      console.log(`💾 Updated cache with ${currentUrls.length} URLs`);
    }

    console.log(
      `📊 Summary: ${successCount} succeeded, ${failureCount} failed`
    );

    // Exit with error code if all notifications failed
    if (successCount === 0 && failureCount > 0) {
      console.error("❌ All notifications failed");
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ Unexpected error:", error);
    process.exit(1);
  }
}

// Run the script
run();
