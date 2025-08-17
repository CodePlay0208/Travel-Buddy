import React, { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { SVG, images } from '../../../assets'

import Copyright from '../../../components/Copyright/Copyright'
import {
  Container,
  FormAndCopyrightContainer,
  FormAndTitleContainer,
  TitleContainer,
  FormContainer,
  FormHeadingContainer,
  FormSubHeadingText,
  DesignContainer,
  AuthDesignImage,
  SupportingImg,
  VerifyCodeFormInputsContainer,
  OtpContainer,
} from '../AuthFlow.styled'
import OtpComponent from './OtpComponent'
import { StyledToastContainer } from '../../../styles/Global'
import { Logo } from '../../../styles/Navbar.styles'
import { useSelector, useDispatch } from 'react-redux'
import { resendOTP, verifyOTP } from '../../../store/slices/auth-slice'
import { getProfile } from '../../../store/slices/profile-slice'

const VerifyCode = () => {
  const navigate = useNavigate()
  const { otpVerified } = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()

  const origin = sessionStorage.getItem('prevRoute')

  const [formData, setFormData] = useState({ verificationCode: '' })

  const handleBackButtonClick = () => {
    navigate(-1)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('formData.verificationCode', formData.verificationCode)
    dispatch(verifyOTP({ userOtp: formData.verificationCode, isSignUpRequest: origin === '/signup'})).unwrap()
  }

  const onResendClick = async () => {
    if (origin === '/signup') {
      await dispatch(resendOTP(true)).unwrap()
    } else {
      await dispatch(resendOTP(false)).unwrap()
    }
  }

  useEffect(() => {
    if (otpVerified) {
      dispatch(getProfile()).unwrap()
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
            <Logo src={images.travmigoz_logo} alt="travmigoz logo" />
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
      <StyledToastContainer />
    </Container>
  )
}

VerifyCode.displayName = 'VerifyCode'

export default memo(VerifyCode)
