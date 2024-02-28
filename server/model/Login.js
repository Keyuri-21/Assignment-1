import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isAdmin:{ type: Boolean, default: false}
});

const loginModel = mongoose.model("login", loginSchema);
export default loginModel;