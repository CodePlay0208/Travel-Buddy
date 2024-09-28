import React, { useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { SVG } from '../../../assets'
import './SetPassword.css'

import { connect } from 'react-redux'
import { resetPassword } from '../../../actions/auth.action'
import { toast, ToastContainer } from 'react-toastify'
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
  DesignContainer as AuthDesignContainer,
  AuthDesignImage,
} from '../AuthFlow.styled' // Common styled components
import {
  InputContainer,
  BtnContainer,
  SubmitBtn,
  BtnText,
  CopyTextContainer,
  Input,
  Heading,
  SubHeading,
  ReEnterPasswordContainer,
  DesignContainer,
} from './SetPassword.styled' // Newly imported short-named styled components

const SetPassword = ({ resetPassword }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ password: '', reEnterPassword: '' })
  const [securePasswordText, setSecurePasswordText] = useState(true)
  const [secureReEnterPasswordText, setSecureReEnterPasswordText] = useState(true)

  const handleBackButtonClick = () => navigate(-1)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.reEnterPassword) {
      toast.error('Passwords do not match', { autoClose: 1500 })
    }
    const isResetComplete = await resetPassword(formData.password)
    if (isResetComplete) {
      navigate('/')
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
            <FormHeadingContainer>Set a password</FormHeadingContainer>
            <FormSubHeadingText>Your previous password has been reset. Please set a new password for your account.</FormSubHeadingText>
            <InputContainer>
              <form onSubmit={onSubmit}>
                <InputComponent
                  label="Create Password"
                  type={securePasswordText ? 'password' : 'text'}
                  name="password"
                  user={formData}
                  setUser={setFormData}
                  isPasswordField={true}
                  placeholder="Enter Your Password"
                  required
                  secureTextState={securePasswordText}
                  setSecureTextState={setSecurePasswordText}
                />

                <InputComponent
                  label="Re-enter Password"
                  type={secureReEnterPasswordText ? 'password' : 'text'}
                  name="reEnterPassword"
                  user={formData}
                  setUser={setFormData}
                  placeholder="Re-Enter Your Password"
                  isPasswordField={true}
                  secureTextState={secureReEnterPasswordText}
                  setSecureTextState={setSecureReEnterPasswordText}
                />

                <BtnContainer>
                  <SubmitBtn type="submit">
                    <BtnText>Set password</BtnText>
                  </SubmitBtn>
                </BtnContainer>
              </form>
            </InputContainer>
          </FormContainer>
          <CopyTextContainer />
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

export default connect(null, { resetPassword })(memo(SetPassword))
