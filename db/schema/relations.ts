import { relations } from 'drizzle-orm';
import { resourceTags } from './resource-tag.table';
import { resources } from './resources';
import { tags } from './tag.table';
import { categories, resourceCategories } from './resource-category.table';
import { authors } from './author.table';
import { images } from './image.table';

export const resourceTagsRelations = relations(resourceTags, ({ one }) => ({
  resource: one(resources, {
    fields: [resourceTags.resourceId],
    references: [resources.id],
  }),
  tag: one(tags, {
    fields: [resourceTags.tagId],
    references: [tags.id],
  }),
}));

export const resourceCategoriesRelations = relations(
  resourceCategories,
  ({ one }) => ({
    resource: one(resources, {
      fields: [resourceCategories.resourceId],
      references: [resources.id],
    }),
    category: one(categories, {
      fields: [resourceCategories.categoryId],
      references: [categories.id],
    }),
  })
);

export const resourcesRelations = relations(resources, ({ one, many }) => ({
  author: one(authors, {
    fields: [resources.authorId],
    references: [authors.id],
  }),
  featuredImage: one(images, {
    fields: [resources.featuredImageId],
    references: [images.id],
  }),
  resourceCategories: many(resourceCategories),
  resourceTags: many(resourceTags),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  resourceTags: many(resourceTags),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  resourceCategories: many(resourceCategories),
}));

export const authorsRelations = relations(authors, ({ many }) => ({
  resources: many(resources),
}));

export const imagesRelations = relations(images, ({ many }) => ({
  resources: many(resources),
}));
