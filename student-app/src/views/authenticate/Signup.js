import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { signupUrl } from '../../redux/apiActions.js';
import toast from 'react-hot-toast';

const Signup = () => {
  const { register, handleSubmit, setError, formState: { errors, isValid }, getValues } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Make the API call
      const result = await axios.post(signupUrl, data);
      toast.success('Signup successfully!', { position: 'top-right' });
      // Redirect to admin login page
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        // If the server sends a specific error message
        toast.error(`Signup failed: ${error.response.data.message}`, { position: 'top-right' });
      } else {
        // If there's a general error or no specific error message from the server
        toast.error('Signup failed. Please try again later.', { position: 'top-right' });
      }
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: '#b5e4e763' }}>
      <div className='bg-white p-3 rounded w-50 w-md-75 w-lg-60'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              autoComplete='off'
              {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' } })}
              className='form-control rounded-0'
            />
            {errors.email && <div className='text-danger'>{errors.email.message}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              autoComplete='off'
              {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
              className='form-control rounded-0'
            />
            {errors.password && <div className='text-danger'>{errors.password.message}</div>}
          </div>
          <button type='submit' className='btn btn-success w-auto rounded-0 align-content-center' disabled={!isValid}>
            Sign Up
          </button>
          <p>Already Have an Account</p>
          <Link
            to={'/login'}
            className='btn btn-default border w-auto bg-light rounded-0 text-decoration-none'
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
