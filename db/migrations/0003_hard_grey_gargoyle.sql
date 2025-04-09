CREATE TABLE "resources" (
	"id" varchar(128) PRIMARY KEY NOT NULL,
	"slug" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"date" varchar(50) NOT NULL,
	"reading_time" varchar(50),
	"content" text NOT NULL,
	"cta" jsonb,
	"author" jsonb,
	"tags" jsonb,
	"image" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "resources_slug_unique" UNIQUE("slug")
);
