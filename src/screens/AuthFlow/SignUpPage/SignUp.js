import React, { useState, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import { register } from '../../../actions/auth.action'

import { SVG, images } from '../../../assets'
import {
  Container,
  FormAndCopyrightContainer,
  FormAndTitleContainer,
  TitleContainer,
  FormContainer,
  FormHeadingContainer,
  FormSubHeadingText,
  DividerContainer,
  Divider,
  OrLoginWithContainer,
  DesignContainer,
  AuthDesignImage,
  GoogleSignUpButton,
  ContinueWithText,
  ImageGoogleIcon,
  MainButtonAuth,
} from '../AuthFlow.styled'
import {
  SignUpTwoInput,
  SignUpFormInputsContainer,
  SignUpTermsAgreementContainer,
  SignUpTermsAgreementText,
  SignUpTermsLink,
  SignUpLinkText,
  SignUpCreateAccountContainer,
  SignUpCreateAccountButton,
  SignUpAlreadyHaveContainer,
  SignUpAlreadyHaveText,
  SignUpLoginLink,
  SignUpLoginText,
  SignUpCopyrightTextContainer,
  SignUpDesignContainer,
  SignUpAuthDesignImage,
  SignUpGoogleSignUpButton,
  SignUpContinueWithText,
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
  const [securePasswordText, setSecurePasswordText] = useState(true)
  const [secureConfirmPasswordText, setSecureConfirmPasswordText] = useState(true)
  const [isTermsAggrementChecked, setIsTermsAggrementChecked] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleTermsAgreementCheck = () => {
    setIsTermsAggrementChecked((prevState) => !prevState)
  }

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    termsCheck: isTermsAggrementChecked,
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
    const validPassword = checkValueIsValid(formData.password)

    if (!(validEmail && validPassword)) {
      toast.error('email-id or password not valid', {
        autoClose: 1500,
      })
      return
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match", {
        autoClose: 1500,
      })
      return
    }
    const isAuth = await register(formData)

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
                    label="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter Your Phone Number"
                    user={formData}
                    setUser={setFormData}
                  />
                </SignUpTwoInput>
                <SignUpTwoInput
                  customStyles={css`
                    margin-top: 1.5%;
                  `}
                >
                  <InputComponent
                    label="Password"
                    type={securePasswordText ? 'password' : 'text'}
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    user={formData}
                    setUser={setFormData}
                    isPasswordField={true}
                    secureTextState={securePasswordText}
                    setSecureTextState={setSecurePasswordText}
                  />
                  <InputComponent
                    label="Confirm Password"
                    type={secureConfirmPasswordText ? 'password' : 'text'}
                    name="confirmPassword"
                    placeholder="Confirm Your Password"
                    user={formData}
                    setUser={setFormData}
                    isPasswordField={true}
                    secureTextState={secureConfirmPasswordText}
                    setSecureTextState={setSecureConfirmPasswordText}
                  />
                </SignUpTwoInput>
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
                    <SignUpLoginLink href="/login">
                      <SignUpLoginText> Login</SignUpLoginText>
                    </SignUpLoginLink>
                  </SignUpAlreadyHaveText>

                    <SignUpLoginLink href="/login">
                      <SignUpLoginText>Sign in with email instead</SignUpLoginText>
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
