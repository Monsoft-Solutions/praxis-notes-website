import { pgTable, serial, varchar, text, boolean, timestamp } from 'drizzle-orm/pg-core';

export const waitlistSubmissions = pgTable('waitlist_submissions', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  organization: varchar('organization', { length: 255 }),
  role: varchar('role', { length: 100 }).notNull(),
  interest: text('interest').notNull(),
  newsletter: boolean('newsletter').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type WaitlistSubmission = typeof waitlistSubmissions.$inferInsert;