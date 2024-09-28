import React, { useState, memo, useEffect } from 'react'
import './ForgotPassword.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { SVG } from '../../../assets'
import { connect } from 'react-redux'
import { forgetPassword } from '../../../actions/auth.action'
import InputComponent from '../InputComponent/InputComponent'
import Copyright from '../../../components/Copyright/Copyright'

const ForgotPasswordPage = (props) => {
  const { forgetPassword } = props
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({
    email: '',
  })

  const handleBackButtonClick = () => {
    navigate(-1)
  }

  const onSubmitClick = async (e) => {
    e.preventDefault()
    const isForgetPassSuccess = await forgetPassword(formData.email)
    if (isForgetPassSuccess || true) {
      sessionStorage.setItem('prevRoute', location.pathname)
      navigate('/verify-otp')
    }
  }

  useEffect(() => {}, [])

  return (
    <div className="ForgetPassContainer">
      <div className="ForgetPassFormAndCopyrightContainer">
        <div className="ForgetPassFormAndTitleContainer">
          <div className="ForgetPassTitleContainer">Travmigoz</div>
          <div className="ForgetPassFormContainer">
            <div className="ForgetPassBackButtonContainer" role="button" onClick={handleBackButtonClick}>
              <img src={SVG.BackButtonIcon} className="ForgetPassBackButtonIcon" />
              <p className="ForgetPassBackButtonText">Back</p>
            </div>
            <div className="ForgetPassFormHeadingContainer">Forgot your password?</div>

            <div className="ForgetPassFormSubHeadingText">
              Don’t worry, happens to all of us. Enter your email below to recover your password
            </div>

            <form onSubmit={onSubmitClick} className="ForgetPassFormInputsContainer">
              <InputComponent type="email" name="email" id="email" user={formData} setUser={setFormData} placeholder="Enter Your Email" />
              <div className="ForgetPassSubmitButtonContainer">
                <button className="ForgetPassSubmitButton" type="submit">
                  Submit
                </button>
              </div>
              <div className="ForgetPassDividerContainer">
                <div className="ForgetPassDivider1" />
                <div className="ForgetPassOrLoginWithContainer">Or login with</div>
                <div className="ForgetPassDivider2" />
              </div>

              <div className="ForgetPassGoogleSignUpButton">
                <p className="ForgetPassContinueWithText">Continue with</p>
                <img src={SVG.GoogleIcon} className="ForgetPassGoogleIcon" />
              </div>
            </form>
          </div>
          <div className="ForgetPassCopyrightTextContainer"></div>
        </div>
        <Copyright />
      </div>
      <div className="ForgetPassDesignContainer">
        <img src={SVG.AuthDesignSection} className="ForgetPassAuthDesignImage" alt="AuthDesignImage" />
      </div>
    </div>
  )
}

export default connect(null, { forgetPassword })(memo(ForgotPasswordPage))
