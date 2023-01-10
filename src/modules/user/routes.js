import express from "express";
import { prisma } from "../../server.js";

export const userRouter = express.Router();

// Handling request using router
userRouter.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});
