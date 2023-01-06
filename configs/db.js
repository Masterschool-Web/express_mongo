import mongoose from "mongoose";
import config from "./config.js";
const { db: { host, name, password } } = config;
const connectionString = `mongodb+srv://${name}:${password}@${host}`;

export const connect = function () {
    mongoose.connect(connectionString);
    mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));
}
