import Parent from '../model/parentModel.js';

export const createParent =   async (req, res) => {    
    try {
        console.log("sdd")
        const { fname, lname, parentOf, relation, phoneNo,} = req.body;
        console.log(req.body);
        const parentData = new Parent({
            fname,
            lname, 
            parentOf,
            relation,
            phoneNo, 
        });
        const savedData = await parentData.save();
        res.status(200).json({ msg: "parent created successfully." });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// get api for list of students
export const getAllParent = async(req, res) =>{
    console.log("dfa")
    try{
        const parentData = await Parent.find();
        console.log(parentData)
            if(!parentData){
                return res.status(400).json({msg: "parent Data not found."});
            }
            res.status(200).json(parentData);

    }catch(error){
        res.status(500).json({error: error});   
    }
}

// get api for single student
export const getOneParent = async(req,res) =>{
    try{
        const id = req.params.id;
        const parentExist = await Parent.findById(id);
        if(!parentExist){
            return res.status(404).json({msg: "Requested data no found."});
        }
        res.status(200).json({parentExist});

    }catch(error){
        res.status(500).json({error: error});
    }
}

// update api for students
export const updateParent = async(req, res) =>{
    try {
        const id = req.params.id;
        const parentExist = await Parent.findById(id);
        if(!parentExist){
            return res.status(401).json({msg: "parent not exists."})
        }

        const updatedData = await Parent.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "Details Updated Successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

// delete api for students
export const deleteParent = async(req, res) =>{
    try {
        const id = req.params.id;
        const parentExist = await Parent.findById(id);
        if(!parentExist){
            return res.status(404).json({msg: "parent not exists."});
        }
        await Parent.findByIdAndDelete(id);
        res.status(200).json({msg: "parent deleted Successfully.."});
        
    } catch (error) {
        res.status(500).json({error: error});
        
    }
}


// search api based on name of students
export const searchParent = async (req, res) =>{
    try {
        const name = req.params.name;
        const parentExist = await Parent.find({Name:  { $regex: new RegExp(name, 'i') } });


        if(!parentExist){
            return res.status(404).json({msg: "parent not exists."});
        }
        res.status(200).json(parentExist);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

