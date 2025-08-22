import {
  pgTable,
  text,
  timestamp,
  varchar,
  uniqueIndex,
  uuid,
  primaryKey,
} from 'drizzle-orm/pg-core';
import { resources } from './resources';

export const categories = pgTable('categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull().unique(),
  description: text('description'),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const resourceCategories = pgTable(
  'resource_categories',
  {
    resourceId: uuid('resource_id')
      .notNull()
      .references(() => resources.id, { onDelete: 'cascade' }),
    categoryId: uuid('category_id')
      .notNull()
      .references(() => categories.id, { onDelete: 'cascade' }),
  },
  table => ({
    unique: uniqueIndex('unique_resource_category').on(
      table.resourceId,
      table.categoryId
    ),
    pk: primaryKey({ columns: [table.resourceId, table.categoryId] }),
  })
);

export type Category = typeof categories.$inferSelect;
export type InsertCategory = typeof categories.$inferInsert;
export type ResourceCategory = typeof resourceCategories.$inferSelect;
export type InsertResourceCategory = typeof resourceCategories.$inferInsert;
