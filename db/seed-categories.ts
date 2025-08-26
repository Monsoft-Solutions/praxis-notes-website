import { db } from './config';
import { categories } from './schema';
import { eq, or } from 'drizzle-orm';

export default async function seedCategories() {
  console.log('Starting categories seeding...');

  // Define categories based on Praxis Notes business goals and content strategy
  const blogCategories = [
    {
      name: 'ABA Session Notes & Tools',
      slug: 'aba-session-notes-tools',
      description:
        'Comprehensive resources for ABA documentation: step-by-step note-writing, templates, examples, and free tools (e.g., session note generator). Built for RBTs and BCBAs to streamline workflows and produce insurance-ready notes.',
    },
    {
      name: 'CPT Codes & Billing',
      slug: 'aba-cpt-codes-billing',
      description:
        'Practical guides to ABA CPT codes 97151-97158, documentation requirements, coding scenarios, prior authorization basics, and billing best practices to support accurate reimbursement and cleaner revenue cycles.',
    },
    {
      name: 'Behavior Analysis Concepts',
      slug: 'aba-behavior-analysis-concepts',
      description:
        'Clear, applied explanations of ABA foundations: measurement (frequency, duration, latency, rate), reinforcement, skill acquisition, FBA/BIP basics, and evidence-based intervention strategies—with concrete examples.',
    },
    {
      name: 'Compliance & HIPAA',
      slug: 'aba-compliance-hipaa',
      description:
        'Essential guidance on HIPAA privacy/security, PHI handling, consent, audit readiness, telehealth considerations, and documentation standards tailored to ABA providers and clinics.',
    },
    {
      name: 'Study Guides & Exam Prep',
      slug: 'study-guides-exam-prep',
      description:
        'Unified prep hub for RBT and BCBA: task-list study guides, practice questions, mock exams, flashcards, ethics scenarios, and competency/exam readiness checklists.',
    },
    {
      name: 'Family Resources',
      slug: 'family-resources',
      description:
        'Plain-language guides for families: how ABA works, progress tracking, understanding data and session notes, home strategies, and collaborating effectively with your care team.',
    },
    {
      name: 'Professional Development & Research',
      slug: 'professional-development-research',
      description:
        'Career growth and evidence in one place: CEU topics, supervision/leadership tips, clinic operations, plus digestible summaries of new ABA research translated into everyday practice.',
    },
  ];

  try {
    // Check existing categories to avoid duplicates
    for (const category of blogCategories) {
      const existingCategory = await db.query.categories.findFirst({
        where: table =>
          or(eq(table.slug, category.slug), eq(table.name, category.name)),
      });

      if (existingCategory) {
        console.log(`Category "${category.name}" already exists, skipping`);
        continue;
      }

      // Insert new category
      await db.insert(categories).values({
        name: category.name,
        description: category.description,
        slug: category.slug,
      });

      console.log(`Inserted category: ${category.name}`);
    }

    console.log('Categories seeding completed successfully');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
}
