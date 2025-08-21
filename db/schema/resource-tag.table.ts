import { pgTable, uuid, foreignKey, primaryKey } from 'drizzle-orm/pg-core';
import { tags } from './tag.table';
import { resources } from './resources';

/**
 * Junction table for many-to-many relationship between blog posts and tags
 * Associates tags with blog posts for better content organization
 */
export const resourceTags = pgTable(
  'resource_tags',
  {
    resourceId: uuid('resource_id').notNull(),
    tagId: uuid('tag_id').notNull(),
  },
  table => [
    {
      pk: primaryKey({ columns: [table.resourceId, table.tagId] }),
      resourceFk: foreignKey({
        columns: [table.resourceId],
        foreignColumns: [resources.id],
        name: 'resource_tags_resource_id_fk',
      }).onDelete('cascade'),
      tagFk: foreignKey({
        columns: [table.tagId],
        foreignColumns: [tags.id],
        name: 'blog_posts_tags_tag_id_fk',
      }).onDelete('cascade'),
    },
  ]
);
