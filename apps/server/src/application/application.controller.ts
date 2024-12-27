import { ApplicationSchema } from "@repo/model";
import { Router } from "express";
import { createApplication } from "./application.service.js";

const router: Router = Router();

router.post("/", async (req, res, next) => {
  console.log("router activated");
  const body = req.body;
  try {
    ApplicationSchema.parse(body);

    await createApplication(body);

    res.status(201).json({
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

export default router;
