import mongoose from "mongoose";

const SignupSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirm: String
})

const SignupModel = mongoose.model("signup", SignupSchema)
export default SignupModel;