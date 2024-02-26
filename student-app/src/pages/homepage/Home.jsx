import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Student Management System</Link>
          <div className="navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signup">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/login">Login as Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h1 className="display-4">Welcome to the Student Management System</h1>
        <p className="lead">Manage your students with ease!</p>
      </div>
    </div>
  );
};

export default Home;
