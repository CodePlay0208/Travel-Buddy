import React, { useEffect, useState, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SVG } from '../../../assets'
import './VerifyCode.css'

import '../AuthFlow.css'
import { connect } from 'react-redux'
import { verifyOTP, resendOTP } from '../../../actions/auth.action'
import { ToastContainer } from 'react-toastify'
import InputComponent from '../InputComponent/InputComponent'
import Copyright from '../../../components/Copyright/Copyright'

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
    <div className="Container">
      <div className="FormAndCopyrightContainer">
        <div className="FormAndTitleContainer">
          <div className="TitleContainer">Travmigoz</div>
          <div className="FormContainer">
            <div className="BackButtonContainer" role="button" onClick={handleBackButtonClick}>
              <img src={SVG.BackButtonIcon} className="BackButtonIcon" alt="Back" />
              <p className="BackButtonText">Back</p>
            </div>
            <div className="FormHeadingContainer">Verify code</div>
            <div className="FormSubHeadingText">An authentication code has been sent to your email.</div>
            <div className="VerifyCodeFormInputsContainer">
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
                <div className="VerifyCodeResendCodeContainer">
                  <p className="VerifyCodeDidntRecieveText">Didn’t receive a code?</p>
                  <a href="#" className="VerifyCodeResendLink" onClick={onResendClick}>
                    <p className="VerifyCodeResendText">Resend</p>
                  </a>
                </div>
                <div className="VerifyCodeVerifyButtonContainer">
                  <button type="submit" className="VerifyCodeVerifyButton">
                    Verify
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
      <div className="DesignContainer">
        <img src={SVG.AuthDesignSection} className="AuthDesignImage" alt="Auth Design" />
      </div>
      <ToastContainer />
    </div>
  )
}

export default connect(mapStateToProps, { verifyOTP, resendOTP })(memo(VerifyCode))
