import { ApplicationSchema } from "@repo/model";
import { Router } from "express";
import { createApplication } from "./application.service.js";
const router: Router = Router();

router.post("/", async ({ body, ctx }, res) => {
  console.log("router activated");
  try {
    ApplicationSchema.parse(body);

    await createApplication(body, ctx);

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
