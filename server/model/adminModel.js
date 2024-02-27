// created the admin collection in the database
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const adminModel = mongoose.model("admin", adminSchema)
export default adminModel;