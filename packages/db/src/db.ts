import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import path from "path";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { fileURLToPath } from "url";

type UseDbReturnType = ReturnType<typeof useDb>;
type PromisedServerDb = ReturnType<UseDbReturnType["getDb"]>;
type ServerDb = Awaited<PromisedServerDb>;

const { Pool } = pg;

function useDb(connectionString?: string) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  async function initDb() {
    const pool = new Pool({
      connectionString,
    });
    const db = drizzle({ client: pool });

    try {
      await migrate(db, {
        migrationsFolder: path.resolve(__dirname, "../drizzle/"),
      });
      console.log("Migration erfolgreich abgeschlossen!");
    } catch (error) {
      console.error("Fehler bei der Migration:", error);
    }
  }

  async function getDb() {
    const pool = new Pool({
      connectionString,
    });
    const db = drizzle({ client: pool });
    return db;
  }

  return { initDb, getDb };
}

export { useDb, type ServerDb };
