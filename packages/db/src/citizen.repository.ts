import { useDb } from "./db.js";
import { citizenTable } from "./schema.js";
import { type Application } from "@repo/model";

export const CitizenRepository = {
  create: async ({ personalInfo, housing }: Application) => {
    const { getDb } = await useDb();
    const db = await getDb();

    console.table(housing);

    try {
      // Insert-Daten erstellen
      const dataToInsert = {
        name: personalInfo.name,
        surname: personalInfo.surname,
        housingType: housing.type,
        loanInterestMonth: housing.loanInterestMonth?.toString(),
        coldRentMonth: housing.coldRentMonth?.toString(),
        additionalCostsMonth: housing.additionalCostsMonth.toString(),
        heatingCostsMonth: housing.heatingCostsMonth.toString(),
      };

      // Daten einfügen
      const result = await db
        .insert(citizenTable)
        .values(dataToInsert)
        .returning();

      // Rückgabewert
      return result;
    } catch (error) {
      console.error("Fehler beim Erstellen eines neuen Bürgers:", error);
      throw error;
    }
  },
};
