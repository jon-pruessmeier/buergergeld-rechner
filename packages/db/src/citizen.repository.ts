import { useDb } from "./db.js";
import { citizenTable } from "./schema.js";
import { type Application } from "@repo/model";

export const CitizenRepository = {
  create: async ({ personalInfo }: Application) => {
    const { getDb } = await useDb();
    const db = await getDb();

    try {
      // Insert-Daten erstellen
      const dataToInsert = {
        name: personalInfo.name,
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
