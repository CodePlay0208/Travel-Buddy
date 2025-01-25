import React, { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { SVG, images } from '../../../assets'

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
  MainButtonAuth,
} from '../AuthFlow.styled'
import {
  VerifyCodeFormInputsContainer,
  VerifyCodeResendCodeContainer,
  VerifyCodeDidntRecieveText,
  VerifyCodeResendLink,
  VerifyCodeResendText,
} from './VerifyCode.styled'
const mapStateToProps = (state) => ({
  otpVerified: state.authReducer.otpVerified,
})

const VerifyCode = ({ otpVerified, verifyOTP, resendOTP }) => {
  const navigate = useNavigate()
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
      if (origin === '/signup' ) {
        navigate('/')
      } else if (origin === '/forget-password') {
        navigate('/set-password')
      }
    }
  }, [otpVerified])

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
              <form onSubmit={onSubmit} style={{ flex: 1 }}>
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
                <MainButtonAuth type="submit">
                  <p>Verify</p>
                </MainButtonAuth>
              </form>
              <img src={images.verify_code_image} style={{ width: '30%', height: '100%', marginLeft: '40px' }} alt="supporting" />
            </VerifyCodeFormInputsContainer>
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

export default connect(mapStateToProps, { verifyOTP, resendOTP })(memo(VerifyCode))
