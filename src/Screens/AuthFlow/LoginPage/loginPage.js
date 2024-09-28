import React, { useContext, useState, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import { UserLoginContext } from '../../../Utils/Context/LoggedInUserContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SVG } from '../../../assets'
import './loginPage.css'
import { connect } from 'react-redux'
import { setGoogleToken } from '../../../api-services/api-services'
import { login, loginWithGoogle } from '../../../actions/auth.action'
import InputComponent from '../InputComponent/InputComponent'
import Copyright from '../../../components/Copyright/Copyright'
// import { env } from '../../config/env'
// import { AuthApi } from '../../api-services/api-invokes'

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

const LoginPage = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({

    email: '',
    password: '',
    
  })
  const [rememberMe, setRememberMe] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const { setLoggedInUserValues } = useContext(UserLoginContext)
  const navigate = useNavigate()


  const googleSignIn = useGoogleLogin({
    clientId: '464876682696-pkm7moinvftntbnild9dq19378vu3ski.apps.googleusercontent.com',
    onSuccess: (response) => {
      console.log(response)
      const token = response.access_token
      setGoogleToken(token)

      // Send the token to your backend for verification and user data fetching
      fetch('http://localhost:4000/login/googleLogin', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((error) => {
              throw new Error(error)
            })
          }
          return response.json()
        })
        .then((data) => {
          console.log('the data is', data)
          if (data.success) {
            console.log('Login successful:', data)
            const previousURL = sessionStorage.getItem('redirectUrl') || '/'
            sessionStorage.removeItem('redirectUrl')
            // Handle successful login on frontend if needed
            console.log(previousURL)
            navigate(previousURL)
            setLoggedInUserValues(data.user)
          } else {
            console.error('Login failed:', data)
            setLoggedInUserValues({
              _id: '',
              username: '',
              emailId: '',
              profilePic: '',
            })
          }
        })
        .catch((error) => {
          console.error('Error during login:', error)
          setLoggedInUserValues({
            _id: '',
            username: '',
            emailId: '',
            profilePic: '',
          })
        })
    },
    onError: (error) => {
      console.error('Login failed:', error)
      setLoggedInUserValues({
        _id: '',
        username: '',
        emailId: '',
        profilePic: '',
      })
    },
  })

  const toggleRemeberMeCheckbox = () => {
    setRememberMe((prevState) => !prevState)
  }

  const checkValueIsValid = useCallback((value) => {
    if (value === '' || value === undefined || value === null) {
      return false
    }
    return true
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()

    const validEmail = checkValueIsValid(formData.email)
    const validPassword = checkValueIsValid(formData.password)

    if (!(validEmail && validPassword)) {
      toast.error('Email-id or Password is not valid!', {
        autoClose: 1500,
      })
      return
    }
    const isAuth = await login(formData.email, formData.password, rememberMe)

    if (isAuth) {
      navigate('/')
    }
  }


  return (
    <div className="Container">
      <div className="FormAndCopyrightContainer">
        <div className="FormAndTitleContainer">
          <div className="TitleContainer">Travmigoz</div>
          <div className="FormContainer">
            <div className="FormHeadingContainer">Login</div>
            <div className="FormSubHeadingText">Login to access your account</div>
            
              <form action="post" onSubmit={handleLogin} className="LoginFormInputsContainer">
                <InputComponent
                  label="Email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  user={formData}
                  setUser={setFormData}
                />

                <InputComponent
                  label="Password"
                  type={secureTextEntry ? 'password' : 'text'}
                  name="password"
                  id="password"
                  user={formData}
                  setUser={setFormData}
                  placeholder="Enter Your Password"
                  isPasswordField={true}
                  secureTextState={secureTextEntry}
                  setSecureTextState={setSecureTextEntry}
                />
                <div className="LoginRememberMeAndForgetPasswordContainer">
                  <div className="LoginRememberMeContainer">
                    <input className="LoginRememberMeCheckbox" type="checkbox" checked={rememberMe} onClick={toggleRemeberMeCheckbox} />

                    <div className="LoginRememberMeText">Remember Me</div>
                  </div>

                  <a href="/forget-password" className="LoginForgetPasswordLink">
                    <p className="LoginForgetPasswordText">Forgot Password</p>
                  </a>
                </div>
                <div className="LoginLoginButtonContainer">
                  <button type="submit" className="LoginLoginButton">
                    <p className="LoginLoginButtonText">Login</p>
                  </button>
                </div>
                <div className="LoginDontHaveAccountContainer">
                  <p className="LoginDontHavaAccountText">Don't have an account?</p>
                  <a href="/signup" className="LoginSignUpLink">
                    Sign up
                  </a>
                </div>
                <div className="DividerContainer">
                  <div className="Divider1" />
                  <div className="OrLoginWithText">Or login with</div>
                  <div className="Divider2" />
                </div>

                <div className="GoogleSignUpButton" role="button" onClick={googleSignIn}>
                  <p className="ContinueWithText">Continue with</p>
                  <img src={SVG.GoogleIcon} className="GoogleIcon" />
                </div>
              </form>
            
          </div>
        </div>
        <Copyright></Copyright>
      </div>
      <div className="LoginDesignContainer">
        <img src={SVG.AuthDesignSection} className="LoginAuthDesignImage" alt="AuthDesignImage" />
      </div>
      <ToastContainer />
    </div>
  )
}

export default connect(mapStateToProps, { login, loginWithGoogle })(memo(LoginPage))
