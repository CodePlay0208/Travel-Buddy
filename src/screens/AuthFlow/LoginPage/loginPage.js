import React, { useContext, useState, memo, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { images, SVG } from '../../../assets'
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
  Form,
  SupportingImg,
  VerifyCodeFormInputsContainer,
} from '../AuthFlow.styled'
import { LoginSignUpLink, InputFieldsContainer, Divider, LoginButtonsContainer } from './loginPage.styled'
import { UserLoginContext } from '../../../utils/Context/LoggedInUserContext'
import { css } from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { StyledToastContainer } from '../../../styles/Global'
import { Logo } from '../../../styles/Navbar.styles'
const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
})

const LoginPage = (props) => {
  const { login, isAuthenticated, loadUser } = props
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: '',
  })
  const [isEmail, setIsEmail] = useState(true)
  const location = useLocation()
  const { setLoggedInUserValues } = useContext(UserLoginContext)
  const navigate = useNavigate()

  const googleSignIn = useGoogleLogin({
    clientId: '1022164133679-ki2bnhs4j6njqkehebo7dmo3k96rdfvc.apps.googleusercontent.com',
    onSuccess: (response) => {
      //console.log(response)
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
          //console.log('the data is', data)
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

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault()

      let validEmail = true
      if (isEmail) {
        validEmail = checkValueIsValid(formData.email)
        if (!validEmail) {
          toast.error('Email-id is not valid!', {
            autoClose: 1500,
          })
          return
        }
      } else {
        validEmail = checkValueIsValid(formData.phone)
        if (!validEmail) {
          toast.error('Phone number is not valid!', {
            autoClose: 1500,
          })
          return
        }
      }

      const isAuth = await login(isEmail ? formData.email : `${formData.phone}`)

      if (isAuth) {
        sessionStorage.setItem('prevRoute', location.pathname)
        localStorage.setItem('userKey', isEmail ? formData.email : `${formData.phone}`)
        navigate('/verify-otp')
      } else {
        toast.error('Login Failed!', { autoClose: 1500 })
      }
    },
    [checkValueIsValid, formData.email, formData.phone, isEmail, location.pathname, login, navigate],
  )
  return (
    <Container>
      <Helmet>
        <title>Login | Access Your Travmigoz Account</title>
        <meta
          name="description"
          content="Access your saved trips, exclusive travel deals, and personalized recommendations.log in to Your Travmigoz Account."
        />
      </Helmet>
      <FormAndCopyrightContainer>
        <FormAndTitleContainer>
          <TitleContainer
            onClick={() => {
              navigate('/')
            }}
          >
            <Logo src={images.travmigoz_logo} alt="travmigoz logo" />
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
                Sign up
              </LoginSignUpLink>
            </FormSubHeadingText>
            <VerifyCodeFormInputsContainer>
              <Form onSubmit={handleLogin}>
                <InputFieldsContainer>
                  {isEmail ? (
                    <InputComponent
                      label="Email"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email"
                      user={formData}
                      setUser={setFormData}
                    />
                  ) : (
                    <InputComponent
                      label="Phone Number"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter Your Phone"
                      user={formData}
                      setUser={setFormData}
                    />
                  )}
                </InputFieldsContainer>

                <MainButtonAuth type="submit">Log In</MainButtonAuth>

                <DividerContainer>
                  <Divider />
                  Or
                  <Divider />
                </DividerContainer>

                <LoginButtonsContainer>
                  <ButtonAlt
                    role="button"
                    onClick={(e) => {
                      e.preventDefault()
                      googleSignIn()
                    }}
                  >
                    <ImageGoogleIcon src={images.google_icon_black} alt="Log In With Google" />
                    <ContinueWithText>Log In With Google</ContinueWithText>
                  </ButtonAlt>

                  <FormSubHeadingText border="none">
                    Log in with
                    <LoginSignUpLink
                      onClick={() => {
                        setIsEmail(!isEmail)
                      }}
                    >
                      {!isEmail ? 'Email' : 'Phone number'}
                    </LoginSignUpLink>
                  </FormSubHeadingText>
                </LoginButtonsContainer>
              </Form>
              <SupportingImg src={SVG.login} alt="supporting" />
            </VerifyCodeFormInputsContainer>
          </FormContainer>
        </FormAndTitleContainer>
        <Copyright />
      </FormAndCopyrightContainer>
      <DesignContainer>
        <AuthDesignImage src={images.auth_side_image} alt="AuthDesignImage" />
      </DesignContainer>
      <StyledToastContainer />
    </Container>
  )
}

export default connect(mapStateToProps, { login, loginWithGoogle, loadUser })(memo(LoginPage))
