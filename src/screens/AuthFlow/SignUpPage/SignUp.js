import React, { useState, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import { register } from '../../../actions/auth.action'

import { images } from '../../../assets'
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
} from '../AuthFlow.styled'
import { SignUpAlreadyHaveContainer, SignUpAlreadyHaveText, SignUpLoginLink, SignUpLoginText } from './SignUp.styled'
import InputComponent from '../../../components/InputComponent/InputComponent'
import Copyright from '../../../components/Copyright/Copyright'
import { css } from 'styled-components'
import { InputFieldsContainer } from '../LoginPage/loginPage.styled'

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

    const isAuth = await register(formData)
    console.log(isAuth)

    if (isAuth) {
      
      localStorage.setItem('userKey', formData.email || formData.phoneNumber)
      sessionStorage.setItem('prevRoute', location.pathname)
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
            <FormHeadingContainer>Get Started</FormHeadingContainer>
            <FormSubHeadingText>
              Welcome to <span>Travmigoz</span>- Create your account.
            </FormSubHeadingText>
            <>
              <form onSubmit={handleSubmit}>
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

                <MainButtonAuth
                  onClick={handleSubmit}
                  type="submit"
                  mainButtonStyles={css`
                    margin-top: 4.5%;
                  `}
                >
                  <p>Sign up</p>
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

                  <SignUpLoginLink
                    onClick={() => {
                      setIsEmail(!isEmail)
                    }}
                  >
                    Sign in with {!isEmail ? 'email' : 'phone number'} instead
                  </SignUpLoginLink>
                </SignUpAlreadyHaveContainer>
              </form>
            </>
          </FormContainer>
        </FormAndTitleContainer>
        <Copyright />
      </FormAndCopyrightContainer>
      <DesignContainer>
        <AuthDesignImage src={images.auth_side_image} alt="Auth Design" />
      </DesignContainer>
      <ToastContainer />
    </Container>
  )
}

export default connect(mapStateToProps, { register })(memo(SignUp))
