import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL, PUBLIC_ENDPOINT } from '../Constants';

const StudentProfile = () => {
  const { email } = useParams();
  const [student, setStudent] = useState({
    email: '',
    std: '',
    school: '',
    profilePic: '',
  });

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/api/getByEmail?email=${email}`);
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };
  
    fetchStudentData();
  }, [email]);
  
// displays the student profile
  return (
    <div className="container mt-5">
      <div className="profile card p-4">
        <h2 className="mb-4">Profile Page</h2>
        <div className="mb-3">
          <strong>Email:</strong> {student.email}
        </div>
        <div className="mb-3">
          <strong>Standard:</strong> {student.std}
        </div>
        <div className="mb-3">
          <strong>School:</strong> {student.school}
        </div>
        <div>
          <strong>Profile Picture:</strong>
          <img
            src={`${API_BASE_URL}${PUBLIC_ENDPOINT}/${student.profilePic}`}
            alt="Profile"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
