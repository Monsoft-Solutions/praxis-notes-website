import { db } from './config';
import { tags } from './schema';
import { eq } from 'drizzle-orm';

export default async function seedTags() {
  console.log('Starting tags seeding...');

  // Define tags based on Praxis Notes SEO targets and content strategy
  const tagData = [
    // Generator & Notes cluster tags
    {
      name: 'ABA Session Notes Generator',
      slug: 'aba-session-notes-generator',
    },
    { name: 'ABA Notes', slug: 'aba-notes' },
    { name: 'ABA Note', slug: 'aba-note' },
    {
      name: 'Applied Behavior Analysis Session Notes',
      slug: 'applied-behavior-analysis-session-notes',
    },
    { name: 'ABA Smart Notes', slug: 'aba-smart-notes' },
    { name: 'Free ABA Note Template', slug: 'free-aba-note-template' },
    { name: 'RBT Session Note Examples', slug: 'rbt-session-note-examples' },
    { name: 'Session Documentation', slug: 'session-documentation' },
    { name: 'Free Tools', slug: 'free-tools' },

    // CPT Codes cluster tags
    { name: 'CPT Code 97153', slug: 'cpt-code-97153' },
    { name: 'CPT 97153', slug: 'cpt-97153' },
    { name: '97153 ABA Code', slug: '97153-aba-code' },
    { name: 'CPT 97151', slug: 'cpt-97151' },
    { name: 'CPT 97154', slug: 'cpt-97154' },
    { name: 'CPT 97156', slug: 'cpt-97156' },
    { name: 'CPT 97158', slug: 'cpt-97158' },
    { name: 'CPT Codes', slug: 'cpt-codes' },
    { name: 'Billing', slug: 'billing' },
    { name: 'Insurance', slug: 'insurance' },

    // Behavior Concepts cluster tags
    { name: 'Maladaptive Behaviors', slug: 'maladaptive-behaviors' },
    { name: 'Maladaptive Behavior', slug: 'maladaptive-behavior' },
    { name: 'Behavior Analysis', slug: 'behavior-analysis' },
    { name: 'Applied Behavior Analysis', slug: 'applied-behavior-analysis' },
    { name: 'ABA', slug: 'aba' },
    { name: 'Behavioral Interventions', slug: 'behavioral-interventions' },
    { name: 'Reinforcement', slug: 'reinforcement' },
    { name: 'Replacement Behavior', slug: 'replacement-behavior' },
    { name: 'ABC Data', slug: 'abc-data' },
    { name: 'Functional Assessment', slug: 'functional-assessment' },

    // Compliance & HIPAA cluster tags
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
    { name: 'Professional Development', slug: 'professional-development' },
    { name: 'Continuing Education', slug: 'continuing-education' },

    // Study materials and training
    { name: 'Study Guides', slug: 'study-guides' },
    { name: 'Study Materials', slug: 'study-materials' },
    { name: 'Practice Exercises', slug: 'practice-exercises' },
    { name: 'Training Resources', slug: 'training-resources' },
    { name: 'RBT Study Guide', slug: 'rbt-study-guide' },
    { name: 'BCBA Study Guide', slug: 'bcba-study-guide' },
    { name: 'Examples', slug: 'examples' },

    // Family and autism-related
    { name: 'Family Resources', slug: 'family-resources' },
    { name: 'Parent Guide', slug: 'parent-guide' },
    { name: 'Autism', slug: 'autism' },
    { name: 'Autism Spectrum Disorder', slug: 'autism-spectrum-disorder' },
    { name: 'Family Support', slug: 'family-support' },
    { name: 'Home Strategies', slug: 'home-strategies' },
    { name: 'Progress Tracking', slug: 'progress-tracking' },

    // Research and evidence
    { name: 'Research', slug: 'research' },
    { name: 'Evidence-Based Practice', slug: 'evidence-based-practice' },
    { name: 'Case Studies', slug: 'case-studies' },
    { name: 'Best Practices', slug: 'best-practices' },
    { name: 'Scientific Research', slug: 'scientific-research' },

    // General content types
    { name: 'Templates', slug: 'templates' },
    { name: 'Checklists', slug: 'checklists' },
    { name: 'Glossary', slug: 'glossary' },
    { name: 'Definitions', slug: 'definitions' },
    { name: 'How-to Guide', slug: 'how-to-guide' },
    { name: 'Tutorial', slug: 'tutorial' },
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
