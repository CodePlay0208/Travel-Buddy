// SignUp.js

import React, { useState } from "react";
import "./SignUp.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';

function SignUp() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userEmail: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function checkValueIsValid(value) {
    if (value == "" || value == undefined || value == null) {
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here (e.g., check if passwords match)

    var validEmail = checkValueIsValid(formData.userEmail);
    var validPassword = checkValueIsValid(formData.password);

    if (!(validEmail && validPassword)) {
      console.log("hello");
      toast.error("EmailId or Password Not Valid", {
        autoClose: 1500,
      });
      return;
    }

    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords Don't match", {
        autoClose: 1500,
      });
      return;
    }

    console.log(formData);

    console.log("came here");

    fetch("http://localhost:4000/login/signUp", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: formData.userEmail,
        password: formData.password,
      }),
    })
      .then((response) => {
        if(!response.ok){
          return response.json().then(error => {
            throw new Error(error);
          });
        }
       return response.json()})
      .then((data) => {
        if(!data.success){
            toast.error("User Already Exist", {
                autoClose: 1000,
              });
              return;
        }
        const previousURL = sessionStorage.getItem("redirectUrl") || "/";
        sessionStorage.removeItem("redirectUrl");
        // Handle successful login on frontend if needed
        console.log(previousURL);
        toast.success("User Signed In Successfully", {
          autoClose: 1000,
        });

        setTimeout(() => {
          navigate(previousURL);
        }, 800);
      })
      .catch((err) => {
        console.log("cant send OTP", err);
        toast.error("User Already Exist", {
          autoClose: 1500,
        });
        return;
      });

    console.log(formData);
  };

  return (
    <div className="containerInSignUpPage">
      <form className="signup-formInSignUpPage" onSubmit={handleSubmit}>
        <h2 className="titleInSignUpPage">Sign Up</h2>
        <div className="form-groupInSignUpPage">
          <label htmlFor="emailInSignUpPage">Email</label>
          <input
            type="email"
            id="emailInSignUpPage"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            className="input-fieldInSignUpPage"
            required
          />
        </div>
        <div className="form-groupInSignUpPage">
          <label htmlFor="passwordInSignUpPage">Password</label>
          <input
            type="password"
            id="passwordInSignUpPage"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-fieldInSignUpPage"
            required
          />
        </div>
        <div className="form-groupInSignUpPage">
          <label htmlFor="confirmPasswordInSignUpPage">Confirm Password</label>
          <input
            type="password"
            id="confirmPasswordInSignUpPage"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input-fieldInSignUpPage"
            required
          />
        </div>
        <button type="submit" className="submit-btnInSignUpPage">
          Sign Up
        </button>
        <p className="login-linkInSignUpPage">
          Already have an account?{" "}
          <a href="/login-page" className="login-linkInSignUpPage">
            Log in
          </a>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
}


export default memo(SignUpComponent)

