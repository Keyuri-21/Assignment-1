import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Parent = () => {

    const [parents, setParents] = useState([]);
    const [searchQuery ,setSearchQuery] = useState("");


    const handleSearch = async (e) =>{
        setSearchQuery(e.target.value);

        await axios.get(`http://localhost:7000/api/searchParent/${e.target.value}`)
        .then((response) => {
            setParents(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

    }

   
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:7000/api/getAllParent");
            setParents(response.data);
        }

        fetchData();
    }, [])
    const deleteParent = async (parentId) => {
        await axios.delete(`http://localhost:7000/api/deleteParent/${parentId}`)
            .then((response) => {
                setParents((prevParent) => prevParent.filter((parent) => parent._id !== parentId))
                toast.success(response.data.msg, { position: "top-right" });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="parentTable">
            <Link to={"/AddParent"} className="addButton">  Add Parent</Link>

            <input
            style={{width:"300px",margin:"10px",border:"1px solid black" , padding:"5px" ,backgroundColor:"white",borderRadius:"5px"}}
                type="text"
                placeholder="Search by First Name..."
                value={searchQuery}
                onChange={handleSearch}
            />
            <table border={1} cellPadding={10} cellSpacing={0} >
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Parent Of</th>
                        <th>Relation</th>
                        <th>Contact No</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parents.map((parent, index) => {
                            
                            return (
                                <tr key={parent._id}>
                                    <td>{index + 1}</td>
                                    <td>{parent.fname} </td>
                                    <td>{parent.lname}</td>
                                    <td>{parent.parentOf}</td>
                                    <td>{parent.relation}</td>
                                    <td>{parent.phoneNo}</td>
                                    <td className="actionButtons" style={{ textAlign: "center" ,display:"flex" }}>
                                        <button onClick={() => deleteParent(parent._id)}><i className="fa-solid fa-trash"></i></button>
                                        <Link to={`/updateParent/` + parent._id} style={{ marginLeft: "10px" }}><i className="fa-solid fa-pen-to-square"></i></Link>
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
export default Parent;