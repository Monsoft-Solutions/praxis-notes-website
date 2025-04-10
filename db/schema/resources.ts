import {
  pgTable,
  text,
  timestamp,
  varchar,
  jsonb,
  pgEnum,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const resourceStatus = pgEnum("resource_status", [
  "draft",
  "readyToPublish",
  "published",
]);

export const resources = pgTable("resources", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  metaDescription: text("meta_description").notNull(),
  date: varchar("date", { length: 50 }).notNull(),
  readingTime: varchar("reading_time", { length: 50 }),
  content: text("content").notNull(),
  status: resourceStatus("status").default("draft"),
  cta: jsonb("cta").$type<{
    title: string;
    content: string;
    buttonText: string;
    buttonLink: string;
  }>(),
  author: jsonb("author").$type<{
    name: string;
    title?: string;
    image?: string;
  }>(),
  tags: jsonb("tags").$type<string[]>(),
  image: varchar("image", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Resource = typeof resources.$inferSelect;
export type InsertResource = typeof resources.$inferInsert;
