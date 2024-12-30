import {
  type Application,
  ApplicationSchema,
  calculateApplicationResult,
} from "@repo/model";
import { getCitizenRepository } from "@repo/db";
import { ServerContext } from "../types/server-context.js";

export const ApplicationService = {
  createApplication: async (application: Application, ctx: ServerContext) => {
    const { db } = ctx;
    const repo = getCitizenRepository(db);
    try {
      ApplicationSchema.parse(application);
      console.log("Application is valid.");
      const result = await repo.create(application);
      console.table(result);
      return result;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("Unknown validation error");
      }
    }
  },

  getApplicationResult: async (
    citizenId: string,
    ctx: ServerContext
  ): Promise<number> => {
    const { db } = ctx;
    try {
      const repo = getCitizenRepository(db);

      const housing = await repo.getHousingTypeByCitizenId(citizenId);

      if (!housing?.housingType) throw new Error("Error in housing type");

      const result = calculateApplicationResult(housing?.housingType);

      return result;
    } catch (e) {
      console.error(e);
      return 0;
    }
  },
};
