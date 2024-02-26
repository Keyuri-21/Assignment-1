import mongoose from "mongoose";

// creating the collection of the signups users
const SignupSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirm: String
})

const SignupModel = mongoose.model("signup", SignupSchema)
export default SignupModel;