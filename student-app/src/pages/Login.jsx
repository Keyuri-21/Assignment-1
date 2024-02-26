import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/LoginForm';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:7000/login', {
        email,
        password,
      });
      console.log(result);

      if (result.data === 'Success') {
        navigate(`/StudentProfile/${email}`);
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
        <form onSubmit={handleSubmit}>
          <LoginForm setEmail={setEmail} setPassword={setPassword} errors={errors} />

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
