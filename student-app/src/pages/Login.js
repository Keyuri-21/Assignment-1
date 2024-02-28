import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form'; // Import useForm hook
import LoginForm from '../components/LoginForm.js';
import { loginUrl } from '../Constants.js';
import toast from 'react-hot-toast';

const Login = () => {
  const [errors, setErrors] = useState({});
  const { register, handleSubmit, formState: { errors: formErrors } } = useForm(); // Destructure formState.errors from useForm
  const navigate = useNavigate();

  const onSubmit = async (student) => {
    try {
          const result = await axios.post(loginUrl , {
            email:student.email,
            password:student.password
          });
    
          if (result.data === 'Success') {
           toast.success('User login successfully!',{position:"top-right"});
            navigate(`/StudentProfile/${student.email}`);
          }
        } catch (err) {
          if (err.response && err.response.data) {
            setErrors(err.response.data);
          }
        }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#b5e4e763' }}>
      <div className="bg-white p-4 rounded w-75 w-md-50 w-lg-25">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Email"
              autoComplete="off"
              name="email"
              {...register('email', { required: 'Email is required' })}
              className="form-control rounded-0"
            />
            {formErrors.email && <div className="text-danger">{formErrors.email.message}</div>}
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              name="password"
              {...register('password', { required: 'Password is required' })}
              className="form-control rounded-0"
            />
            {formErrors.password && <div className="text-danger">{formErrors.password.message}</div>}
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success rounded-0">
              Login
            </button>
          </div>

          <p className="mt-3 mb-2 text-center text-danger">
            {errors.general && <span>{errors.general}</span>}
          </p>

          <p className="mt-3 mb-2 text-center">Don't have an account?</p>

          <Link
            to="/signup"
            className="btn btn-light rounded-0 text-dark w-100 text-decoration-none"
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
