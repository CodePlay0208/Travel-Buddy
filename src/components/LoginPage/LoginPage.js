import React, { useContext, useEffect, useState } from 'react';
import './LoginPage.css';
import { json, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { UserLoginContext } from '../../Utils/Context/UserLoginContext';
import { toast, ToastContainer } from 'react-toastify';



const LoginPage = () => {
    const {setLoggedInUserValues} = useContext(UserLoginContext);
    const navigate = useNavigate();
    
    const googleSignIn = useGoogleLogin({
        clientId: '464876682696-pkm7moinvftntbnild9dq19378vu3ski.apps.googleusercontent.com',
        onSuccess: (response) => {
            console.log(response);
            const token = response.access_token;
        
            // Send the token to your backend for verification and user data fetching
            fetch('http://localhost:4000/login/googleLogin', {
              method: 'POST',
              credentials: "include",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ token }),
            })
            .then((response) => {
              if(!response.ok){
                return response.json().then(error => {
                  throw new Error(error);
                });
              }
              return response.json()})
            .then(data => {
                console.log("the data is", data);
              if (data.success) {
                console.log('Login successful:', data);
                const previousURL = sessionStorage.getItem("redirectUrl") || "/";
                sessionStorage.removeItem("redirectUrl");
                // Handle successful login on frontend if needed
                console.log(previousURL);
                navigate(previousURL)
                setLoggedInUserValues(data.user);
              } else {
                console.error('Login failed:', data);
                setLoggedInUserValues({
                  _id:"",
                  username:"",
                  emailId:"",
                  profilePic:""
                })
              }
            })
            .catch(error => {
              console.error('Error during login:', error);
              setLoggedInUserValues({
                _id:"",
                username:"",
                emailId:"",
                profilePic:""
              })

            });
          },
          onError: (error) => {
            console.error('Login failed:', error);
            setLoggedInUserValues({
              _id:"",
              username:"",
              emailId:"",
              profilePic:""
            })

          },
      });




  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemeberMeChecked, setIsRemeberMeChecked] = useState(false);
  console.log("is remember me", isRemeberMeChecked);

  function checkValueIsValid(value){
    if(value == "" || value == undefined || value == null){
        return false;
    }
    return true;
  }


  const handleLogin = (event) => {
    event.preventDefault();

    var validEmail = checkValueIsValid(userEmail);
    var validPassword = checkValueIsValid(password);

    if(!(validEmail && validPassword)){
        console.log("hello")
        toast.error("EmailId or Password Not Valid", {
            autoClose: 1500,
          });
          return ;
    }

    fetch("http://localhost:4000/login/", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: userEmail,
          password: password,
          rememberMe: isRemeberMeChecked
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
          
            const previousURL = sessionStorage.getItem("redirectUrl") || "/";
                sessionStorage.removeItem("redirectUrl");
                // Handle successful login on frontend if needed
                console.log(previousURL);
                navigate(previousURL)
                setLoggedInUserValues(data.user);
        })
        .catch((err) => {
          console.log("Passwords don't match", err);
          setLoggedInUserValues({
            _id:"",
            username:"",
            emailId:"",
            profilePic:""
          })
          toast.error("Invalid Password", {
            autoClose: 1500,
          });
          return ;
        })
  };


  const forgotPassWordHandler = () =>{
   navigate("/enterEmail")
  }


  return (
  <div className="loginPageContainer">
      <section className="loginCardContainer">
          <div className="titleForLoginPage">
              <h2 className="heading1ForLoginCard">One Account</h2>
              <h2 className="heading2ForLoginCard ">Many Trips</h2>
          </div>
          <form action="post" onSubmit={handleLogin}>
              <section className="inputSection">
                  <input className="login-page-input" type="email" name="email" id="email"
                   placeholder="E-mail address" value = {userEmail} onChange={(event)=>setUserEmail(event.target.value)}/>
                  <input className="login-page-input" type="password" name="password" id="password"
                   placeholder="Password" value = {password} onChange={(event)=>setPassword(event.target.value)}/>
                  <div className="additionalChecksInLoginPage">
                      <div className='rememberMeDiv'>
                          <input type="checkbox" name="rememberMe" id="rememberMe" value={isRemeberMeChecked} 
                          onChange={()=>setIsRemeberMeChecked(currentValue=> !currentValue)} />
                          <label htmlFor="rememberMe" className='text' >Remember me</label>
                      </div>
                      <div >
                          <button className="linkInLoginPage" type="btn" onClick={forgotPassWordHandler}>
                              <span>Forgot password?</span>
                          </button>
                      </div>
                  </div>
              </section>
  
              <section className="buttonSectionInLoginPage">
                  <button className="signInButtonInLoginPage" type="submit">Log in</button>
                  <button className="signInUsingGoogleButtonInLoginPage" type="button" onClick={googleSignIn}>
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
                      </svg>Continue with Google</button>
              </section>
  
              <section className="not-member">
                  <span> Not a member yet? <a className="linkInLoginPage" href="/signUp">Sign up</a></span>
              </section>
          </form>
      </section>
      <ToastContainer />
  </div>
  );
};


export default LoginPage;