// EnterEmail.js
import React, { useState } from "react";
import "./EnterEmail.css";
import { useNavigate } from "react-router-dom";

const EnterEmail = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send an OTP or reset link to the provided email
    // Typically, you would send a request to your backend to handle this process

    fetch("http://localhost:4000/login/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("the code came here");
        localStorage.setItem("userEmailForPasswordReset", email);
        navigate("/verifyOTP");
      })
      .catch((err) => {
        console.log("cant send OTP", err);
      })
      
    // For demo purposes, navigate to a success page
   // Replace with your success page route
  };

  return (
    <div className="enter-email-container">
      <div className="email-form">
        <h2 className="form-title">Enter Your Email</h2>
        <form onSubmit={handleSubmit} className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
            placeholder="Enter your email address"
          />
          <button type="submit" className="btn btn-primary">
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnterEmail;
