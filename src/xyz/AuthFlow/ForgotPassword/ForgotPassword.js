import React, { useState, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SVG } from '../../../assets'
import { connect } from 'react-redux'
import { forgetPassword } from '../../../actions/auth.action'
import InputComponent from '../../../components/InputComponent/InputComponent'
import Copyright from '../../../components/Copyright/Copyright'
import { ForgetPassFormInputsContainer, ForgetPassSubmitButtonContainer, ForgetPassSubmitButton } from './ForgotPassword.styled'
import {
  Container,
  FormAndCopyrightContainer,
  FormAndTitleContainer,
  TitleContainer,
  FormContainer,
  BackButtonContainer,
  BackButtonIcon,
  BackButtonText,
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

const ForgotPasswordPage = (props) => {
  const { forgetPassword } = props
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({ email: '' })

  const handleBackButtonClick = () => navigate(-1)

  const onSubmitClick = async (e) => {
    e.preventDefault()
    const isForgetPassSuccess = await forgetPassword(formData.email)
    if (isForgetPassSuccess) {
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
            <BackButtonContainer role="button" onClick={handleBackButtonClick}>
              <BackButtonIcon src={SVG.BackButtonIcon} alt="Back" />
              <BackButtonText>Back</BackButtonText>
            </BackButtonContainer>
            <FormHeadingContainer>Forgot your password?</FormHeadingContainer>
            <FormSubHeadingText>Don’t worry, happens to all of us. Enter your email below to recover your password.</FormSubHeadingText>
            <form onSubmit={onSubmitClick}>
              <ForgetPassFormInputsContainer>
                <InputComponent type="email" name="email" id="email" user={formData} setUser={setFormData} placeholder="Enter Your Email" />
              </ForgetPassFormInputsContainer>
              <ForgetPassSubmitButtonContainer>
                <ForgetPassSubmitButton type="submit">Submit</ForgetPassSubmitButton>
              </ForgetPassSubmitButtonContainer>
              <DividerContainer>
                <Divider1 />
                <OrLoginWithContainer>Or login with</OrLoginWithContainer>
                <Divider2 />
              </DividerContainer>
              <GoogleSignUpButton>
                <ContinueWithText>Continue with</ContinueWithText>
                <GoogleIcon src={SVG.GoogleIcon} alt="Google" />
              </GoogleSignUpButton>
            </form>
          </FormContainer>
        </FormAndTitleContainer>
        <Copyright />
      </FormAndCopyrightContainer>
      <DesignContainer>
        <AuthDesignImage src={SVG.AuthDesignSection} alt="Auth Design" />
      </DesignContainer>
    </Container>
  )
}

export default connect(null, { forgetPassword })(memo(ForgotPasswordPage))
