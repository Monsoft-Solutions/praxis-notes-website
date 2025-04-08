import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'dotenv/config';

// Create a SQL connection pool or client
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not defined');
}

// Create postgres client
const client = postgres(connectionString, {
  ssl: process.env.NODE_ENV === 'production',
  max: 10, // Max connections in pool
  idle_timeout: 20, // Idle connection timeout in seconds
  connect_timeout: 10, // Connect timeout in seconds
});

// For use in all contexts (Server Components, API Routes, etc.)
export const db = drizzle(client);