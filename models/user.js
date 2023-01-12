import * as mongoose from "mongoose";
import {connect} from "../configs/db.js";

connect()
const Schema = mongoose.Schema;
// create schema
const UserSchema = new Schema({
    username: {type: String, required: true, unique : true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String
});


// Export model
export const UserModel = mongoose.model('User', UserSchema);