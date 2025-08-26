import { db } from './config';
import { tags } from './schema';
import { eq } from 'drizzle-orm';

export default async function seedTags() {
  console.log('Starting tags seeding...');

  // Define tags based on Praxis Notes SEO targets and content strategy
  const tagData = [
    // Generator & Notes cluster
    {
      name: 'ABA Session Notes Generator',
      slug: 'aba-session-notes-generator',
    },
    { name: 'ABA Session Notes', slug: 'aba-session-notes' },
    {
      name: 'Applied Behavior Analysis Session Notes',
      slug: 'applied-behavior-analysis-session-notes',
    },
    { name: 'RBT Session Note Examples', slug: 'rbt-session-note-examples' },
    { name: 'Session Documentation', slug: 'session-documentation' },

    // CPT Codes cluster
    { name: 'CPT Code 97151', slug: 'cpt-code-97151' },
    { name: 'CPT Code 97153', slug: 'cpt-code-97153' },
    { name: 'CPT Code 97154', slug: 'cpt-code-97154' },
    { name: 'CPT Code 97156', slug: 'cpt-code-97156' },
    { name: 'CPT Code 97158', slug: 'cpt-code-97158' },
    { name: 'ABA CPT Codes', slug: 'aba-cpt-codes' },
    { name: 'ABA Billing', slug: 'aba-billing' },
    { name: 'ABA Insurance', slug: 'aba-insurance' },

    // Behavior Concepts cluster
    { name: 'Maladaptive Behaviors', slug: 'maladaptive-behaviors' },
    { name: 'Behavior Analysis', slug: 'behavior-analysis' },
    { name: 'Applied Behavior Analysis', slug: 'applied-behavior-analysis' },
    { name: 'Behavioral Interventions', slug: 'behavioral-interventions' },
    { name: 'Reinforcement', slug: 'reinforcement' },
    { name: 'Replacement Behaviors', slug: 'replacement-behaviors' },
    { name: 'ABC Data', slug: 'abc-data' },
    {
      name: 'Functional Behavior Assessment',
      slug: 'functional-behavior-assessment',
    },

    // Compliance & HIPAA cluster
    { name: 'HIPAA ABA', slug: 'hipaa-aba' },
    { name: 'ABA Compliance', slug: 'aba-compliance' },
    { name: 'AI Session Note Auditing', slug: 'ai-session-note-auditing' },
    { name: 'HIPAA Compliance', slug: 'hipaa-compliance' },
    { name: 'Documentation Standards', slug: 'documentation-standards' },
    { name: 'Privacy Protection', slug: 'privacy-protection' },

    // Professional roles and development
    { name: 'RBT', slug: 'rbt' },
    { name: 'BCBA', slug: 'bcba' },
    { name: 'RBT Training', slug: 'rbt-training' },
    { name: 'BCBA Exam', slug: 'bcba-exam' },
    { name: 'RBT Certification', slug: 'rbt-certification' },
    { name: 'BCBA Certification', slug: 'bcba-certification' },
    {
      name: 'ABA Professional Development',
      slug: 'aba-professional-development',
    },
    { name: 'Continuing Education', slug: 'continuing-education' },

    // Study materials and training
    { name: 'ABA Study Guides', slug: 'aba-study-guides' },
    { name: 'Study Materials', slug: 'study-materials' },
    { name: 'Practice Exercises', slug: 'practice-exercises' },
    { name: 'Training Resources', slug: 'training-resources' },
    { name: 'RBT Study Guide', slug: 'rbt-study-guide' },
    { name: 'BCBA Study Guide', slug: 'bcba-study-guide' },

    // Family and autism-related
    { name: 'Family Resources', slug: 'family-resources' },
    { name: 'Parent Guide', slug: 'parent-guide' },
    { name: 'Autism', slug: 'autism' },
    { name: 'Autism Spectrum Disorder', slug: 'autism-spectrum-disorder' },
    { name: 'Family Support', slug: 'family-support' },
    { name: 'Home Strategies', slug: 'home-strategies' },
    { name: 'Progress Tracking', slug: 'progress-tracking' },

    // Research and evidence
    { name: 'ABA Research', slug: 'aba-research' },
    { name: 'Evidence-Based Practice', slug: 'evidence-based-practice' },
    { name: 'ABA Case Studies', slug: 'aba-case-studies' },
    { name: 'ABA Best Practices', slug: 'aba-best-practices' },
    { name: 'Scientific Research', slug: 'scientific-research' },

    // General content types
    { name: 'Templates', slug: 'templates' },
    { name: 'Checklists', slug: 'checklists' },
    { name: 'Glossary', slug: 'glossary' },
    { name: 'Definitions', slug: 'definitions' },
    { name: 'How-to Guide', slug: 'how-to-guide' },
    { name: 'Tutorials', slug: 'tutorials' },
  ];

  try {
    // Check existing tags to avoid duplicates
    for (const tag of tagData) {
      const existingTag = await db.query.tags.findFirst({
        where: table => eq(table.name, tag.name),
      });

      if (existingTag) {
        console.log(`Tag "${tag.name}" already exists, skipping`);
        continue;
      }

      // Insert new tag
      await db.insert(tags).values({
        name: tag.name,
        slug: tag.slug,
      });

      console.log(`Inserted tag: ${tag.name}`);
    }

    console.log('Tags seeding completed successfully');
  } catch (error) {
    console.error('Error seeding tags:', error);
  }
}
