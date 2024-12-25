import z from "zod";

export const PersonalInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
