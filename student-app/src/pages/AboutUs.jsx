import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
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
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h1 className="display-4">About Us</h1>
        <p className="lead">
          Welcome to the Student Management System, where we strive to provide an
          efficient and user-friendly platform for managing student information.
        </p>
        <p>
          Our system is designed to streamline the process of student data management
          for educational institutions. Whether you are an administrator, teacher,
          student, or parent, our platform offers a secure and easy-to-use interface
          tailored to your needs.
        </p>
        <p>
          We believe in the power of education and aim to support educational
          institutions in their mission to provide quality learning experiences. Our
          Student Management System is built with modern technologies to ensure
          reliability, security, and flexibility.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
