import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { fileURLToPath } from "url";
import path from "path";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const { Pool } = pg;

export async function useDb() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  dotenv.config({
    path: path.resolve(__dirname, "../../../.env"),
  });

  async function initDb() {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    const db = drizzle({ client: pool });

    try {
      // Migration ausführen
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
      connectionString: process.env.DATABASE_URL,
    });
    const db = drizzle({ client: pool });
    return db;
  }

  return { initDb, getDb };
}
