import express from "express";
import config from "./configs/config.js"
import {characterRouter} from "./routes/characterRouter.js";
import {userRouter} from "./routes/userRouter.js";

const app = express();
app.use(express.urlencoded());
app.use(express.json());

app.use("/characters", characterRouter);
app.use("/users", userRouter);

app.listen(config.app.port, () => {
  console.log(`${config.app.name} is running on port ${config.app.port}`);
});
