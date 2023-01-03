import mongoose from "mongoose";
import config from "./config"

const { db: { host, port, name } } = config;
const connectionString = `mongodb://${host}:${port}/${name}`;
mongoose.connect(connectionString);

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));