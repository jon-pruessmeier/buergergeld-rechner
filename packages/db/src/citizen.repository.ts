import { citizenTable } from "./schema.js";
import { type Application } from "@repo/model";

import { ServerDb } from "./db.js";
import { eq } from "drizzle-orm";

export const getCitizenRepository = (db: ServerDb) => ({
  create: async ({ personalInfo, housing }: Application) => {
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

      const id = result[0]?.id;

      if (!id) throw new Error();

      return id;
    } catch (error) {
      console.error("Fehler beim Erstellen eines neuen Bürgers:", error);
      throw error;
    }
  },

  getHousingTypeByCitizenId: async (id: string) => {
    try {
      const result = await db
        .select({
          id: citizenTable.id,
          housingType: citizenTable.housingType,
        })
        .from(citizenTable)
        .where(eq(citizenTable.id, id));

      if (result.length === 0) {
        throw new Error(`Kein Eintrag mit ID ${id} gefunden.`);
      }

      return result.at(0);
    } catch (error) {
      console.error(`Fehler beim Abrufen des Bürgers mit ID ${id}:`, error);
      throw error;
    }
  },
});
