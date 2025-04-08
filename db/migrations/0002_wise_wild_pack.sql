ALTER TABLE "waitlist_submissions" ALTER COLUMN "interest" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "waitlist_submissions" ADD CONSTRAINT "waitlist_submissions_email_unique" UNIQUE("email");