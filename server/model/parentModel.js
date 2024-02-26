import mongoose from "mongoose";

const parentSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
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

export default mongoose.model("Parent", parentSchema);