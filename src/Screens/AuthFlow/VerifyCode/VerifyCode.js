import React, { useEffect, useState, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SVG } from '../../../assets'
import './VerifyCode.css'
import { connect } from 'react-redux'
import { verifyOTP, resendOTP } from '../../../actions/auth.action'
import { ToastContainer } from 'react-toastify'

const mapStateToProps = (state) => ({
  otpVerified: state.auth.otpVerified,
})

const VerifyCode = ({ otpVerified, verifyOTP, resendOTP }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const origin = sessionStorage.getItem('prevRoute')

  const [verificationCode, setVerificationCode] = useState('')
  const [secureVerificationCode, setSecureVerificationCode] = useState(true)

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value)
  }

  const handleBackButtonClick = () => {
    navigate(-1)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const isSignUpRequest = origin === '/signup'
    verifyOTP(verificationCode, isSignUpRequest)
  }

  const onResendClick = async () => {
    await resendOTP()
  }

  const PasswordEyeComponent = memo((props) => {
    const { secureTextState, setSecureTextState } = props

    const handlePasswordEyeIconClick = () => {
      setSecureTextState((prevState) => !prevState)
    }

    return (
      <div className="VerifyCodePasswordEyeContainer" role="button" onClick={handlePasswordEyeIconClick}>
        {secureTextState ? (
          <img src={SVG.EyeIcon} className="VerifyCodePasswordEyeIcon" />
        ) : (
          <img src={SVG.EyeSlashIcon} className="VerifyCodePasswordEyeIcon" />
        )}
      </div>
    )
  })

  useEffect(() => {
    if (otpVerified) {
      if (origin === '/signup') {
        navigate('/');
      } else if (origin === '/forget-password') {
        navigate('/set-password');
      }
    }
  }, [otpVerified, navigate]);

  return (
    <div className="VerifyCodeContainer">
      <div className="VerifyCodeFormAndCopyrightContainer">
        <div className="VerifyCodeFormAndTitleContainer">
          <div className="VerifyCodeTitleContainer">
            <p className="VerifyCodeTitleText">Travmigoz</p>
          </div>
          <div className="VerifyCodeFormContainer">
            <div className="VerifyCodeBackButtonContainer" role="button" onClick={handleBackButtonClick}>
              <img src={SVG.BackButtonIcon} className="VerifyCodeBackButtonIcon" />
              <p className="VerifyCodeBackButtonText">Back</p>
            </div>
            <div className="VerifyCodeFormHeadingContainer">
              <p className="VerifyCodeFormHeadingText">Verify code</p>
            </div>
            <div className="VerifyCodeFormSubHeadingContainer">
              <p className="VerifyCodeFormSubHeadingText">An authentication code has been sent to your email.</p>
            </div>
            <div className="VerifyCodeFormInputsContainer">
              <form onSubmit={onSubmit}>
                <div className="VerifyCodeCodeInputContainer">
                  <label className="VerifyCodeCodeText">Enter Code</label>
                  <input
                    className="VerifyCodeCodeInput"
                    type={secureVerificationCode ? 'password' : 'text'}
                    name="code"
                    value={verificationCode}
                    onChange={(e) => handleVerificationCodeChange(e)}
                    placeholder="Enter The Code"
                    required
                  />
                  <PasswordEyeComponent secureTextState={secureVerificationCode} setSecureTextState={setSecureVerificationCode} />
                </div>
                <div className="VerifyCodeResendCodeContainer">
                  <p className="VerifyCodeDidntRecieveText">Didn’t receive a code?</p>
                  <a href="#" className="VerifyCodeResendLink" onClick={onResendClick}>
                    <p className="VerifyCodeResendText">Resend</p>
                  </a>
                </div>
                <div className="VerifyCodeVerifyButtonContainer">
                  <button type="submit" className="VerifyCodeVerifyButton">Verify</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="VerifyCodeCopyrightTextContainer">
          <p className="VerifyCodeCopyrightText">
            &copy; 2024 <span className="VerifyCodeTravmigozCopyrightText">Travmigoz</span>. All Rights Reserved
          </p>
        </div>
      </div>
      <div className="VerifyCodeDesignContainer">
        <img src={SVG.AuthDesignSection} className="VerifyCodeAuthDesignImage" alt="AuthDesignImage" />
      </div>
      <ToastContainer />
    </div>
  )
}

export default connect(mapStateToProps, { verifyOTP, resendOTP })(memo(VerifyCode))
