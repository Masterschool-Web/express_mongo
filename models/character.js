import mongoose from "mongoose";
const Schema = mongoose.Schema;

// create schema
const CharacterSchema = new Schema({
   // populate properties
});

// Export model
module.exports = mongoose.model("Character", CharacterSchema);