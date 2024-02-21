import React, { useState } from 'react';
import "./Add.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast  from 'react-hot-toast';

export const Add = () => {
    const students ={
        Name:"",
        Surname:"",
        Std:"",
        Rollno:"",
    }
    const[student, setStudent] = useState(students);
    const navigate = useNavigate;

    const inputHandler = (e) =>{
        const {name, value} = e.target;
        setStudent({...student, [name]:value});
    }

    const submitForm = async(e) =>{
        e.preventDefault();
        console.log("form")
        await axios.post("http://localhost:8000/api/create", student)
        .then((response)=>{
            toast.success(response.data.msg, {position:"top-right"});
            navigate("/")
        })
        .catch(error => console.log(error))
    }
  return (
    <div className='addStudent'>
        <Link to={"/"}>Back</Link>
        <h3>Add New Student</h3>
    <form className='adddetails' onSubmit={submitForm}>
        <div className="inputGroup">
            <label htmlFor='Name'>Name:</label>
            <input type='text' required onChange={inputHandler} id='name' name='Name' autoComplete='off' placeholder='Enter Your Name'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='surname'>Surname:</label>
            <input type='text' required onChange={inputHandler} id='surname' name='Surname' autoComplete='off' placeholder='Enter Your Surname'/>
        </div>
        <div className="inputGroup">
            <label htmlFor='Std'>Standard:</label>
            <input type='text' required onChange={inputHandler} id='std' name='Std' autoComplete='off' placeholder='Your Current Standard'/>
        </div>
        <div className="inputGroup">
            <label htmlFor='Name'>Roll Number:</label>
            <input type='string' required onChange={inputHandler} id='rollno' name='Rollno'  autoComplete='off' placeholder='Enter Your Roll Number'/>
        </div>
        <div className="inputGroup">
            <button type='submit'>Add Student Details</button>
        </div>
    </form>

    </div>
  )
}

export default Add;
