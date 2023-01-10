import express from "express";
import { userRouter } from "./modules/users/routes.js";
import { applicationRouter } from "./modules/applications/routes.js";
import { listingsRouter } from "./modules/listings/routes.js";
import { offersRouter } from "./modules/offers/routes.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/users", userRouter);
app.use("/applications", applicationRouter);
app.use("/listings", listingsRouter);
app.use("/offers", offersRouter);

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
