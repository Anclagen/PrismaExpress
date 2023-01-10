import express from "express";
import { prisma } from "../../prismaClient.js";

export const listingsRouter = express.Router();

// Handling request using router
listingsRouter.get("/", async (req, res) => {
  res.send("This is the listing request");
});
