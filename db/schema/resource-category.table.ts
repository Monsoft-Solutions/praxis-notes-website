import {
  pgTable,
  text,
  timestamp,
  varchar,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { resources } from "./resources";

export const categories = pgTable("categories", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  name: varchar("name", { length: 255 }).notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const resourceCategories = pgTable(
  "resource_categories",
  {
    id: varchar("id", { length: 128 })
      .primaryKey()
      .$defaultFn(() => createId()),
    resourceId: varchar("resource_id", { length: 128 })
      .notNull()
      .references(() => resources.id, { onDelete: "cascade" }),
    categoryId: varchar("category_id", { length: 128 })
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
  },
  (table) => {
    return {
      unique: uniqueIndex("unique_resource_category").on(
        table.resourceId,
        table.categoryId
      ),
    };
  }
);

export type Category = typeof categories.$inferSelect;
export type InsertCategory = typeof categories.$inferInsert;
export type ResourceCategory = typeof resourceCategories.$inferSelect;
export type InsertResourceCategory = typeof resourceCategories.$inferInsert;
