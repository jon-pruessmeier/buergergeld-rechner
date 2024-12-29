import express from "express";
import { ApplicationModule } from "./application/application.module.js";
import cors from "cors";
import { ServerDb, useDb } from "@repo/db";
import dotenv from "dotenv";

async function initServer() {
  dotenv.config();

  const dbConnectionString = process.env.DATABASE_URL;
  console.log(dbConnectionString);
  const { initDb, getDb } = useDb(dbConnectionString);

  console.log("Creating DB");

  await initDb();

  const db: ServerDb = await getDb();

  console.log("Starting Server");
  const app = express();
  const PORT = process.env.PORT || 8080;

  app.use(express.json());

  app.use(cors());

  app.use((req, res, next) => {
    req.ctx = { db }; // Kontext im Request verfügbar machen
    next();
  });

  app.use("/api/application", ApplicationModule.routes);

  app.get("/", (req, res) => {
    res.send("Hello from Express Server!");
  });

  // Server starten
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

initServer();
