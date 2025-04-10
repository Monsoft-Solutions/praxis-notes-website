DO $$
BEGIN
    -- Check if the resource_status type exists
    IF NOT EXISTS (
        SELECT 1 FROM pg_type 
        WHERE typname = 'resource_status' 
        AND typnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
    ) THEN
        -- Create the type if it doesn't exist
        EXECUTE 'CREATE TYPE "public"."resource_status" AS ENUM(''draft'', ''readyToPublish'', ''published'')';
    END IF;

    -- Check if the status column exists in resources table
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'resources' AND column_name = 'status'
    ) THEN
        -- Add the column if it doesn't exist
        ALTER TABLE "resources" ADD COLUMN "status" "resource_status" DEFAULT 'draft';
    END IF;

    -- Check if the slug column exists in categories table
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'categories' AND column_name = 'slug'
    ) THEN
        -- Add the column if it doesn't exist
        ALTER TABLE "categories" ADD COLUMN "slug" varchar(255) NOT NULL DEFAULT '';
    END IF;

    -- Check if the unique constraint exists on categories.slug
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints
        WHERE constraint_name = 'categories_slug_unique' 
        AND table_name = 'categories'
    ) THEN
        -- Add the constraint if it doesn't exist
        ALTER TABLE "categories" ADD CONSTRAINT "categories_slug_unique" UNIQUE("slug");
    END IF;
END
$$;
ALTER TABLE "resources" RENAME COLUMN "description" TO "meta_description";--> statement-breakpoint