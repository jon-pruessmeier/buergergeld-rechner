ALTER TABLE "citizen" ALTER COLUMN "name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "citizen" ADD COLUMN "surname" varchar(255);--> statement-breakpoint
ALTER TABLE "citizen" ADD COLUMN "housingType" varchar;