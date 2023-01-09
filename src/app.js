import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const PORT = 27017;

app.use(express.json());

app.post(`/signup`, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const result = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });

  res.json(result);
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

const server = app.listen(PORT, () =>
  console.log(`
🚀 Server ready at: http://localhost:27017
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`)
);
