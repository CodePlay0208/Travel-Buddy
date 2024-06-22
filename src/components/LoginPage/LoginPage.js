import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{
    
  },[]);

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
  <div className="loginPageContainer">
      <section className="loginCardContainer">
          <div className="titleForLoginPage">
              <h2 className="heading1ForLoginCard">One Account</h2>
              <h2 className="heading2ForLoginCard ">Many Trips</h2>
          </div>
          <form action="post">
              <section className="inputSection">
                  <input className="login-page-input" type="email" name="email" id="email" placeholder="E-mail address or phone number"/>
                  <input className="login-page-input" type="password" name="password" id="password" placeholder="Password"/>
                  <div className="additionalChecksInLoginPage">
                      <div >
                          <input type="checkbox" name="rememberMe" id="rememberMe"/>
                          <label htmlFor="rememberMe">Remember me</label>
                      </div>
                      <div >
                          <a className="linkInLoginPage" href="">
                              <span>Forgot password?</span>
                          </a>
                      </div>
                  </div>
              </section>
  
              <section className="buttonSectionInLoginPage">
                  <button className="signInButtonInLoginPage" type="submit">Sign in</button>
                  <button className="signInUsingGoogleButtonInLoginPage" type="submit">
                      <svg className="svgInLoginPage" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                              <path
                                  d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
                                  fill="#ffffff"></path>
                              <path
                                  d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z"
                                  fill="#ffffff"></path>
                              <path
                                  d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z"
                                  fill="#ffffff"></path>
                              <path
                                  d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z"
                                  fill="#ffffff"></path>
                          </g>
                      </svg>Sign in with Google</button>
              </section>
  
              <section className="not-member">
                  <span> Not a member yet? <a className="linkInLoginPage" href="">Sign up</a></span>
              </section>
          </form>
      </section>
  </div>
  );
};

export default LoginPage;