import Parent from '../model/parentModel.js';
// api for creating the parent 
export const createParent =   async (req, res) => {    
    try {

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
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

// get api for list of parents
export const getAllParent = async(req, res) =>{
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

// get api for single parent
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

// update api for parent
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

// delete api for parents
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


// search api based on  first name of parents
export const searchParent = async (req, res) =>{
    try {
        const fname = req.params.fname;
        const parentExist = await Parent.find({fname:  { $regex: new RegExp(fname, 'i') } });


        if(!parentExist){
            return res.status(404).json({msg: "parent not exists."});
        }
        res.status(200).json(parentExist);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

