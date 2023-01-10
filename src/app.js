import express from "express";
import { userRouter } from "./modules/user/routes.js";
import { applicationRouter } from "./modules/app/routes.js";

const app = express();
const PORT = 27017;

app.use("/user", userRouter);
app.use("/application", applicationRouter);

const server = app.listen(PORT, () => console.log(`🚀 Server ready at: http://localhost:27017`));

// app.use(express.json());

// app.post(`/signup`, async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;

//   const result = await prisma.user.create({
//     data: {
//       firstName,
//       lastName,
//       email,
//       password,
//     },
//   });

//   res.json(result);
// });

// app.get("/users", async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// });
