import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    // Name validation
    if (!name.trim()) {
      formErrors.name = 'Name is required';
    }

    // Email validation
    if (!email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      formErrors.email = 'Enter a valid email address';
    }

    // Password validation
    if (!password || password.trim().length === 0) {
      formErrors.password = 'Password is required';
    } else if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation
    if (!confirm || confirm.trim().length === 0) {
      formErrors.confirm = 'Confirm password is required';
    } else if (password !== confirm) {
      formErrors.confirm = 'Passwords do not match';
    }

    // Set errors state to display validation messages
    setErrors(formErrors);

    // Display errors and 
    if (Object.keys(formErrors).length > 0) {
      return;
    }

    // If validation passes, make the API call
    axios.post('http://localhost:7000/signup', {
        name: name,
        email: email,
        password: password,
        confirm: confirm,
      })
      .then((result) => {
        console.log(result);

        // Redirect to login page 
        window.location.href = '/login';
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: '#b5e4e763' }}>
      <div className='bg-white p-3 rounded w-50 w-md-75 w-lg-60'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='name'>
              <strong>Name</strong>
            </label>
            <input
              type='text'
              placeholder='Enter Name'
              autoComplete='off'
              name='name'
              onChange={(e) => setName(e.target.value)}
              className='form-control rounded-0'
            />
            {errors.name && <div className='text-danger'>{errors.name}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              className='form-control rounded-0'
            />
            {errors.email && <div className='text-danger'>{errors.email}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              autoComplete='off'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              className='form-control rounded-0'
            />
            {errors.password && <div className='text-danger'>{errors.password}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='confirm'>
              <strong> Confirm Password:</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password to confirm'
              autoComplete='off'
              name='confirm'
              onChange={(e) => setConfirm(e.target.value)}
              className='form-control rounded-0'
            />
            {errors.confirm && <div className='text-danger'>{errors.confirm}</div>}
          </div>

          <button type='submit' className='btn btn-success w-auto rounded-0 align-content-center'>
            Sign Up
          </button>
          <p>Already Have an Account</p>
          <Link
            to={'/Login'}
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
