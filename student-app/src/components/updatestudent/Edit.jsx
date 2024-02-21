import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import "../addstudent/Add.css";
import toast from 'react-hot-toast';

 const Edit = () => {

    const {id} = useParams();
    const [student, setStudent] = useState({
        Name: "",
        Surname: "",
        Std: "",
        Rollno: ""
    });
    const navigate = useNavigate();

    const inputChangeHandler = (e) =>{
        const {name, value} = e.target;
        setStudent({...student, [name]:value});   
        console.log(student);
    }

    useEffect(()=>{
       axios.get(`http://localhost:8000/api/getOne/${id}`)
       .then((response)=>{
        setStudent(response.data);
        console.log(response.data);
       })
       .catch((error)=>{
        console.log(error);   
       });
    },[id]);

    const submitForm = async(e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/${id}`, student)
        .then((response)=>{
            toast.success(response.data.msg, {position:"top-right"});
            navigate("/")
        })
        .catch(error => console.log(error))
    }
  return (
    <div className='addStudent'>
    <Link to={"/"}>Back</Link>
    <h3>Update Student Details</h3>
<form className='adddetails' onSubmit={submitForm}>
    <div className="inputGroup">
        <label htmlFor='Name'>Name:</label>
        <input type='text' value={student.Name} onChange={inputChangeHandler} name="Name" autoComplete='off'/>
        {console.log(student)}
    </div>
    <div className='inputGroup'>
        <label htmlFor='surname'>Surname:</label>
        <input type='text' value={student.Surname} onChange={inputChangeHandler} name="Surname" autoComplete='off'/>
    </div>
    <div className="inputGroup">
        <label htmlFor='Std'>Standard:</label>
        <input type='number' value={student.Std} onChange={inputChangeHandler} name="Std" autoComplete='off'/>
    </div>
    <div className="inputGroup">
        <label htmlFor='Name'>Roll Number:</label>
        <input type='number' value={student.Rollno} onChange={inputChangeHandler} name="Rollno" autoComplete='off' />
    </div>
    <div className="inputGroup">
        <button type='submit'>Update Student Details</button>
    </div>
</form>

</div>
  )
}
export default Edit;
