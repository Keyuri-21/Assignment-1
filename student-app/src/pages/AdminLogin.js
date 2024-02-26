import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/LoginForm';

const AdminLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post('http://localhost:7000/admin/login', {
                email,
                password,
            });

            console.log(result);

            if (result.data === "Success") {
                window.location.href = '/admin';
            } else {
                // Handle unsuccessful login (e.g., show an error message)
                console.error("Login unsuccessful");
            }
        } catch (error) {
            // Handle API call errors (e.g., network issues, server errors)
            console.error("Error during login:", error.message);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100' style={{ backgroundColor: '#b5e4e763' }}>
            <div className='bg-white p-4 rounded w-75 w-md-50 w-lg-25'>
                <h2 className='text-center'>Login For Admins</h2>
                <form onSubmit={handleSubmit}>
                    <LoginForm setEmail={setEmail} setPassword={setPassword} />
                    <button type='submit' className='btn btn-success w-100 mt-3'>
                        Login
                    </button>
                    <p className='text-center mt-2'>Don't have an account?</p>
                    <Link
                        to={'/signup'}
                        className='btn btn-default border w-100 bg-light mt-2 text-decoration-none'
                    >
                        Sign Up
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
