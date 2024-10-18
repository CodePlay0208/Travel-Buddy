import React, { useState, memo, useEffect } from 'react'
import './ForgotPassword.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { SVG } from '../../assets'
import { connect } from 'react-redux'
import { forgetPassword } from '../../actions/auth.action'
import { ToastContainer } from 'react-toastify'

const ForgotPasswordPage = (props) => {
  const { forgetPassword } = props
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleBackButtonClick = () => {
    navigate(-1)
  }

  const onSubmitClick = async (e) => {
    e.preventDefault()
    const isForgetPassSuccess = await forgetPassword(email)
    if (isForgetPassSuccess) {
      sessionStorage.setItem('prevRoute', location.pathname)
      navigate('/verify-otp')
    }
  }

  useEffect(() => {}, [])

  return (
    <div className="ForgetPassContainer">
      <div className="ForgetPassFormAndCopyrightContainer">
        <div className="ForgetPassFormAndTitleContainer">
          <div className="ForgetPassTitleContainer">
            <p className="ForgetPassTitleText">Travmigoz</p>
          </div>
          <div className="ForgetPassFormContainer">
            <div className="ForgetPassBackButtonContainer" role="button" onClick={handleBackButtonClick}>
              <img src={SVG.BackButtonIcon} className="ForgetPassBackButtonIcon" />
              <p className="ForgetPassBackButtonText">Back</p>
            </div>
            <div className="ForgetPassFormHeadingContainer">
              <p className="ForgetPassFormHeadingText">Forgot your password?</p>
            </div>
            <div className="ForgetPassFormSubHeadingContainer">
              <p className="ForgetPassFormSubHeadingText">
                Don’t worry, happens to all of us. Enter your email below to recover your password
              </p>
            </div>
            <div className="ForgetPassFormInputsContainer">
              <form onSubmit={onSubmitClick}>
                <div className="ForgetPassEmailInputContainer">
                  <label className="ForgetPassEmailText">Email</label>
                  <input
                    className="ForgetPassEmailInput"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => handleEmailChange(e)}
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="ForgetPassSubmitButtonContainer">
                  <button className="ForgetPassSubmitButton" type="submit">
                    Submit
                  </button>
                </div>
                <div className="ForgetPassDividerContainer">
                  <div className="ForgetPassDivider1" />
                  <div className="ForgetPassOrLoginWithContainer">
                    <p className="ForgetPassOrLoginWithText">Or login with</p>
                  </div>
                  <div className="ForgetPassDivider2" />
                </div>
                <div className="ForgetPassMoreSignUpButtonContainer">
                  <div className="ForgetPassGoogleSignUpButton">
                    <p className="ForgetPassContinueWithText">Continue with</p>
                    <img src={SVG.GoogleIcon} className="ForgetPassGoogleIcon" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="ForgetPassCopyrightTextContainer"></div>
        </div>
        <div className="ForgetPassCopyrightTextContainer">
          <p className="ForgetPassCopyrightText">
            &copy; 2024 <span className="ForgetPassTravmigozCopyrightText">Travmigoz</span>. All Rights Reserved
          </p>
        </div>
      </div>
      <div className="ForgetPassDesignContainer">
        <img src={SVG.AuthDesignSection} className="ForgetPassAuthDesignImage" alt="AuthDesignImage" />
      </div>
      <ToastContainer />
    </div>
  )
}

export default connect(null, { forgetPassword })(memo(ForgotPasswordPage))
