import React, { useContext, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserLoginContext } from '../../Utils/Context/LoggedInUserContext'
import { SVG } from '../../assets'
import './VerifyCode.css'
const VerifyCode = () => {
  const { setLoggedInUserValues } = useContext(UserLoginContext)
  const navigate = useNavigate()

  const [isLoading, setLoading] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const [secureVerificationCode, setSecureVerificationCode] = useState(true)

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value)
  }

  const handleBackButtonClick = () => {}

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
              <p className="VerifyCodeBackButtonText">Back to login</p>
            </div>
            <div className="VerifyCodeFormHeadingContainer">
              <p className="VerifyCodeFormHeadingText">Verify code</p>
            </div>
            <div className="VerifyCodeFormSubHeadingContainer">
              <p className="VerifyCodeFormSubHeadingText">An authentication code has been sent to your email.</p>
            </div>
            <div className="VerifyCodeFormInputsContainer">
              <form>
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
                  <a href="#" className="VerifyCodeResendLink">
                    <p className="VerifyCodeResendText">Resend</p>
                  </a>
                </div>
                <div className="VerifyCodeVerifyButtonContainer">
                  <button className="VerifyCodeVerifyButton">Verify</button>
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
    </div>
  )
}

export default memo(VerifyCode)
