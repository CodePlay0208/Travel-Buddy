import React from 'react'
import { Form, MainButtonAuth } from '../AuthFlow.styled'
import InputComponent from '../../../components/InputComponent/InputComponent'
import { VerifyCodeDidntRecieveText, VerifyCodeResendCodeContainer, VerifyCodeResendLink, VerifyCodeResendText } from './VerifyCode.styled'

const OtpComponent = ({ onSubmit, formData, setFormData, onResendClick }) => {
  return (
    <Form onSubmit={onSubmit}>
      <InputComponent
        label="Enter Code"
        type="text"
        name="verificationCode"
        user={formData}
        setUser={setFormData}
        placeholder="Enter The Code"
      />
      <MainButtonAuth type="submit">Verify Code</MainButtonAuth>
      <VerifyCodeResendCodeContainer>
        <VerifyCodeDidntRecieveText>Didn’t receive a code?</VerifyCodeDidntRecieveText>
        <VerifyCodeResendLink onClick={onResendClick}>
          <VerifyCodeResendText>Resend</VerifyCodeResendText>
        </VerifyCodeResendLink>
      </VerifyCodeResendCodeContainer>
    </Form>
  )
}

export default OtpComponent
