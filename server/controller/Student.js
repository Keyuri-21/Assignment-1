import express from "express";
import student from '../model/Student.js';


const app = express();
export const profilePic = async (req, res) =>{
 student.find()
.then(students =>{res.json(students)})

.catch(err => res.json(err))
}

//api for the create student
export const create =   async (req, res) => {    
    try {
        const { email, std, school } = req.body;
        const profilePic = req.file.filename ;
        const studentData = new student({
            email,
            std, 
            school,
            profilePic,
        });

        const savedData = await studentData.save();
        res.status(200).json({ msg: "Student created successfully." });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//api for the fetching of the student details
app.get('/getByEmail', async (req, res) => {
    const { email } = req.query;
    const student = await student.findOne({ email });
  
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  });

// get api for list of students
export const getAll = async(req, res) =>{
    try{
        const studentData = await student.find();
            if(!studentData){
                return res.status(400).json({msg: "Student Data not found."});
            }
            res.status(200).json(studentData);

    }catch(error){
        res.status(500).json({error: error});   
    }
}

// get api for single student
export const getOne = async(req,res) =>{
    try{
        const id = req.params.id;
        const studentExist = await student.findById(id);
        if(!studentExist){
            return res.status(404).json({msg: "Requested data no found."});
        }
        res.status(200).json({studentExist});

    }catch(error){
        res.status(500).json({error: error});
    }
}

// update api for students
export const update = async(req, res) =>{
    try {
        const id = req.params.id;
        const studentExist = await student.findById(id);
        if(!studentExist){
            return res.status(401).json({msg: "Student not exists."})
        }

        const { email, std, school, profilePic } = req.body;

    // Update the document
    const updatedData = await student.findByIdAndUpdate(
      id,
      { email, std, school, profilePic },
      { new: true }
    );

    res.status(200).json({ msg: "Details Updated Successfully", updatedData });
 
    } catch (error) {
        res.status(500).json({error: error});
    }
}


// delete api for students
export const deleteStudent = async(req, res) =>{
    try {
        const id = req.params.id;
        const studentExist = await student.findById(id);
        if(!studentExist){
            return res.status(404).json({msg: "Student not exists."});
        }
        await student.findByIdAndDelete(id);
        res.status(200).json({msg: "Student deleted Successfully.."});
        
    } catch (error) {
        res.status(500).json({error: error});
        
    }
}


// search api based on email of students
export const search = async (req, res) =>{
    try {
        const email = req.params.email;
        const studentExist = await student.find({email:  { $regex: new RegExp(email, 'i') } });
        if(!studentExist){
            return res.status(404).json({msg: "Student not exists."});
        }
        res.status(200).json(studentExist);
    } catch (error) {
        res.status(500).json({error: error});
    }
}