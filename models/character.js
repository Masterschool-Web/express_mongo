import mongoose from "mongoose";
import config from "../configs/config.js";
const { db: { host, name, password } } = config;
const connectionString = `mongodb+srv://${name}:${password}@${host}`;
await mongoose.connect(connectionString);
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));

const Schema = mongoose.Schema;
// create schema
const CharacterSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    blood: String,
    species: String,
    patronus: String,
    born: String,
    quote: String,
    imgUrl: String
});

// Export model
export const CharacterModel = mongoose.model('Character', CharacterSchema);