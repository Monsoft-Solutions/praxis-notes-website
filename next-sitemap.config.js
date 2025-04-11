/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://www.praxisnote.com", // Replace with your actual domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: "public",
  generateIndexSitemap: false, // Set to true if you expect more than 5000 URLs
};

export default config;
