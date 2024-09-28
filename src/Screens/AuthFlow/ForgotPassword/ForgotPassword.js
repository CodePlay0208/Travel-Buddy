import React, { useState, memo } from 'react'
import './ForgotPassword.css'
import '../AuthFlow.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { SVG } from '../../../assets'
import { connect } from 'react-redux'
import { forgetPassword } from '../../../actions/auth.action'
import InputComponent from '../../../components/InputComponent/InputComponent'
import Copyright from '../../../components/Copyright/Copyright'

const ForgotPasswordPage = (props) => {
  const { forgetPassword } = props
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({ email: '' })

  const handleBackButtonClick = () => navigate(-1)

  const onSubmitClick = async (e) => {
    e.preventDefault()
    const isForgetPassSuccess = await forgetPassword(formData.email)
    if (isForgetPassSuccess) {
      sessionStorage.setItem('prevRoute', location.pathname)
      navigate('/verify-otp')
    }
  }

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
            <div className="FormHeadingContainer">Forgot your password?</div>
            <div className="FormSubHeadingText">Don’t worry, happens to all of us. Enter your email below to recover your password.</div>
            <form onSubmit={onSubmitClick} className="ForgetPassFormInputsContainer">
              <InputComponent type="email" name="email" id="email" user={formData} setUser={setFormData} placeholder="Enter Your Email" />
              <div className="ForgetPassSubmitButtonContainer">
                <button className="ForgetPassSubmitButton" type="submit">
                  Submit
                </button>
              </div>
              <div className="DividerContainer">
                <div className="Divider1" />
                <div className="OrLoginWithContainer">Or login with</div>
                <div className="Divider2" />
              </div>
              <div className="GoogleSignUpButton">
                <p className="ContinueWithText">Continue with</p>
                <img src={SVG.GoogleIcon} className="GoogleIcon" alt="Google" />
              </div>
            </form>
          </div>
        </div>
        <Copyright />
      </div>
      <div className="DesignContainer">
        <img src={SVG.AuthDesignSection} className="AuthDesignImage" alt="Auth Design" />
      </div>
    </div>
  )
}

export default connect(null, { forgetPassword })(memo(ForgotPasswordPage))
