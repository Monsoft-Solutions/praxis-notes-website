import { db } from "./config";
import { resourceCategories } from "./schema";
import { eq } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";

async function associateResourceCategories() {
  console.log("Starting resource-category association...");

  try {
    // Get all resources
    const allResources = await db.query.resources.findMany();
    console.log(`Found ${allResources.length} resources to process`);

    // Get all categories
    const allCategories = await db.query.categories.findMany();
    console.log(`Found ${allCategories.length} categories to use`);

    // Create category name to ID mapping for easier lookup
    const categoryMap = new Map(
      allCategories.map((category) => [category.name, category.id])
    );

    // Process each resource
    for (const resource of allResources) {
      console.log(`Processing resource: ${resource.title}`);

      // Extract tags from the resource
      const resourceTags = (resource.tags as string[]) || [];

      // Set to track categories we've already associated with this resource
      const associatedCategories = new Set<string>();

      // Map tags to relevant categories
      const categoryMappings: Record<string, string[]> = {
        "ABA Therapy": ["ABA Therapy", "ABA", "Applied Behavior Analysis"],
        "Clinical Documentation": [
          "Documentation",
          "Clinical Notes",
          "Session Notes",
        ],
        "Billing & Insurance": ["Billing", "Insurance", "CPT Codes", "CPT"],
        "Professional Development": ["Professional", "Career", "RBT", "BCBA"],
        "Mental Health": ["Mental Health", "Wellness", "Anxiety", "Depression"],
        "Autism Spectrum Disorder": ["Autism", "ASD", "Spectrum Disorder"],
        "Behavioral Interventions": [
          "Behavior",
          "Intervention",
          "BIP",
          "Functional",
        ],
        "Parent Resources": ["Parent", "Caregiver", "Family"],
        "Research & Studies": ["Research", "Study", "Analysis", "Data"],
        "Case Studies": ["Case Study", "Example", "Real-world"],
      };

      // Check the title and content for category matches
      for (const [categoryName, keywords] of Object.entries(categoryMappings)) {
        const categoryId = categoryMap.get(categoryName);
        if (!categoryId) continue;

        // Check if any keywords are in the title, description, or content
        const contentToCheck = [
          resource.title.toLowerCase(),
          resource.metaDescription.toLowerCase(),
          resource.content.toLowerCase(),
          ...resourceTags.map((tag) => tag.toLowerCase()),
        ].join(" ");

        const hasMatch = keywords.some((keyword) =>
          contentToCheck.includes(keyword.toLowerCase())
        );

        if (hasMatch && !associatedCategories.has(categoryId)) {
          // Check if association already exists
          const existingAssociation =
            await db.query.resourceCategories.findFirst({
              where: (table) =>
                eq(table.resourceId, resource.id) &&
                eq(table.categoryId, categoryId),
            });

          if (!existingAssociation) {
            // Create new association
            await db.insert(resourceCategories).values({
              id: createId(),
              resourceId: resource.id,
              categoryId: categoryId,
            });
            console.log(`  - Associated with category: ${categoryName}`);
            associatedCategories.add(categoryId);
          } else {
            console.log(
              `  - Already associated with category: ${categoryName}`
            );
          }
        }
      }

      // If no categories were associated, add a default category
      if (associatedCategories.size === 0) {
        const defaultCategoryId = categoryMap.get("ABA Therapy");
        if (defaultCategoryId) {
          await db.insert(resourceCategories).values({
            id: createId(),
            resourceId: resource.id,
            categoryId: defaultCategoryId,
          });
          console.log(`  - Associated with default category: ABA Therapy`);
        }
      }
    }

    console.log("Resource-category association completed successfully");
  } catch (error) {
    console.error("Error associating resources with categories:", error);
  }
}

// Run the association function
associateResourceCategories()
  .then(() => {
    console.log("✅ Resource-category association process finished");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Resource-category association failed:", error);
    process.exit(1);
  });
