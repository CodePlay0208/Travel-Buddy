import React, { useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { SVG } from '../../../assets'
import './SetPassword.css'
import { connect } from 'react-redux'
import { resetPassword } from '../../../actions/auth.action'
import { toast, ToastContainer } from 'react-toastify'

const SetPassword = ({ resetPassword }) => {
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [reEnterPassword, setReEnterPassword] = useState('')
  const [securePasswordText, setSecurePasswordText] = useState(true)
  const [secureReEnterPasswordText, setSecureReEnterPasswordText] = useState(true)

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== reEnterPassword) {
      toast.error('Passwords do not match', { autoClose: 1500 })
    }
    const isResetComplete = await resetPassword(password)
    if (isResetComplete) {
      navigate('/')
    }
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
              <form onSubmit={onSubmit}>
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
                  <button className="SetPassPageSetPasswordButton" type="submit">
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
      <ToastContainer />
    </div>
  )
}

export default connect(null, { resetPassword })(memo(SetPassword))
