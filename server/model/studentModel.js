import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    std:{
        type: String,
        required: true
    },
    school:{
        type: String,
        required: true
    },
    profilePic:{
        type: String,
        required: true
    }
    
})

export default mongoose.model("Student", studentSchema);