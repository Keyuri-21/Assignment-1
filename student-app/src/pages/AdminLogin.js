import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/LoginForm.js';
import { adminUrl } from '../utils/Constants.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
   
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post(adminUrl, {
                email,
                password,
            });

            if (result.data === "Success") {
                toast.success('Admin login successfully!', { position: 'top-right' });
                navigate('/admin');
            } else {
                // Handle unsuccessful login 
                console.error("Login unsuccessful");
            }
        } catch (error) {
            // Handle API call errors 
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
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
