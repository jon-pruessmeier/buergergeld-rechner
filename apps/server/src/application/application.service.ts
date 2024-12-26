import { type Application, ApplicationSchema } from "@repo/model";

async function createApplication(application: Application) {
  console.log(application);
  try {
    ApplicationSchema.parse(application);
    console.log("Application is valid.");
    return true;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("Unknown validation error");
    }
  }
}
