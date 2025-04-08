CREATE TABLE "waitlist_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"organization" varchar(255),
	"role" varchar(100) NOT NULL,
	"interest" text NOT NULL,
	"newsletter" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
