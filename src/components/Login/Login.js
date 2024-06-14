import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailPhoneChange = (event) => {
    setEmailPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleSignUp = () => {
    // Handle sign up logic here
  };

  return (
    <div className="container"> {/* add a container div */}
      <div className="login">
        <h1>Login</h1>

        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email/Phone"
              value={emailPhone}
              onChange={handleEmailPhoneChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={handleLogin}
          >
            Login
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;