import { db } from './config';
import { contactSubmissions } from './schema';
import 'dotenv/config';

// Seed function to populate database with initial data
async function seed() {
  console.log('🌱 Seeding database...');

  try {
    // Check if we already have contact submissions
    const existingContacts = await db.select().from(contactSubmissions).limit(1);
    
    if (existingContacts.length > 0) {
      console.log('ℹ️ Contact submissions table already has data, skipping seed');
    } else {
      // Insert sample contact submissions
      await db.insert(contactSubmissions).values([
        {
          name: 'John Doe',
          email: 'john@example.com',
          company: 'ABC Therapy',
          message: 'I would like to know more about your services.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jane Smith',
          email: 'jane@example.com',
          company: 'XYZ Healthcare',
          message: 'Please send me pricing information for your platform.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      
      console.log('✅ Sample contact submissions created');
    }

    console.log('✅ Seeding completed successfully');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }

  process.exit(0);
}

seed();