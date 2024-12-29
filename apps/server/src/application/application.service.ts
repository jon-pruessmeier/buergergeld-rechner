import { type Application, ApplicationSchema } from "@repo/model";
import { getCitizenRepository } from "@repo/db";
import { ServerContext } from "../types/server-context.js";

export async function createApplication(
  application: Application,
  ctx: ServerContext
) {
  const { db } = ctx;
  const repo = getCitizenRepository(db);
  try {
    ApplicationSchema.parse(application);
    console.log("Application is valid.");
    const result = await repo.create(application);
    console.table(result);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("Unknown validation error");
    }
  }
}
