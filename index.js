import express from "express";
import config from "configs/config"

const app = express();

app.listen(config.app.port, () => {
  console.log(`${config.app.name} is running on port ${config.app.port}`);
});
