import React, { useContext, useState, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import { UserLoginContext } from '../../Utils/Context/LoggedInUserContext'
import { toast } from 'react-toastify'
import { SVG } from '../../assets'
import './loginPage.css'
import { setGoogleToken } from '../../api-services/api-services'

const LoginPage = () => {
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
  const [isLoading, setLoading] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRemeberMeChecked, setIsRemeberMeChecked] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  console.log('is remember me', isRemeberMeChecked)

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const toggleRemeberMeCheckbox = () => {
    setIsRemeberMeChecked((prevState) => !prevState)
  }

  const checkValueIsValid = useCallback((value) => {
    if (value == '' || value == undefined || value == null) {
      return false
    }
    return true
  }, [])

  const handleLogin = (event) => {
    event.preventDefault()

    var validEmail = checkValueIsValid(userEmail)
    var validPassword = checkValueIsValid(password)

    if (!(validEmail && validPassword)) {
      console.log('hello')
      toast.error('EmailId or Password Not Valid', {
        autoClose: 1500,
      })
      return
    }

    fetch('http://localhost:4000/login/', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: userEmail,
        password: password,
        rememberMe: isRemeberMeChecked,
      }),
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
        const previousURL = sessionStorage.getItem('redirectUrl') || '/'
        sessionStorage.removeItem('redirectUrl')
        // Handle successful login on frontend if needed
        console.log(previousURL)
        navigate(previousURL)
        setLoggedInUserValues(data.user)
      })
      .catch((err) => {
        console.log("Passwords don't match", err)
        setLoggedInUserValues({
          _id: '',
          username: '',
          emailId: '',
          profilePic: '',
        })
        toast.error('Invalid Password', {
          autoClose: 1500,
        })
        return
      })
  }

  const forgotPassWordHandler = () => {
    navigate('/enterEmail')
  }

  const PasswordEyeComponent = memo((props) => {
    const { secureTextState, setSecureTextState } = props

    const handlePasswordEyeIconClick = () => {
      setSecureTextState((prevState) => !prevState)
    }

    return (
      <div className="LoginPasswordEyeContainer" role="button" onClick={handlePasswordEyeIconClick}>
        {secureTextState ? (
          <img src={SVG.EyeIcon} className="LoginPasswordEyeIcon" />
        ) : (
          <img src={SVG.EyeSlashIcon} className="LoginPasswordEyeIcon" />
        )}
      </div>
    )
  })

  return (
    <div className="LoginContainer">
      <div className="LoginLoginFormAndCopyrightContainer">
        <div className="LoginFormAndTitleContainer">
          <div className="LoginTitleContainer">
            <p className="LoginTitleText">Travmigoz</p>
          </div>
          <div className="LoginFormContainer">
            <div className="LoginFormHeadingContainer">
              <p className="LoginFormHeadingText">Login</p>
            </div>
            <div className="LoginFormSubHeadingContainer">
              <p className="LoginFormSubHeadingText">Login to access your account</p>
            </div>
            <div className="LoginFormInputsContainer">
              <form action="post" onSubmit={handleLogin}>
                <div className="LoginEmailInputContainer">
                  <label className="LoginEmailText">Email</label>
                  <input
                    className="LoginEmailInput"
                    type="email"
                    name="email"
                    id="email"
                    value={userEmail}
                    onChange={(e) => handleEmailChange(e)}
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="LoginPasswordInputContainer">
                  <label className="LoginPasswordText">Password</label>
                  <input
                    className="LoginPasswordInput"
                    type={secureTextEntry ? 'password' : 'email'}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => handlePasswordChange(e)}
                    placeholder="Enter Your Password"
                    required
                  />
                  <PasswordEyeComponent secureTextState={secureTextEntry} setSecureTextState={setSecureTextEntry} />
                </div>
                <div className="LoginRememberMeAndForgetPasswordContainer">
                  <div className="LoginRememberMeContainer">
                    <input
                      className="LoginRememberMeCheckbox"
                      type="checkbox"
                      checked={isRemeberMeChecked}
                      onClick={toggleRemeberMeCheckbox}
                    />
                    {/* <span className='CustomCheckbox' /> */}
                    <label className="LoginRememberMeText">Remember Me</label>
                  </div>
                  <div className="LoginForgetPasswordContainer">
                    <a href="#" className="LoginForgetPasswordLink">
                      <p className="LoginForgetPasswordText">Forgot Password</p>
                    </a>
                  </div>
                </div>
                <div className="LoginLoginButtonContainer">
                  <button type="submit" className="LoginLoginButton">
                    <p className="LoginLoginButtonText">Login</p>
                  </button>
                </div>
                <div className="LoginDontHaveAccountContainer">
                  <p className="LoginDontHavaAccountText">Don't have an account?</p>
                  <a href="#" className="LoginSignUpLink">
                    <p className="LoginSignUpText">Sign up</p>
                  </a>
                </div>
                <div className="LoginDividerContainer">
                  <div className="LoginDivider1" />
                  <div className="LoginOrLoginWithContainer">
                    <p className="LoginOrLoginWithText">Or login with</p>
                  </div>
                  <div className="LoginDivider2" />
                </div>
                <div className="LoginMoreSignUpButtonContainer">
                  <div className="LoginGoogleSignUpButton" role="button" onClick={googleSignIn}>
                    <p className="LoginContinueWithText">Continue with</p>
                    <img src={SVG.GoogleIcon} className="LoginGoogleIcon" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="LoginCopyrightTextContainer">
          <p className="LoginCopyrightText">
            &copy; 2024 <span className="LoginTravmigozCopyrightText">Travmigoz</span>. All Rights Reserved
          </p>
        </div>
      </div>
      <div className="LoginDesignContainer">
        <img src={SVG.AuthDesignSection} className="LoginAuthDesignImage" alt="AuthDesignImage" />
      </div>
    </div>
  )
}

export default memo(LoginPage)
