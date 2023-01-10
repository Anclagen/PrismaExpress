import express from "express";
import { prisma } from "../../server.js";

export const applicationRouter = express.Router();

// Handling request using router
applicationRouter.get("/", async (req, res) => {
  res.send("This is the app request");
});
