import React, { useContext, useState, memo } from 'react'
import './ForgotPassword.css'
import { useNavigate } from 'react-router-dom'
import { UserLoginContext } from '../../Utils/Context/LoggedInUserContext'
import { SVG } from '../../assets'

const ForgotPasswordPage = () => {
  const { setLoggedInUserValues } = useContext(UserLoginContext)
  const navigate = useNavigate()

  const [isLoading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleBackButtonClick = () => {
    console.log('clikced')
  }

  const onSubmitClick = () => {
    console.log('clikced')
  }

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
              <p className="ForgetPassBackButtonText">Back to login</p>
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
              <form>
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
                  <button className="ForgetPassSubmitButton" onClick={onSubmitClick}>
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
    </div>
  )
}

export default memo(ForgotPasswordPage)
