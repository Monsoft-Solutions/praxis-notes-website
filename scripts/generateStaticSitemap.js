import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory using ESM compatible approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Constants
const PUBLIC_DIR = path.join(__dirname, "../public");
const SITEMAP_PATH = path.join(PUBLIC_DIR, "sitemap_static.xml");

// Base URL from environment or default
const baseUrl = process.env.SITE_URL || "https://www.praxisnotes.com";

// Static routes to include in the sitemap
const staticRoutes = [
  { url: `${baseUrl}`, priority: 1.0, changeFreq: "daily" },
  { url: `${baseUrl}/about`, priority: 0.8, changeFreq: "weekly" },
  { url: `${baseUrl}/contact`, priority: 0.5, changeFreq: "monthly" },
  { url: `${baseUrl}/features`, priority: 0.9, changeFreq: "weekly" },
  {
    url: `${baseUrl}/features/create-aba-notes`,
    priority: 0.7,
    changeFreq: "monthly",
  },
  {
    url: `${baseUrl}/features/review-aba-notes`,
    priority: 0.7,
    changeFreq: "monthly",
  },
  {
    url: `${baseUrl}/features/track-aba-progress`,
    priority: 0.7,
    changeFreq: "monthly",
  },
  {
    url: `${baseUrl}/features/hipaa-compliant-aba`,
    priority: 0.7,
    changeFreq: "monthly",
  },
  { url: `${baseUrl}/pricing`, priority: 0.8, changeFreq: "weekly" },
  { url: `${baseUrl}/resources`, priority: 0.9, changeFreq: "daily" },
  { url: `${baseUrl}/waitlist`, priority: 0.6, changeFreq: "monthly" },
  { url: `${baseUrl}/design-system`, priority: 0.3, changeFreq: "monthly" },
  { url: `${baseUrl}/terms`, priority: 0.3, changeFreq: "yearly" },
  { url: `${baseUrl}/privacy`, priority: 0.3, changeFreq: "yearly" },
  { url: `${baseUrl}/cookies`, priority: 0.3, changeFreq: "yearly" },
];

// Generate sitemap XML content
function generateSitemapXml() {
  const today = new Date().toISOString();

  const urlElements = staticRoutes
    .map(
      (route) => `
    <url>
      <loc>${route.url}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${route.changeFreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>
  `
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${urlElements}
</urlset>`;
}

// Write sitemap to file
function writeSitemap() {
  const xmlContent = generateSitemapXml();

  try {
    fs.writeFileSync(SITEMAP_PATH, xmlContent);
    console.log(`✅ Static sitemap successfully written to ${SITEMAP_PATH}`);
  } catch (error) {
    console.error("❌ Error writing sitemap:", error);
  }
}

// Run the script
writeSitemap();
