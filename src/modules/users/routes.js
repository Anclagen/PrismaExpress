import express from "express";
import { prisma } from "../../server.js";

export const userRouter = express.Router();

// Handling request using router
userRouter.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

userRouter.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName);
    const result = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });

    res.json(result);
  } catch (err) {
    console.log(err);
    res.json({ message: "oops" });
  }
});
