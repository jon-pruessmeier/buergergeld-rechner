import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

import pg from "pg";

import { fileURLToPath } from "url";
import path from "path";

// `__dirname` und `__filename` in ES Modules erstellen
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../../../.env"),
});

const { Pool } = pg;

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle({ client: pool });
