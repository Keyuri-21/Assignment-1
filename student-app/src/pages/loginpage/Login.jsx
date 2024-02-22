// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/Login', {
        email,
        password,
      })
      .then(result => {console.log(result)
        if(result.data === "Success"){
          window.location.href = '/list';
        }
       
      })
      .catch(err => console.log(err))
    }

 

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          </div>
          {error && <div className='text-danger mb-3'>{error}</div>}
          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Login
          </button>
          <p>Don't have an account?</p>
          <Link
            to={'/signup'}
            className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
