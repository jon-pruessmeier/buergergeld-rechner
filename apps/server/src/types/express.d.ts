import * as express from "express";
import { ServerContext } from "./server-context.ts";

declare global {
  namespace Express {
    interface Request {
      ctx: ServerContext;
    }
  }
}
