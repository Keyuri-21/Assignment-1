import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../../assets/Add.scss';
import { createUrl, getprofilepicUrl } from '../../redux/apiActions.js';


export const Add = () => {
  const students = {
    email: '',
    std: '',
    school: '',
    profilePic: '',
  };
  const [student, setStudent] = useState(students);
  const [profilePic, setProfilePic] = useState('');
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const imgHandler = (e) => {
    setStudent({ ...student, profilePic: e.target.files[0] });
  };

  const submitForm = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('profilePic', student.profilePic);
    const studentData = {
      email: student.email, std: student.std, school: student.school,
    };
    Object.entries(studentData).forEach(([key, value]) => {
      formData.append(key, value);
    });
  
    try {
      const response = await axios.post(createUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      toast.success(response.data.msg, { position: 'top-right' });
      navigate('/list');
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };
  

  useEffect(() => {
    axios.get(getprofilepicUrl)
      .then((res) => setProfilePic(res.data[0].profilePic))
      .catch((err) => console.log(err));
  }, []);

  //form for the adding the student
  return (
    <div className='container mt-5'>
      <Link to='/list' className='btn btn-primary'>
        Back
      </Link>
      <h3>Add New Student</h3>
      <form className='row g-3 mt-3 addDetails' onSubmit={submitForm}>
        <div className='col-md-6'>
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            type='email'
            required
            onChange={inputHandler}
            id='email'
            name='email'
            autoComplete='off'
            placeholder='Enter Your Email'
            className='form-control'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='std' className='form-label'>
            Standard:
          </label>
          <input
            type='text'
            required
            onChange={inputHandler}
            id='std'
            name='std'
            autoComplete='off'
            placeholder='Enter Your Standard'
            className='form-control'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='school' className='form-label'>
            School:
          </label>
          <input
            type='text'
            required
            onChange={inputHandler}
            id='school'
            name='school'
            autoComplete='off'
            placeholder='Enter Your School'
            className='form-control'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='profilePic' className='form-label'>
            Profile Picture:
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
        <div className='col-12 mt-3'>
          <button type='submit' className='btn btn-primary'>
            Add Student Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
