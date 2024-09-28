import React, { useState, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import { register } from '../../../actions/auth.action'

import { SVG } from '../../../assets'
import './SignUp.css'
import {
  Container,
  FormAndCopyrightContainer,
  FormAndTitleContainer,
  TitleContainer,
  FormContainer,
  FormHeadingContainer,
  FormSubHeadingText,
  DividerContainer,
  Divider1,
  Divider2,
  OrLoginWithContainer,
  DesignContainer,
  AuthDesignImage,
  GoogleSignUpButton,
  ContinueWithText,
  GoogleIcon,
} from '../AuthFlow.styled' // Make sure to adjust the import path if necessary
import InputComponent from '../../../components/InputComponent/InputComponent'
import Copyright from '../../../components/Copyright/Copyright'

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading,
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
    firstName: '',
    lastName: '',
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
            <FormHeadingContainer>Sign Up</FormHeadingContainer>
            <FormSubHeadingText>Let’s get you all set up so you can access your account.</FormSubHeadingText>
            <div className="SignUpFormInputsContainer">
              <form onSubmit={handleSubmit}>
                <div className="SignUpTwoInput">
                  <InputComponent
                    label="First Name"
                    type="text"
                    name="firstName"
                    placeholder="Enter Your First Name"
                    user={formData}
                    setUser={setFormData}
                  />
                  <InputComponent
                    label="Last Name"
                    type="text"
                    name="lastName"
                    placeholder="Enter Your Last Name"
                    user={formData}
                    setUser={setFormData}
                  />
                </div>
                <div className="SignUpTwoInput">
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
                    label="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter Your Phone Number"
                    user={formData}
                    setUser={setFormData}
                  />
                </div>
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

                <div className="SignUpTermsAgreementContainer">
                  <input
                    type="checkbox"
                    name="termsCheck"
                    value={formData.termsCheck}
                    checked={isTermsAggrementChecked}
                    onChange={toggleTermsAgreementCheck}
                    required
                  />
                  <label className="SignUpTermsAgreementText">
                    I agree to all the{' '}
                    <a href="#" className="SignUpTermsLink">
                      <span className="SignUpLinkText"> Terms </span>
                    </a>{' '}
                    and{' '}
                    <a href="#" className="SignUpTermsLink">
                      <span className="SignUpLinkText"> Privacy Policies </span>
                    </a>
                  </label>
                </div>
                <div className="SignUpCreateAccountContainer">
                  <button type="submit" className="SignUpCreateAccountButton">
                    Create Account
                  </button>
                </div>
                <div className="SignUpAlreadyHaveContainer">
                  <p className="SignUpAlreadyHaveText">Already have an account?</p>
                  <a href="/login" className="SignUpLoginLink">
                    <p className="SignUpLoginText">Login</p>
                  </a>
                </div>
                <DividerContainer>
                <Divider1 />
                <OrLoginWithContainer>Or login with</OrLoginWithContainer>
                <Divider2 />
              </DividerContainer>

                <GoogleSignUpButton role="button">
                  <ContinueWithText>Continue with</ContinueWithText>
                  <GoogleIcon src={SVG.GoogleIcon} />
                </GoogleSignUpButton>
              </form>
            </div>
          </FormContainer>
          <div className="SignUpCopyrightTextContainer"></div>
        </FormAndTitleContainer>
        <Copyright />
      </FormAndCopyrightContainer>
      <div className="SignUpDesignContainer">
        <img src={SVG.AuthDesignSection} className="SignUpAuthDesignImage" alt="Auth Design" />
      </div>
      <ToastContainer />
    </Container>
  )
}

export default connect(mapStateToProps, { register })(memo(SignUp))
