// created the admin collection in the database
import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const AdminModel = mongoose.model("admin", AdminSchema)
export default AdminModel;