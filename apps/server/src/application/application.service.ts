import { type Application, ApplicationSchema } from "@repo/model";
import { CitizenRepository } from "@repo/db";

export async function createApplication(application: Application) {
  try {
    ApplicationSchema.parse(application);
    console.log("Application is valid.");
    const result = await CitizenRepository.create(application);
    console.table(result);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("Unknown validation error");
    }
  }
}
