import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h2>Welcome to Admin Dashboard</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Link
          to="/list"
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 20px',
            fontSize: '16px',
            textDecoration: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            margin: '10px',
          }}
        >
          List of Students
        </Link>
        <Link
          to="/parentList"
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 20px',
            fontSize: '16px',
            textDecoration: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            margin: '10px',
          }}
        >
          List of Parents
        </Link>
      </div>
    </div>
  );
};

export default Admin;
