import * as mongoose from "mongoose";
import {connect} from "../configs/db.js";

connect()
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