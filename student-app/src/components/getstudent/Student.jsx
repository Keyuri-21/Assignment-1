import React from "react";
import { Link } from "react-router-dom";
import "./Student.css";

const Student = () =>{
    return(
        <div className="studentTable"> 
        <Link to ={"/add"}> Add Student</Link>
        <table border={1} cellPadding={20} cellSpacing={2} >
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
                <tr>
                    <td>1.</td>
                    <td>Keyuri</td>
                    <td>Patel</td>
                    <td>10th</td>
                    <td>15</td>
                    <td>
                        <button>Delete</button>
                        <Link to={'/edit'}>Edit</Link>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}
export default Student;