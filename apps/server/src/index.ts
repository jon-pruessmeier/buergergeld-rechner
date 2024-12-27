import express from "express";
import { ApplicationModule } from "./application/application.module.js";
import cors from "cors";
import { useDb } from "../../../../Bürgergeldrechner/packages/db/src/db.js";

async function initServer() {
  const { initDb } = await useDb();

  console.log("Creating DB");

  await initDb();

  console.log("Starting Server");
  const app = express();
  const PORT = process.env.PORT || 8080;

  app.use(express.json());

  app.use(cors());

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
