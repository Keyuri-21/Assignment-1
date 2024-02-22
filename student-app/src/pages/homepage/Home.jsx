// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Student Management System</h1>
      <p>Manage your students with ease!</p>
      
      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default HomePage;
