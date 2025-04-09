CREATE TABLE "categories" (
	"id" varchar(128) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "categories_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "resource_categories" (
	"id" varchar(128) PRIMARY KEY NOT NULL,
	"resource_id" varchar(128) NOT NULL,
	"category_id" varchar(128) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "resource_categories" ADD CONSTRAINT "resource_categories_resource_id_resources_id_fk" FOREIGN KEY ("resource_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resource_categories" ADD CONSTRAINT "resource_categories_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "unique_resource_category" ON "resource_categories" USING btree ("resource_id","category_id");