import { z } from "zod";
import { PersonalInfoSchema } from "./personal-info.js";

export const ApplicationSchema = z.object({
  personalInfo: PersonalInfoSchema,
});

export type Application = z.infer<typeof ApplicationSchema>;
