import express from "express";
import config from "./configs/config.js"
import {characterRouter} from "./routes/characterRouter.js";

const app = express();

app.use("/characters", characterRouter);

app.listen(config.app.port, () => {
  console.log(`${config.app.name} is running on port ${config.app.port}`);
});
