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
} from '../AuthFlow.styled'
import {
  SignUpTwoInput,
  SignUpFormInputsContainer,
  SignUpAlreadyHaveContainer,
  SignUpAlreadyHaveText,
  SignUpLoginLink,
  SignUpLoginText,
  SignUpCopyrightTextContainer,
  SignUpDesignContainer,
  SignUpAuthDesignImage,
} from './SignUp.styled'
import InputComponent from '../../../components/InputComponent/InputComponent'
import Copyright from '../../../components/Copyright/Copyright'
import { css } from 'styled-components'

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

  const checkValueIsValid = (value) => {
    if (value === '' || value === undefined || value === null) {
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validEmail = checkValueIsValid(formData.email)

    if (!validEmail) {
      toast.error('email-id or password not valid', {
        autoClose: 1500,
      })
      return
    }

    const isAuth = await register(formData)
    console.log(isAuth)
    if (isAuth) {
      sessionStorage.setItem('prevRoute', location.pathname)
      navigate('/verify-otp')
    }
  }

  return (
    <Container>
      <FormAndCopyrightContainer>
        <FormAndTitleContainer>
          <TitleContainer>Travmigoz</TitleContainer>
          <FormContainer>
            <FormHeadingContainer>Get Started</FormHeadingContainer>
            <FormSubHeadingText>
              Welcome to <span>Travmigoz</span>- Create your account.
            </FormSubHeadingText>
            <SignUpFormInputsContainer>
              <form onSubmit={handleSubmit}>
                <SignUpTwoInput>
                  <InputComponent
                    label="Name"
                    type="text"
                    name="username"
                    placeholder="Enter Your Name"
                    user={formData}
                    setUser={setFormData}
                  />
                  <InputComponent
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    user={formData}
                    setUser={setFormData}
                  />
                </SignUpTwoInput>
                <SignUpTwoInput
                  customStyles={css`
                    margin-top: 1.5%;
                  `}
                ></SignUpTwoInput>
                <MainButtonAuth
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
                      <SignUpLoginText> Login</SignUpLoginText>
                    </SignUpLoginLink>
                  </SignUpAlreadyHaveText>

                  <SignUpLoginLink
                    onClick={() => {
                      navigate('/login')
                    }}
                  >
                    <SignUpLoginText>Sign in with phone number instead</SignUpLoginText>
                  </SignUpLoginLink>
                </SignUpAlreadyHaveContainer>
              </form>
            </SignUpFormInputsContainer>
          </FormContainer>
          <SignUpCopyrightTextContainer></SignUpCopyrightTextContainer>
        </FormAndTitleContainer>
        <Copyright />
      </FormAndCopyrightContainer>
      <SignUpDesignContainer>
        <SignUpAuthDesignImage src={images.auth_side_image} alt="Auth Design" />
      </SignUpDesignContainer>
      <ToastContainer />
    </Container>
  )
}

export default connect(mapStateToProps, { register })(memo(SignUp))
