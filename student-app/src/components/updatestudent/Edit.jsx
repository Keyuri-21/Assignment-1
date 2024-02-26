import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import "../addstudent/Add.css";
import toast from 'react-hot-toast';

 const Edit = () => {

    const {id} = useParams();
    const [student, setStudent] = useState({
        email: "",
        std: "",
        school: "",
        profilePic :""
    });
    const [profilePic, setProfilePic] = useState();
    const navigate = useNavigate();

    const inputChangeHandler = (e) =>{
        const {name, value} = e.target;
        setStudent({...student, [name]:value});   
        console.log(student);
    }

    const imgHandler = (e) =>{
        setStudent({...student, profilePic: e.target.files[0]})
    }

    useEffect(()=>{
       axios.get(`http://localhost:7000/api/getOne/${id}`)
       .then((response)=>{
        setStudent(response.data);
        const fetchStudentData = response.data.studentExist
        setStudent({
            email: fetchStudentData.email,
            std: fetchStudentData.std,
            school: fetchStudentData.school,
            profilePic: fetchStudentData.profilePic,
        });
      
       })
       .catch((error)=>{
        console.log(error);   
       });
    },[id]);

    const submitForm = async(e) =>{
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('email', student.email);
        formData.append('std', student.std);
        formData.append('school', student.school);
        formData.append('profilePic', student.profilePic);

        await axios.post("http://localhost:7000/api/update/${id}", formData, {
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
  return (
    <div className='addStudent'>
    <Link to={"/list"}>Back</Link>
    <h3>Update Student Details</h3>
<form className='adddetails' onSubmit={submitForm}>
    <div className="inputGroup">
        <label htmlFor='Name'>Email:</label>
        <input type='email' value={student.email} onChange={inputChangeHandler} name="email" autoComplete='off'/>
    </div>
    <div className='inputGroup'>
        <label htmlFor='surname'>Standard:</label>
        <input type='text' value={student.std} onChange={inputChangeHandler} name="std" autoComplete='off'/>
    </div>
    <div className="inputGroup">
        <label htmlFor='Name'>School:</label>
        <input type='text' value={student.school} onChange={inputChangeHandler} name="school" autoComplete='off' />
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
        <button type='submit'>Update Student Details</button>
    </div>
</form>

</div>
  )
}
export default Edit;
