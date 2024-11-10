import React, { useState, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import { register } from '../../../actions/auth.action'

import { SVG } from '../../../assets'
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
            <SignUpFormInputsContainer>
              <form onSubmit={handleSubmit}>
                <SignUpTwoInput>
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
                </SignUpTwoInput>
                <SignUpTwoInput>
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
                </SignUpTwoInput>
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
                <SignUpTermsAgreementContainer>
                  <input
                    type="checkbox"
                    name="termsCheck"
                    value={formData.termsCheck}
                    checked={isTermsAggrementChecked}
                    onChange={toggleTermsAgreementCheck}
                    required
                  />
                  <SignUpTermsAgreementText>
                    I agree to all the{' '}
                    <SignUpTermsLink href="#">
                      <SignUpLinkText>Terms</SignUpLinkText>
                    </SignUpTermsLink>{' '}
                    and{' '}
                    <SignUpTermsLink href="#">
                      <SignUpLinkText>Privacy Policies</SignUpLinkText>
                    </SignUpTermsLink>
                  </SignUpTermsAgreementText>
                </SignUpTermsAgreementContainer>
                <SignUpCreateAccountContainer>
                  <SignUpCreateAccountButton type="submit">Create Account</SignUpCreateAccountButton>
                </SignUpCreateAccountContainer>
                <SignUpAlreadyHaveContainer>
                  <SignUpAlreadyHaveText>Already have an account?</SignUpAlreadyHaveText>
                  <SignUpLoginLink href="/login">
                    <SignUpLoginText>Login</SignUpLoginText>
                  </SignUpLoginLink>
                </SignUpAlreadyHaveContainer>
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
            </SignUpFormInputsContainer>
          </FormContainer>
          <SignUpCopyrightTextContainer></SignUpCopyrightTextContainer>
        </FormAndTitleContainer>
        <Copyright />
      </FormAndCopyrightContainer>
      <SignUpDesignContainer>
        <SignUpAuthDesignImage src={SVG.AuthDesignSection} alt="Auth Design" />
      </SignUpDesignContainer>
      <ToastContainer />
    </Container>
  )
}

export default connect(mapStateToProps, { register })(memo(SignUp))
