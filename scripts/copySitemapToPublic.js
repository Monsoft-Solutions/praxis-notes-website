import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory using ESM compatible approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const SOURCE_PATHS = [
  path.join(__dirname, "../.next/server/app/sitemap.xml"),
  path.join(__dirname, "../.next/server/app/sitemap.xml.rsc"),
];
const TARGET_PATH = path.join(__dirname, "../public/sitemap_static.xml");

async function copySitemap() {
  console.log("🔄 Attempting to copy sitemap to public directory...");

  // Try each possible source path
  for (const sourcePath of SOURCE_PATHS) {
    try {
      if (fs.existsSync(sourcePath)) {
        console.log(`✅ Found sitemap at ${sourcePath}`);

        // For .rsc files, we need to extract the XML part
        let content = fs.readFileSync(sourcePath, "utf8");

        // If it's an RSC file, extract just the XML part
        if (sourcePath.endsWith(".rsc")) {
          const xmlStartMatch = content.match(/<\?xml/);
          if (xmlStartMatch) {
            content = content.substring(xmlStartMatch.index);
          } else {
            console.warn("⚠️ Could not find XML content in RSC file");
            continue;
          }
        }

        // Write to public directory
        fs.writeFileSync(TARGET_PATH, content);
        console.log(`✅ Successfully copied sitemap to ${TARGET_PATH}`);
        return;
      }
    } catch (error) {
      console.error(`❌ Error with ${sourcePath}:`, error.message);
    }
  }

  console.warn(
    "⚠️ Could not find a valid sitemap to copy. Falling back to static generation..."
  );

  // If we can't find a sitemap, we'll run the static generator
  try {
    // Just import and run the script, no need to capture the import
    await import("./generateStaticSitemap.js");
    console.log("✅ Generated static sitemap as fallback");
  } catch (error) {
    console.error("❌ Failed to generate static sitemap:", error.message);
  }
}

// Run the script
copySitemap();
