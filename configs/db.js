import mongoose from "mongoose";
import config from "./config"

const { db: { host, name, password } } = config;

const connectionString = `mongodb+srv://${name}:${password}@${host}`;
mongoose.connect(connectionString);

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));