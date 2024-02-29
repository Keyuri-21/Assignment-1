import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../../assets/Student.css';
import { API_BASE_URL, DELETE_ENDPOINT, SEARCH_ENDPOINT, getallUrl } from '../../Constants';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (e) => {
    setSearchQuery(e.target.value);

    await axios
      .get(`${API_BASE_URL}${SEARCH_ENDPOINT}/${e.target.value}`)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(getallUrl);
      setStudents(response.data);
    };

    fetchData();
  }, []);

  const deleteStudent = async (studentId) => {
    await axios
      .delete(`${API_BASE_URL}${DELETE_ENDPOINT}/${studentId}`)
      .then((response) => {
        setStudents((prevStudent) =>
          prevStudent.filter((student) => student._id !== studentId)
        );
        toast.success(response.data.msg, { position: 'top-right' });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //listing the students
  return (
    <div className='container mt-5'>
      <Link to='/add' className='btn btn-primary'>
        Add Student
      </Link>

      <input
        style={{
          width: '300px',
          margin: '10px',
          border: '1px solid black',
          padding: '5px',
          backgroundColor: 'white',
          borderRadius: '5px',
        }}
        type='text'
        placeholder='Search by Email...'
        value={searchQuery}
        onChange={handleSearch}
      />
      <table className='table mt-3'>
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
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={`${API_BASE_URL}/${student.profilePic}`}
                  alt='Profile'
                  width={50}
                  height={50}
                />
              </td>
              <td>{student.email} </td>
              <td>{student.std}</td>
              <td>{student.school}</td>
              <td className='actionButtons' style={{ textAlign: 'center' }}>
                <button
                  onClick={() => deleteStudent(student._id)}
                  className='btn btn-danger btn-sm'
                >
                  Delete
                </button>
                <Link
                  to={`/update/${student._id}`}
                  style={{ marginLeft: '10px' }}
                  className='btn btn-primary btn-sm'
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
