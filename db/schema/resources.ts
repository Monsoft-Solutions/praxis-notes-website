import {
  pgTable,
  text,
  timestamp,
  varchar,
  pgEnum,
  foreignKey,
  uuid,
  integer,
} from 'drizzle-orm/pg-core';
import { authors } from './author.table';
import { images } from './image.table';

export const resourceStatus = pgEnum('resource_status', [
  'draft',
  'readyToPublish',
  'published',
]);

export const resources = pgTable(
  'resources',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    slug: varchar('slug', { length: 255 }).notNull().unique(),
    title: varchar('title', { length: 255 }).notNull(),
    metaDescription: text('meta_description').notNull(),
    metaTitle: varchar('meta_title', { length: 255 }),
    metaKeywords: text('meta_keywords'),
    excerpt: text('excerpt'),
    date: varchar('date', { length: 50 }).notNull(),
    readingTime: varchar('reading_time', { length: 50 }),
    content: text('content').notNull(),
    status: resourceStatus('status').default('draft'),
    views: integer('views').default(0).notNull(),
    authorId: uuid('author_id'),
    featuredImageId: uuid('featured_image_id'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  table => ({
    authorFk: foreignKey({
      columns: [table.authorId],
      foreignColumns: [authors.id],
      name: 'resources_author_id_fk',
    }).onDelete('set null'),
    featuredImageFk: foreignKey({
      columns: [table.featuredImageId],
      foreignColumns: [images.id],
      name: 'resources_featured_image_id_fk',
    }).onDelete('set null'),
  })
);

export type Resource = typeof resources.$inferSelect;
export type InsertResource = typeof resources.$inferInsert;
