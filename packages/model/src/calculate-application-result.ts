import { Application } from "./application.js";

export function calculateApplicationResult(
  housingType: Application["housing"]["type"]
): number {
  return housingType === "OWNERSHIP" ? 550 : 500;
}
