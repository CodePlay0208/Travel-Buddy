import React, { useEffect, useState, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SVG } from '../../../assets'

import { connect } from 'react-redux'
import { verifyOTP, resendOTP } from '../../../actions/auth.action'
import { ToastContainer } from 'react-toastify'
import InputComponent from '../../../components/InputComponent/InputComponent'
import Copyright from '../../../components/Copyright/Copyright'
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
  DesignContainer,
  AuthDesignImage,
} from '../AuthFlow.styled'
import {
  VerifyCodeFormInputsContainer,
  VerifyCodeResendCodeContainer,
  VerifyCodeDidntRecieveText,
  VerifyCodeResendLink,
  VerifyCodeResendText,
  VerifyCodeVerifyButtonContainer,
  VerifyCodeVerifyButton,
} from './VerifyCode.styled'
const mapStateToProps = (state) => ({
  otpVerified: state.auth.otpVerified,
})

const VerifyCode = ({ otpVerified, verifyOTP, resendOTP }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const origin = sessionStorage.getItem('prevRoute')

  const [formData, setFormData] = useState({ verificationCode: '' })
  const [secureVerificationCode, setSecureVerificationCode] = useState(true)

  const handleBackButtonClick = () => {
    navigate(-1)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const isSignUpRequest = origin === '/signup'
    verifyOTP(formData.verificationCode, isSignUpRequest)
  }

  const onResendClick = async () => {
    await resendOTP()
  }

  useEffect(() => {
    if (otpVerified) {
      if (origin === '/signup') {
        navigate('/')
      } else if (origin === '/forget-password') {
        navigate('/set-password')
      }
    }
  }, [otpVerified, navigate])

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
            <FormHeadingContainer>Verify code</FormHeadingContainer>
            <FormSubHeadingText>An authentication code has been sent to your email.</FormSubHeadingText>
            <VerifyCodeFormInputsContainer>
              <form onSubmit={onSubmit}>
                <InputComponent
                  label="Enter Code"
                  type={secureVerificationCode ? 'password' : 'text'}
                  name="verificationCode"
                  user={formData}
                  setUser={setFormData}
                  placeholder="Enter The Code"
                  secureTextState={secureVerificationCode}
                  setSecureTextState={setSecureVerificationCode}
                />
                <VerifyCodeResendCodeContainer>
                  <VerifyCodeDidntRecieveText>Didn’t receive a code?</VerifyCodeDidntRecieveText>
                  <VerifyCodeResendLink href="#" onClick={onResendClick}>
                    <VerifyCodeResendText>Resend</VerifyCodeResendText>
                  </VerifyCodeResendLink>
                </VerifyCodeResendCodeContainer>
                <VerifyCodeVerifyButtonContainer>
                  <VerifyCodeVerifyButton type="submit">Verify</VerifyCodeVerifyButton>
                </VerifyCodeVerifyButtonContainer>
              </form>
            </VerifyCodeFormInputsContainer>
          </FormContainer>
        </FormAndTitleContainer>
        <Copyright />
      </FormAndCopyrightContainer>
      <DesignContainer>
        <AuthDesignImage src={SVG.AuthDesignSection} alt="Auth Design" />
      </DesignContainer>
      <ToastContainer />
    </Container>
  )
}

export default connect(mapStateToProps, { verifyOTP, resendOTP })(memo(VerifyCode))
