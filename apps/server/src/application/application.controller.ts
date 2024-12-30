import { ApplicationSchema } from "@repo/model";
import { Router } from "express";
import { ApplicationService } from "./application.service.js";
import { Request, Response } from "express";

const router: Router = Router();

const { createApplication } = ApplicationService;

router.post("/", async ({ body, ctx }, res) => {
  console.log("router activated");
  try {
    ApplicationSchema.parse(body);

    const result = await createApplication(body, ctx);

    res.status(201).json({
      id: result,
      message: "Application successfully created",
    });
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("Unknown validation error");
    }
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { ctx } = req;

    console.log(`ID: ${id}`);

    const result = await ApplicationService.getApplicationResult(id, ctx);

    if (!result) {
      res.status(404).json({ error: "Daten nicht gefunden." });
      return;
    }

    res.json({ result });
  } catch (error) {
    console.error("Fehler bei der Anfrage:", error);
    res.status(500).json({ error: "Interner Serverfehler." });
  }
});

export default router;
