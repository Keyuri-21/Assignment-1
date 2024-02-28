import mongoose from "mongoose";

// creating the collection for the student in database
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

export default mongoose.model("student", studentSchema);