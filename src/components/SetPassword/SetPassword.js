import React, { useContext, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserLoginContext } from '../../Utils/Context/UserLoginContext'
import { SVG } from '../../assets'
import './SetPassword.css'

const SetPassword = () => {
  const { setLoggedInUserValues } = useContext(UserLoginContext)
  const navigate = useNavigate()

  const [isLoading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [reEnterPassword, setReEnterPassword] = useState('')
  const [securePasswordText, setSecurePasswordText] = useState(true)
  const [secureReEnterPasswordText, setSecureReEnterPasswordText] = useState(true)

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value)
  }

  const PasswordEyeComponent = memo((props) => {
    const { secureTextState, setSecureTextState } = props

    const handlePasswordEyeIconClick = () => {
      setSecureTextState((prevState) => !prevState)
    }

    return (
      <div className="SetPassPagePasswordEyeContainer" role="button" onClick={handlePasswordEyeIconClick}>
        {secureTextState ? (
          <img src={SVG.EyeIcon} className="SetPassPagePasswordEyeIcon" />
        ) : (
          <img src={SVG.EyeSlashIcon} className="SetPassPagePasswordEyeIcon" />
        )}
      </div>
    )
  })

  return (
    <div className="SetPassPageContainer">
      <div className="SetPassPageFormAndCopyrightContainer">
        <div className="SetPassPageFormAndTitleContainer">
          <div className="SetPassPageTitleContainer">
            <p className="SetPassPageTitleText">Travmigoz</p>
          </div>
          <div className="SetPassPageFormContainer">
            <div className="SetPassPageFormHeadingContainer">
              <p className="SetPassPageFormHeadingText">Set a password</p>
            </div>
            <div className="SetPassPageFormSubHeadingContainer">
              <p className="SetPassPageFormSubHeadingText">
                Your previous password has been reseted. Please set a new password for your account.
              </p>
            </div>
            <div className="SetPassPageFormInputsContainer">
              <form>
                <div className="SetPassPagePasswordInputContainer">
                  <label className="SetPassPagePasswordText">Create Password</label>
                  <input
                    className="SetPassPagePasswordInput"
                    type={securePasswordText ? 'password' : 'text'}
                    name="password"
                    value={password}
                    onChange={(e) => handleInputChange(e, setPassword)}
                    placeholder="Enter Your Password"
                    required
                  />
                  <PasswordEyeComponent secureTextState={securePasswordText} setSecureTextState={setSecurePasswordText} />
                </div>
                <div className="SetPassPageReEnterPasswordInputContainer">
                  <label className="SetPassPageReEnterPasswordText">Re-enter Password</label>
                  <input
                    className="SetPassPageReEnterPasswordInput"
                    type={secureReEnterPasswordText ? 'password' : 'text'}
                    name="password"
                    value={reEnterPassword}
                    onChange={(e) => handleInputChange(e, setReEnterPassword)}
                    placeholder="Re-Enter Your Password"
                    required
                  />
                  <PasswordEyeComponent secureTextState={secureReEnterPasswordText} setSecureTextState={setSecureReEnterPasswordText} />
                </div>
                <div className="SetPassPageSetPasswordButtonContainer">
                  <button className="SetPassPageSetPasswordButton">
                    <p className="SetPassPageSetPasswordText">Set password</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="SetPassPageCopyrightTextContainer"></div>
        </div>
        <div className="SetPassPageCopyrightTextContainer">
          <p className="SetPassPageCopyrightText">
            &copy; 2024 <span className="SetPassPageTravmigozCopyrightText">Travmigoz</span>. All Rights Reserved
          </p>
        </div>
      </div>
      <div className="SetPassPageDesignContainer">
        <img src={SVG.AuthDesignSection} className="SetPassPageAuthDesignImage" alt="AuthDesignImage" />
      </div>
    </div>
  )
}

export default memo(SetPassword)
