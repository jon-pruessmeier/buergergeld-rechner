ALTER TABLE "citizen" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "citizen" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();