import React, { useState, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import { register } from '../../../actions/auth.action'

import { images, SVG } from '../../../assets'
import {
  Container,
  FormAndCopyrightContainer,
  FormAndTitleContainer,
  TitleContainer,
  FormContainer,
  FormHeadingContainer,
  FormSubHeadingText,
  MainButtonAuth,
  DesignContainer,
  AuthDesignImage,
  Form,
  SupportingImg,
  VerifyCodeFormInputsContainer,
} from '../AuthFlow.styled'
import { SignUpAlreadyHaveContainer, SignUpAlreadyHaveText, SignUpLoginLink, SignUpLoginText } from './SignUp.styled'
import InputComponent from '../../../components/InputComponent/InputComponent'
import Copyright from '../../../components/Copyright/Copyright'
import { css } from 'styled-components'
import { InputFieldsContainer } from '../LoginPage/loginPage.styled'
import { Helmet } from 'react-helmet-async'
import { StyledToastContainer } from '../../../styles/Global'
import { Logo } from '../../../styles/Navbar.styles'

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isLoading: state.authReducer.isLoading,
})

const SignUp = (props) => {
  const { register } = props
  const navigate = useNavigate()
  const location = useLocation()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  })

  const [isEmail, setIsEmail] = useState(true)
  const checkValueIsValid = (value) => {
    if (value === '' || value === undefined || value === null) {
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let validEmail = false
    if (isEmail) {
      validEmail = checkValueIsValid(formData.email)
    } else {
      validEmail = checkValueIsValid(formData.phoneNumber)
    }
    if (!validEmail) {
      toast.error('email-id or password not valid', {
        autoClose: 1500,
      })
      return
    }

    const isAuth = await register({ ...formData, userKey: isEmail ? formData.email : `${formData.phoneNumber}` })
    console.log(isAuth)

    if (isAuth) {
      localStorage.setItem('userKey', isEmail ? formData.email : `${formData.phoneNumber}`)
      sessionStorage.setItem('prevRoute', location.pathname)
      navigate('/verify-otp')
    }
  }

  return (
    <Container>
      <Helmet>
        <title>Sign Up | Access Your Travmigoz Account</title>
        <meta
          name="description"
          content="Access your saved trips, exclusive travel deals, and personalized recommendations.Sign in to Your Travmigoz Account."
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
            <FormHeadingContainer>Get Started</FormHeadingContainer>
            <FormSubHeadingText>
              Welcome to <span>Travmigoz</span>- Create your account.
            </FormSubHeadingText>
            <VerifyCodeFormInputsContainer>
              <Form onSubmit={handleSubmit}>
                <InputFieldsContainer>
                  <InputComponent
                    label="Name"
                    type="text"
                    name="username"
                    placeholder="Enter Your Name"
                    user={formData}
                    setUser={setFormData}
                  />
                  {isEmail ? (
                    <InputComponent
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      user={formData}
                      setUser={setFormData}
                    />
                  ) : (
                    <InputComponent
                      label="Phone Number"
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter Your Phone Number"
                      user={formData}
                      setUser={setFormData}
                    />
                  )}
                </InputFieldsContainer>

                <MainButtonAuth onClick={handleSubmit} type="submit">
                  Sign up
                </MainButtonAuth>
                <SignUpAlreadyHaveContainer>
                  <SignUpAlreadyHaveText>
                    Already have an account?
                    <SignUpLoginLink
                      onClick={() => {
                        navigate('/login')
                      }}
                    >
                      Login
                    </SignUpLoginLink>
                  </SignUpAlreadyHaveText>

                  <SignUpAlreadyHaveText
                    onClick={() => {
                      setIsEmail(!isEmail)
                    }}
                  >
                    Sign in with <SignUpLoginLink>{!isEmail ? 'Email' : 'Phone'}</SignUpLoginLink>
                    instead
                  </SignUpAlreadyHaveText>
                </SignUpAlreadyHaveContainer>
              </Form>
              <SupportingImg src={SVG.signup} alt="supporting" />
            </VerifyCodeFormInputsContainer>
          </FormContainer>
        </FormAndTitleContainer>
        <Copyright />
      </FormAndCopyrightContainer>
      <DesignContainer>
        <AuthDesignImage src={images.auth_side_image} alt="Auth Design" />
      </DesignContainer>
      <StyledToastContainer />
    </Container>
  )
}

export default connect(mapStateToProps, { register })(memo(SignUp))
