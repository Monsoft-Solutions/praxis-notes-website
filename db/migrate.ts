import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import 'dotenv/config';

// This script should be run from the command line to apply migrations
async function runMigrations() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not defined');
  }
  
  // Create a dedicated connection for migrations
  const migrationClient = postgres(process.env.DATABASE_URL, { 
    max: 1,
    ssl: process.env.NODE_ENV === 'production'
  });
  
  const db = drizzle(migrationClient);
  
  console.log('⏳ Running migrations...');
  
  try {
    await migrate(db, { migrationsFolder: './db/migrations' });
    console.log('✅ Migrations completed successfully');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    // Close the connection
    await migrationClient.end();
  }
  
  process.exit(0);
}

runMigrations();