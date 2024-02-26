import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast  from 'react-hot-toast';



export const Add = () => {
    const parents ={
        fname:"",
        lname:"",
        parentOf:"",
        relation:"",
        phoneNo:""
        
    }
    const[parent, setParent] = useState(parents);

    const navigate = useNavigate;


    const inputHandler = (e) =>{
        const {name, value} = e.target;
        setParent({...parent, [name]:value});
    }


    const submitForm = async(e) =>{
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('fname', parent.fname);
        formData.append('lname', parent.lname);
        formData.append('parentOf', parent.parentOf);
        formData.append('relation', parent.relation);
        formData.append('phoneNo', parent.phoneNo);
      

        await axios.post("http://localhost:7000/api/createParent", formData, {
         
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
        <h3>Add New Parent</h3>
    <form className='addDetails' onSubmit={submitForm}>
        <div className="inputGroup">
            <label htmlFor='Name'>First Name:</label>
            <input type='text' required onChange={inputHandler} id='fname' name='fname' autoComplete='off' placeholder='Enter Your Name'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='surname'>Last Name:</label>
            <input type='text' required onChange={inputHandler} id='lname' name='lname' autoComplete='off' placeholder='Enter Your Surname'/>
        </div>
        <div className="inputGroup">
            <label htmlFor='Name'>Parent Of:</label>
            <input type='text' required onChange={inputHandler} id='parentOf' name='parentOf'  autoComplete='off' placeholder='Enter Your Child Name'/>
        </div>
        <div className="inputGroup">
            <label htmlFor='Name'>Relation:</label>
            <input type='text' required onChange={inputHandler} id='relation' name='relation'  autoComplete='off' placeholder='Enter Your Relation with Child '/>
        </div>
        <div className="inputGroup">
            <label htmlFor='Name'>Contact Number:</label>
            <input type='bigint' required onChange={inputHandler} id='phoneNo' name='phoneNo'  autoComplete='off' placeholder='Enter Your  Number'/>
        </div>
        <div className="inputGroup">
            <button type='submit'>Add Parent Details</button>
        </div>
    </form>
    </div>
  )
}
export default Add;