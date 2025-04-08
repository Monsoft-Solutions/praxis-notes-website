import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  content: string;
  cta?: {
    title: string;
    content: string;
    buttonText: string;
    buttonLink: string;
  };
  author?: {
    name: string;
    title?: string;
    image?: string;
  };
  tags?: string[];
  image?: string;
}

const resourcesDirectory = path.join(process.cwd(), "data/resources");

/**
 * Loads all resource markdown files from the resources directory
 */
export function getAllResources(): Resource[] {
  // Check if directory exists
  if (!fs.existsSync(resourcesDirectory)) {
    return [];
  }

  // Get all .md files from the resources directory
  const fileNames = fs
    .readdirSync(resourcesDirectory)
    .filter((fileName) => fileName.endsWith(".md"));

  const resources = fileNames.map((fileName) => {
    // Read file content
    const filePath = path.join(resourcesDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");

    // Parse frontmatter and content
    const { data, content } = matter(fileContent);

    // Convert to Resource type
    return {
      id: data.id || fileName.replace(/\.md$/, ""),
      slug: data.slug || fileName.replace(/\.md$/, ""),
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      readingTime: data.readingTime || "",
      content: content,
      cta: data.cta || undefined,
      author: data.author || undefined,
      tags: data.tags || undefined,
      image: data.image || undefined,
    } as Resource;
  });

  // Sort by date (newest first) if available
  return resources.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Gets a resource by its slug
 */
export function getResourceBySlug(slug: string): Resource | undefined {
  return getAllResources().find((resource) => resource.slug === slug);
}
