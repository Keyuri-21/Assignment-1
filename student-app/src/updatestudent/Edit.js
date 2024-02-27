import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import '../addstudent/Add.css';
import { API_BASE_URL, GETONE_ENDPOINT, UPDATE_ENDPOINT } from '../utils/Constants';

const Edit = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    email: '',
    std: '',
    school: '',
    profilePic: '',
  });
  const [profilePic, setProfilePic] = useState();
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const imgHandler = (e) => {
    setStudent({ ...student, profilePic: e.target.files[0] });
  };

  useEffect(() => {
    axios.get(`${API_BASE_URL}${GETONE_ENDPOINT}/${id}`)
      .then((response) => {
        setStudent(response.data);
        const fetchStudentData = response.data.studentExist;
        setStudent({
          email: fetchStudentData.email,
          std: fetchStudentData.std,
          school: fetchStudentData.school,
          profilePic: fetchStudentData.profilePic,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', student.email);
    formData.append('std', student.std);
    formData.append('school', student.school);
    formData.append('profilePic', student.profilePic);

    try {
      const response = await axios.put(`${API_BASE_URL}${UPDATE_ENDPOINT}/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(response.data.msg, { position: 'top-right' });
      navigate('/list'); 
    } catch (error) {
      console.error('Error updating student details:', error);
      toast.error('Failed to update student details', { position: 'top-right' });
    }
  };

  return (
    <div className='container mt-5'>
      <Link to={'/list'} className='btn btn-primary'>
        Back
      </Link>
      <h3 className='mt-3'>Update Student Details</h3>
      <form className='row g-3 mt-3' onSubmit={submitForm}>
        <div className='col-md-6'>
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            type='email'
            value={student.email}
            onChange={inputChangeHandler}
            name='email'
            autoComplete='off'
            className='form-control'
            placeholder='Enter Email'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='std' className='form-label'>
            Standard:
          </label>
          <input
            type='text'
            value={student.std}
            onChange={inputChangeHandler}
            name='std'
            autoComplete='off'
            className='form-control'
            placeholder='Enter Standard'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='school' className='form-label'>
            School:
          </label>
          <input
            type='text'
            value={student.school}
            onChange={inputChangeHandler}
            name='school'
            autoComplete='off'
            className='form-control'
            placeholder='Enter School'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='profilePic' className='form-label'>
            Profile Picture:
          </label>
          <input
            type='file'
            autoComplete='off'
            name='profilePic'
            onChange={imgHandler}
            className='form-control rounded-0'
          />
        </div>
        <div className='col-12 mt-3'>
          <button type='submit' className='btn btn-primary'>
            Update Student Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
