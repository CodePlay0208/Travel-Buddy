import React, { useState, useEffect } from 'react';
import './VerifyOTP.css'; // Import your CSS file for styling
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";


const VerifyOTP = ({email}) => {
const emailOfUser = localStorage.getItem("userEmailForPasswordReset")
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [otpSent, setOTPSent] = useState(false);

  const handleOTPChange = (e, index) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = e.target.value;
    setOTP(updatedOTP);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Join the OTP array to form the complete OTP string
    const otpValue = otp.join('');

    // Basic validation
    if (!otpValue || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
       
      // Perform OTP verification and password update
      const response = await fetch('http://localhost:4000/login/verify-reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp: otpValue, newPassword: password, userEmail: emailOfUser }),
      });

      const data = await response.json();
      if (data.success) {
        console.log("done")
        setSuccessMessage('Password updated successfully.');
        toast.success("Password Changed Successfully", {
            autoClose:1000,
        })

        setTimeout(() => {
            navigate("/login-page");
        }, 800);
        
       
        // Optionally redirect to login or another page
      } else {
        setError(data.message || 'Failed to update password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to update password');
    }
  };

  useEffect(() => {
  
    setTimeout(() => {
      setOTPSent(true);
    }, 1000); 
  }, []);

  return (
    <div className="verify-otp-container">
      <div className="verify-otp-form">
        <h2>Verify OTP and Reset Password</h2>
        <p>OTP sent to: <span className='emailforsendingotp'>{emailOfUser}</span></p>
      {otpSent && (
        <div className="otp-sent-message">
          OTP has been sent to your email.
        </div>
      )}
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <div className="otp-container">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleOTPChange(e, index)}
                className="otp-input"
              />
            ))}
          </div>

          <div className="form-group">
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">Reset Password</button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default VerifyOTP;
