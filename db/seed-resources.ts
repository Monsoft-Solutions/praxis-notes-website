import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { db } from "./config";
import { resources } from "./schema";

async function seedResources() {
  console.log("Starting resources seeding...");

  const resourcesDirectory = path.join(process.cwd(), "data/resources");

  // Check if directory exists
  if (!fs.existsSync(resourcesDirectory)) {
    console.log("Resources directory not found");
    return;
  }

  // Get all .md files from the resources directory
  const fileNames = fs
    .readdirSync(resourcesDirectory)
    .filter((fileName) => fileName.endsWith(".md"));

  console.log(`Found ${fileNames.length} resource files`);

  try {
    for (const fileName of fileNames) {
      // Read file content
      const filePath = path.join(resourcesDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, "utf8");

      // Parse frontmatter and content
      const { data, content } = matter(fileContent);

      // Check if resource already exists
      const existingResource = await db.query.resources.findFirst({
        where: (resources, { eq }) =>
          eq(resources.slug, data.slug || fileName.replace(/\.md$/, "")),
      });

      if (existingResource) {
        console.log(
          `Resource ${data.slug || fileName} already exists, skipping`
        );
        continue;
      }

      // Insert resource into database
      await db.insert(resources).values({
        id: data.id || fileName.replace(/\.md$/, ""),
        slug: data.slug || fileName.replace(/\.md$/, ""),
        title: data.title || "",
        metaDescription: data.description || "",
        date: data.date || "",
        readingTime: data.readingTime || "",
        content: content,
        cta: data.cta || null,
        author: data.author || null,
        tags: data.tags || null,
        image: data.image || null,
      });

      console.log(`Inserted resource: ${data.title || fileName}`);
    }

    console.log("Resources seeding completed successfully");
  } catch (error) {
    console.error("Error seeding resources:", error);
  }
}

// Run the seed function
seedResources().catch(console.error);
