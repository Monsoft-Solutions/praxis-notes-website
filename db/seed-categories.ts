import { db } from './config';
import { categories } from './schema';
import { eq } from 'drizzle-orm';

export default async function seedCategories() {
  console.log('Starting categories seeding...');

  // Define categories related to ABA industry and mental health care
  const categoryData = [
    {
      name: 'ABA Therapy',
      description:
        'Articles about Applied Behavior Analysis therapy techniques, methodologies, and best practices.',
    },
    {
      name: 'Clinical Documentation',
      description:
        'Resources on proper documentation practices for ABA sessions, assessments, and treatment plans.',
    },
    {
      name: 'Billing & Insurance',
      description:
        'Information about CPT codes, insurance requirements, and billing practices for ABA services.',
    },
    {
      name: 'Professional Development',
      description:
        'Resources for RBTs, BCBAs, and other ABA professionals to develop their skills and advance their careers.',
    },
    {
      name: 'Mental Health',
      description:
        'Articles about mental health topics, including anxiety, depression, and general wellness.',
    },
    {
      name: 'Autism Spectrum Disorder',
      description:
        'Resources specific to autism spectrum disorder, including research, interventions, and support strategies.',
    },
    {
      name: 'Behavioral Interventions',
      description:
        'Information about various behavioral intervention techniques, strategies, and applications.',
    },
    {
      name: 'Parent Resources',
      description:
        'Guides and resources for parents and caregivers of individuals receiving ABA therapy or mental health services.',
    },
    {
      name: 'Research & Studies',
      description:
        'Latest research findings, studies, and scientific advancements in ABA and mental health fields.',
    },
    {
      name: 'Case Studies',
      description:
        'Real-world examples and case studies demonstrating effective application of ABA techniques.',
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
        slug: category.name.toLowerCase().replace(/ /g, '-'),
      });

      console.log(`Inserted category: ${category.name}`);
    }

    console.log('Categories seeding completed successfully');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
}
