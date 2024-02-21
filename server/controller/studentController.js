import Student from '../model/studentModel.js';

export const create = async(req, res)=>{
    try{
        const studentData = new Student(req.body);
        

        if(!studentData){
            return res.status(404).json({msg: "Student data not found"});
        }
        const savedData = await studentData.save();
        console.log('Saved Data:', savedData); 
        res.status(200).json({msg: "Student created successfully."});

    }catch(error){
        res.status(200).json({error: error.message});

    } 

}

export const getAll = async(req, res) =>{
    try{

        const studentData = await Student.find();
            if(!studentData){
                return res.status(400).json({msg: "Student Data not found."});
            }
            res.status(200).json(studentData);

    }catch(error){
        res.status(500).json({error: error});
    }
}

export const getOne = async(req,res) =>{
    try{
        const id = req.params.id;
        const studentExist = await Student.findById(id);
        if(!studentExist){
            return res.status(404).json({msg: "Requested data no found."});
        }
        res.status(200).json({studentExist});

    }catch(error){
        res.status(500).json({error: error});
    }
}

export const update = async(req, res) =>{
    try {
        const id = req.params.id;
        const studentExist = await Student.findById(id);
        if(!studentExist){
            return res.status(401).json({msg: "Student not exists."})
        }

        const updatedData = await Student.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "Details Updated Successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const deleteStudent = async(req, res) =>{
    try {
        const id = req.params.id;
        const studentExist = await Student.findById(id);
        if(!studentExist){
            return res.status(404).json({msg: "Student not exists."});
        }
        await Student.findByIdAndDelete(id);
        res.status(200).json({msg: "Student deleted Successfully.."});
        
    } catch (error) {
        res.status(500).json({error: error});
        
    }
}