import express from "express";
import { userRouter } from "./modules/users/routes.js";
import { applicationRouter } from "./modules/applications/routes.js";
import { listingsRouter } from "./modules/listings/routes.js";
import { offersRouter } from "./modules/offers/routes.js";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
  bodyParser.json({
    extended: false,
  })
);
app.use("/users", userRouter);
app.use("/applications", applicationRouter);
app.use("/listings", listingsRouter);
app.use("/offers", offersRouter);

const server = app.listen(PORT, () => console.log(`🚀 Server ready at: http://localhost:${PORT}`));
