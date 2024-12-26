import express from "express";
import { ApplicationModule } from "./application/application.module.js";
import cors from "cors";

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
