CREATE TABLE "images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"url" text NOT NULL,
	"alt" text NOT NULL,
	"title" varchar(255),
	"description" text,
	"width" integer,
	"height" integer,
	"file_size" integer,
	"mime_type" varchar(100),
	"original_filename" varchar(255),
	"blur_data_url" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "resources" DROP COLUMN "featured_image";--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "featured_image_id" uuid;--> statement-breakpoint
ALTER TABLE "resources" ADD CONSTRAINT "resources_featured_image_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;