import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

 const EditParent = () => {

    const {id} = useParams();
    const [parent, setParent] = useState({
        fname: "",
        lname: "",
        parentOf: "",
        relation:"",
        phoneNo:""
    });
    const navigate = useNavigate();

    const inputChangeHandler = (e) =>{
        const {name, value} = e.target;
        setParent({...parent, [name]:value});   
        console.log(parent);
    }

    useEffect(()=>{
       axios.get(`http://localhost:7000/api/getOneParent/${id}`)
       .then((response)=>{
        setParent(response.data);
        const fetchParentData = response.data.parentExist
        setParent({
           fname: fetchParentData.fname,
            lname: fetchParentData.lname,
            parentOf: fetchParentData.parentOf,
            relation: fetchParentData.relation,
            phoneNo: fetchParentData.phoneNo,
        });
      
       })
       .catch((error)=>{
        console.log(error);   
       });
    },[id]);

    const submitForm = async(e) =>{
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('fname', parent.fname);
        formData.append('lname', parent.lname);
        formData.append('parentOf', parent.parentOf);
        formData.append('relation', parent.relation);
        formData.append('phoneNo', parent.phoneNo);

        await axios.post("http://localhost:7000/api/updateParent/${id}", formData, {
        })
        .then((response)=>{
            toast.success(response.data.msg, {position:"top-right"});
            
            window.location.href = '/parentList';
        })
        .catch(error => console.log(error))
    }
  return (
    <div className='addParent'>
    <Link to={"/parentList"}>Back</Link>
    <h3>Update Parent Details</h3>
<form className='adddetails' onSubmit={submitForm}>
    <div className="inputGroup">
        <label htmlFor='Name'>First Name:</label>
        <input type='text' value={parent.fname} onChange={inputChangeHandler} name="fname" autoComplete='off'/>
    </div>
    <div className='inputGroup'>
        <label htmlFor='surname'>Last Name:</label>
        <input type='text' value={parent.lname} onChange={inputChangeHandler} name="std" autoComplete='off'/>
    </div>
    <div className="inputGroup">
        <label htmlFor='Parent Of'>Parent Of:</label>
        <input type='text' value={parent.parentOf} onChange={inputChangeHandler} name="parentOf" autoComplete='off' />
    </div>
    <div className="inputGroup">
        <label htmlFor='Relation'>Relation:</label>
        <input type='text' value={parent.relation} onChange={inputChangeHandler} name="relation" autoComplete='off' />
    </div>
    <div className="inputGroup">
        <label htmlFor='Parent Of'>Contact Number:</label>
        <input type='text' value={parent.phoneNo} onChange={inputChangeHandler} name="parentNo" autoComplete='off' />
    </div>
    <div className="inputGroup">
        <button type='submit'>Update Parent Details</button>
    </div>
</form>

</div>
  )
}
export default EditParent;
