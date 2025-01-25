import React, { useContext, useState, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { images } from '../../../assets'
import { connect } from 'react-redux'
import { setGoogleToken } from '../../../services/api-services/api-services'
import { login, loginWithGoogle, loadUser } from '../../../actions/auth.action'
import InputComponent from '../../../components/InputComponent/InputComponent'
import Copyright from '../../../components/Copyright/Copyright'
import {
  Container,
  FormAndCopyrightContainer,
  FormAndTitleContainer,
  TitleContainer,
  FormContainer,
  FormHeadingContainer,
  FormSubHeadingText,
  DividerContainer,
  DesignContainer,
  AuthDesignImage,
  ContinueWithText,
  ImageGoogleIcon,
  ButtonAlt,
  MainButtonAuth,
} from '../AuthFlow.styled'
import { LoginSignUpLink, InputFieldsContainer, Divider, LoginButtonsContainer } from './loginPage.styled'
import { UserLoginContext } from '../../../utils/Context/LoggedInUserContext'
import { css } from 'styled-components'

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
})

const LoginPage = (props) => {
  const { login, isAuthenticated } = props
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { setLoggedInUserValues } = useContext(UserLoginContext)
  const navigate = useNavigate()

  const googleSignIn = useGoogleLogin({
    clientId: '464876682696-pkm7moinvftntbnild9dq19378vu3ski.apps.googleusercontent.com',
    onSuccess: (response) => {
      console.log(response)
      const token = response.access_token
      setGoogleToken(token)

      // Send the token to your backend for verification and user data fetching
      fetch('https://api.travmigoz.com/login/googleLogin', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'googletoken': `Bearer ${token}`,
        },
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
          localStorage.setItem('token', data.token)
          loadUser()
          navigate('/')
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

  const checkValueIsValid = useCallback((value) => {
    if (value === '' || value === undefined || value === null) {
      return false
    }
    return true
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()

    const validEmail = checkValueIsValid(formData.email)

    if (!(validEmail)) {
      toast.error('Email-id is not valid!', {
        autoClose: 1500,
      })
      return
    }
    const isAuth = await login(formData.email)

    if (isAuth) {
      navigate('/verify-otp')
    }
  }

  return (
    <Container>
      <FormAndCopyrightContainer>
        <FormAndTitleContainer>
          <TitleContainer
            onClick={() => {
              navigate('/')
            }}
          >
            Travmigoz
          </TitleContainer>
          <FormContainer>
            <FormHeadingContainer>Log into Your Account</FormHeadingContainer>
            <FormSubHeadingText>
              New at Travmigoz?
              <LoginSignUpLink
                onClick={() => {
                  navigate('/signup')
                }}
              >
                {' '}
                Sign up
              </LoginSignUpLink>
            </FormSubHeadingText>

            <form onSubmit={handleLogin}>
              <InputFieldsContainer>
                <InputComponent
                  label="Email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  user={formData}
                  setUser={setFormData}
                  customInputFieldStyles={css`
                    flex: 1;
                  `}
                />
              </InputFieldsContainer>

              <MainButtonAuth type="submit">
                <p>Log In</p>
              </MainButtonAuth>

              <DividerContainer>
                <Divider />
                <p>Or</p>
                <Divider />
              </DividerContainer>

              <LoginButtonsContainer>
                <ButtonAlt role="button" onClick={googleSignIn}>
                  <ImageGoogleIcon src={images.google_icon_black} alt="Log In With Google" />
                  <ContinueWithText>Log In With Google</ContinueWithText>
                </ButtonAlt>

                <ButtonAlt role="button" onClick={googleSignIn}>
                  <ImageGoogleIcon src={images.phone_icon_black} alt="Log In With Phone" />
                  <ContinueWithText>Log In With Phone</ContinueWithText>
                </ButtonAlt>
              </LoginButtonsContainer>
            </form>
          </FormContainer>
        </FormAndTitleContainer>
        <Copyright />
      </FormAndCopyrightContainer>
      <DesignContainer>
        <AuthDesignImage src={images.auth_side_image} alt="AuthDesignImage" />
      </DesignContainer>
      <ToastContainer />
    </Container>
  )
}

export default connect(mapStateToProps, { login, loginWithGoogle, loadUser })(memo(LoginPage))
