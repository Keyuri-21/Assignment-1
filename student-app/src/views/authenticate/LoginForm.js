import React from 'react';

// login form component used in the login pages
const LoginForm = ({ setEmail, setPassword }) => {
  return (
    <>
      <div className="mb-2">
        <label htmlFor="email" className="form-label">
          <strong>Email</strong>
        </label>
        <input
          type="email"
          placeholder="Email"
          autoComplete="off"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="form-control rounded-0"
        />
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
          required
          onChange={(e) => setPassword(e.target.value)}
          className="form-control rounded-0"
        />
      </div>
    </>
  );
};

export default LoginForm;
