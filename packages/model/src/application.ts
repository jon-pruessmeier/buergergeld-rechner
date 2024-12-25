import { z } from "zod";
import { PersonalInfoSchema } from "./personal-info.js";
import { HousingSchema } from "./housing.js";

export const ApplicationSchema = z.object({
  personalInfo: PersonalInfoSchema,
  housing: HousingSchema,
});

export type Application = z.infer<typeof ApplicationSchema>;
