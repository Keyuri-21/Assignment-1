import mongoose from "mongoose";

// creating the parent collection for the database
const parentSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    parentOf:{
        type: String,
        required: true
    },
    relation:{
        type: String,
        required: true
    },
    phoneNo:{
        type: String ,
        required: true
    } 
})

export default mongoose.model("parent", parentSchema);