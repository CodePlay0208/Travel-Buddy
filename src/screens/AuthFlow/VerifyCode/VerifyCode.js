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
  Form,
  SupportingImg,
  VerifyCodeFormInputsContainer,
  OtpContainer,
} from '../AuthFlow.styled'
import { VerifyCodeResendCodeContainer, VerifyCodeDidntRecieveText, VerifyCodeResendLink, VerifyCodeResendText } from './VerifyCode.styled'
import OtpComponent from './OtpComponent'
const mapStateToProps = (state) => ({
  otpVerified: state.authReducer.otpVerified,
})

const VerifyCode = ({ otpVerified, verifyOTP, resendOTP }) => {
  const navigate = useNavigate()

  const origin = sessionStorage.getItem('prevRoute')

  const [formData, setFormData] = useState({ verificationCode: '' })

  const handleBackButtonClick = () => {
    navigate(-1)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    verifyOTP(formData.verificationCode, origin === '/signup')
  }

  const onResendClick = async () => {
    await resendOTP()
  }

  useEffect(() => {
    if (otpVerified) {
      if (origin === '/signup') {
        navigate('/setup')
      } else {
        navigate('/')
      }
    }
  }, [otpVerified])

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
            {/* <BackButtonContainer role="button" onClick={handleBackButtonClick}>
              <BackButtonIcon src={SVG.BackButtonIcon} alt="Back" />
              <BackButtonText>Back</BackButtonText>
            </BackButtonContainer> */}
            <FormHeadingContainer>Verify code</FormHeadingContainer>
            <FormSubHeadingText>An authentication code has been sent to your email.</FormSubHeadingText>
            <VerifyCodeFormInputsContainer>
              <OtpContainer>
                <OtpComponent formData={formData} setFormData={setFormData} onResendClick={onResendClick} onSubmit={onSubmit} />
              </OtpContainer>
              <SupportingImg src={images.verify_code_image} alt="supporting" />
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
