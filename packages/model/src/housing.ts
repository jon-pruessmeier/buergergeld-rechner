import { z } from "zod";

const CommonFields = {
  additionalCostsMonth: z.number().nonnegative(),
  heatingCostsMonth: z.number().nonnegative(),
};
// Definition für die beiden Typen
const RentSchema = z.object({
  type: z.literal("RENT"),
  coldRentMonth: z.number().nonnegative(),
  loanInterestMonth: z.literal(null),
  ...CommonFields,
});

const OwnershipSchema = z.object({
  type: z.literal("OWNERSHIP"),
  coldRentMonth: z.literal(null),
  loanInterestMonth: z.number().nonnegative(),
  ...CommonFields,
});

export const HousingSchema = z.discriminatedUnion("type", [
  RentSchema,
  OwnershipSchema,
]);

export type Housing = z.infer<typeof HousingSchema>;
