import { db } from './config';
import { categories } from './schema';
import { eq } from 'drizzle-orm';

export default async function seedCategories() {
  console.log('Starting categories seeding...');

  // Define categories based on Praxis Notes business goals and content strategy
  const categoryData = [
    {
      name: 'ABA Session Notes & Tools',
      description:
        'Comprehensive resources on ABA session documentation, note-taking techniques, and free tools like our session notes generator. Perfect for RBTs and BCBAs looking to streamline their documentation process.',
    },
    {
      name: 'CPT Codes & Billing',
      description:
        'In-depth guides on CPT codes 97151-97158 for ABA services, billing requirements, insurance compliance, and revenue cycle management for ABA practices.',
    },
    {
      name: 'Behavior Analysis Concepts',
      description:
        'Educational content covering fundamental ABA concepts including maladaptive behaviors, reinforcement strategies, behavior modification techniques, and evidence-based interventions.',
    },
    {
      name: 'Compliance & HIPAA',
      description:
        'Essential resources on HIPAA compliance for ABA providers, documentation standards, privacy protection, and regulatory requirements for behavioral health services.',
    },
    {
      name: 'Study Guides & Training',
      description:
        'Study materials, practice exercises, and training resources for RBT certification, BCBA exam preparation, and continuing education in applied behavior analysis.',
    },
    {
      name: 'Family Resources',
      description:
        "Plain-language guides and resources for families of individuals receiving ABA services, including progress tracking, home strategies, and understanding your child's therapy.",
    },
    {
      name: 'Professional Development',
      description:
        'Career advancement resources for RBTs, BCBAs, and other ABA professionals including skills development, certification requirements, and industry best practices.',
    },
    {
      name: 'Research & Evidence',
      description:
        'Latest research findings, evidence-based practices, and scientific advancements in applied behavior analysis and autism intervention strategies.',
    },
  ];

  try {
    // Check existing categories to avoid duplicates
    for (const category of categoryData) {
      const existingCategory = await db.query.categories.findFirst({
        where: table => eq(table.name, category.name),
      });

      if (existingCategory) {
        console.log(`Category "${category.name}" already exists, skipping`);
        continue;
      }

      // Insert new category
      await db.insert(categories).values({
        name: category.name,
        description: category.description,
        slug: category.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-') // Replace any non-alphanumeric characters with hyphens
          .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
          .replace(/-{2,}/g, '-'), // Replace multiple consecutive hyphens with single hyphen
      });

      console.log(`Inserted category: ${category.name}`);
    }

    console.log('Categories seeding completed successfully');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
}
