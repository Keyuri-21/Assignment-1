import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Student.css";
import axios from "axios";
import toast from "react-hot-toast";

const Student = () =>{

    const [students, setStudents] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
         const response = await axios.get("http://localhost:8000/api/getAll");
         setStudents(response.data);
        }

        fetchData();
    }, [])
    const deleteStudent = async(studentId) => {
        await axios.delete(`http://localhost:8000/api/delete/${studentId}`)
        .then((response)=>{
            setStudents((prevStudent)=> prevStudent.filter((student)=> student._id !== studentId))
            toast.success(response.data.msg, {position:"top-right"});
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    return(
        <div className="studentTable"> 
        <Link to ={"/add"} className="addButton">  Add Student</Link>
        <table border={1} cellPadding={10} cellSpacing={0} >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Student Name</th>
                    <th>Student Surname</th>
                    <th>Standard</th>
                    <th>Roll Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((student, index)=>{
                        return(
                <tr key={student._id}>
                    <td>{index + 1}</td>
                    <td>{student.Name} </td>
                    <td>{student.Surname}</td>
                    <td>{student.Std}</td>
                    <td>{student.Rollno}</td>
                    <td className="actionButtons"> 
                        <button onClick={( )=> deleteStudent(student._id)}><i className="fa-solid fa-trash"></i></button>
                        <Link to={`/edit/`+student._id} style={{marginLeft:"10px"} }><i class="fa-solid fa-pen-to-square"></i></Link>
                    </td>
                </tr>
                )
            })
        }
                
            </tbody>
        </table>
        </div>
    )
}
export default Student;