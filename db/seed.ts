import 'dotenv/config';
import seedCategories from './seed-categories';
import seedTags from './seed-tags';
import seedAuthors from './seed-authors';

// Seed function to populate database with initial data
async function seed() {
  console.log('🌱 Seeding database...');

  try {
    await seedCategories();
    await seedTags();
    await seedAuthors();

    console.log('✅ Seeding completed successfully');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }

  process.exit(0);
}

seed();
