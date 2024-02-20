import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Surname:{
        type: String,
        required: true
    },
    Std:{
        type: Number,
        required: true
    },
    Rollno:{
        type: Number,
        required: true
    }
    
})

export default mongoose.model("Student", studentSchema);