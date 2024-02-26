import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Student.css";
import axios from "axios";
import toast from "react-hot-toast";

const Student = () => {

    const [students, setStudents] = useState([]);
    const [searchQuery ,setSearchQuery] = useState("");


    const handleSearch = async (e) =>{
        setSearchQuery(e.target.value);

        await axios.get(`http://localhost:7000/api/search/${e.target.value}`)
        .then((response) => {
            setStudents(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

    }

   
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:7000/api/getAll");
            setStudents(response.data);
        }

        fetchData();
    }, [])
    const deleteStudent = async (studentId) => {
        await axios.delete(`http://localhost:7000/api/delete/${studentId}`)
            .then((response) => {
                setStudents((prevStudent) => prevStudent.filter((student) => student._id !== studentId))
                toast.success(response.data.msg, { position: "top-right" });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="studentTable">
            <Link to={"/add"} className="addButton">  Add Student</Link>

            <input
            style={{width:"300px",margin:"10px",border:"1px solid black" , padding:"5px" ,backgroundColor:"white",borderRadius:"5px"}}
                type="text"
                placeholder="Search by Email..."
                value={searchQuery}
                onChange={handleSearch}
            />
            <table border={1} cellPadding={10} cellSpacing={0} >
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>ProfilePic</th>
                        <th>Student Email</th>
                        <th>Standard</th>
                        <th>School</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => {
                            
                            return (
                                <tr key={student._id}>
                                    <td>{index + 1}</td>
                                    <td><img src={'http://localhost:7000/'+student.profilePic} width={50} height={50}/></td>
                                    <td>{student.email} </td>
                                    <td>{student.std}</td>
                                    <td>{student.school}</td>
                                    <td className="actionButtons" style={{ textAlign: "center" ,display:"flex" }}>
                                        <button onClick={() => deleteStudent(student._id)}><i className="fa-solid fa-trash"></i></button>
                                        <Link to={`/edit/` + student._id} style={{ marginLeft: "10px" }}><i className="fa-solid fa-pen-to-square"></i></Link>
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