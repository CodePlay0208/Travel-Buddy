import React, { useState, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { images, SVG } from '../../../assets'
import { connect } from 'react-redux'
import { forgetPassword } from '../../../actions/auth.action'
import InputComponent from '../../../components/InputComponent/InputComponent'
import Copyright from '../../../components/Copyright/Copyright'
import {
  ForgetPassFormInputsContainer,
  ForgetPassSubmitButtonContainer,
  ForgetPassSubmitButton,
  ForgetPasswordContainer,
  ForgetPasswordImage,
} from './ForgotPassword.styled'
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
  Divider,
  OrLoginWithContainer,
  DesignContainer,
  AuthDesignImage,
  GoogleSignUpButton,
  ContinueWithText,
  ImageGoogleIcon,
  MainButtonAuth,
  ButtonAlt,
} from '../AuthFlow.styled'
import { css } from 'styled-components'

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
            <FormHeadingContainer
              customStyles={css`
                font-size: 3.125rem;
              `}
            >
              Forgot your password?
            </FormHeadingContainer>
            <FormSubHeadingText>Don’t worry, happens to all of us. Enter your email below to recover your password</FormSubHeadingText>
            <ForgetPasswordContainer>
              <form onSubmit={onSubmitClick} style={{ flex: 1 }}>
                <ForgetPassFormInputsContainer>
                  <InputComponent
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    user={formData}
                    setUser={setFormData}
                    placeholder="Enter Your Email"
                  />
                </ForgetPassFormInputsContainer>
                <MainButtonAuth
                  mainButtonStyles={css`
                    margin-top: 3.5%;
                  `}
                  type="submit"
                >
                  <p>Submit</p>
                </MainButtonAuth>
                <DividerContainer>
                  <Divider
                    customStyles={css`
                      width: 48%;
                    `}
                  />
                  <OrLoginWithContainer>Or</OrLoginWithContainer>
                  <Divider />
                </DividerContainer>
                <ButtonAlt role="button">
                  <ImageGoogleIcon src={images.google_icon_black} alt="Log In With Google" />
                  <ContinueWithText>Log In With Google</ContinueWithText>
                </ButtonAlt>
              </form>
              <img src={images.forgot_password_image} style={{ width: '40%', height: '90%', marginTop: '30px', marginLeft: '70px'}} />
            </ForgetPasswordContainer>
          </FormContainer>
        </FormAndTitleContainer>
        <Copyright />
      </FormAndCopyrightContainer>
      <DesignContainer>
        <AuthDesignImage src={images.auth_side_image} alt="Auth Design" />
      </DesignContainer>
    </Container>
  )
}

export default connect(null, { forgetPassword })(memo(ForgotPasswordPage))
