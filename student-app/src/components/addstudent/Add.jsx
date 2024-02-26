import React, { useEffect, useState } from 'react';
import "./Add.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast  from 'react-hot-toast';



export const Add = () => {
    const students ={
        email:"",
        std:"",
        school:"",
        profilePic :""
        
    }
    const[student, setStudent] = useState(students);
    const[profilePic, setProfilePic] = useState();
    const navigate = useNavigate;


    const inputHandler = (e) =>{
        const {name, value} = e.target;
        setStudent({...student, [name]:value});
    }

    const imgHandler = (e) =>{
        setStudent({...student, profilePic: e.target.files[0]})
    }

    const submitForm = async(e) =>{
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('email', student.email);
        formData.append('std', student.std);
        formData.append('school', student.school);
        formData.append('profilePic', student.profilePic);

        await axios.post("http://localhost:7000/api/create", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response)=>{
            toast.success(response.data.msg, {position:"top-right"});
            
            window.location.href = '/list';
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        axios.get("http://localhost:7000/api/getprofilePic")
        .then(res => setProfilePic(res.data[0].profilePic))
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='addStudent'>
        <Link to={"/list"}>Back</Link>
        <h3>Add New Student</h3>
    <form className='addDetails' onSubmit={submitForm}>
        <div className="inputGroup">
            <label htmlFor='Name'>Email:</label>
            <input type='email' required onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='Enter Your Email'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='surname'>Standard:</label>
            <input type='text' required onChange={inputHandler} id='std' name='std' autoComplete='off' placeholder='Enter Your Standard'/>
        </div>
        <div className="inputGroup">
            <label htmlFor='Name'>School:</label>
            <input type='text' required onChange={inputHandler} id='school' name='school'  autoComplete='off' placeholder='Enter Your School'/>
        </div>

        <div className='mb-3'>
            <label htmlFor='profilePic'>
              <strong> Profile:</strong>
            </label>
            <input
              type='file'
              placeholder='Select Profile Picture'
              autoComplete='off'
              name='profilePic'
              onChange={imgHandler}
              className='form-control rounded-0'
            />
          </div>
        <div className="inputGroup">
            <button type='submit'>Add Student Details</button>
        </div>
      
    </form>

    </div>
  )
}

export default Add;
