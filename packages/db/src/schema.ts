import { numeric, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const citizenTable = pgTable("citizen", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  //   surname: varchar({ length: 255 }).notNull(),
  //   housingType: varchar({ enum: ["RENT", "OWNERSHIP"] }),
  //   loanInterestMonth: numeric(),
  //   coldRentMonth: numeric(),
  //   additionalCostsMonth: numeric(),
  //   heatingCostsMonth: numeric(),
});
