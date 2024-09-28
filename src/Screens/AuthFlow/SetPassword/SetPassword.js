import React, { useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { SVG } from '../../../assets'
import './SetPassword.css'

import '../AuthFlow.css'
import { connect } from 'react-redux'
import { resetPassword } from '../../../actions/auth.action'
import { toast, ToastContainer } from 'react-toastify'
import InputComponent from '../InputComponent/InputComponent'
import { Input } from 'antd'
import Copyright from '../../../components/Copyright/Copyright'

const SetPassword = ({ resetPassword }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ password: '',reEnterPassword:'' })
  const [securePasswordText, setSecurePasswordText] = useState(true)
  const [secureReEnterPasswordText, setSecureReEnterPasswordText] = useState(true)


  const handleBackButtonClick = () => navigate(-1)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.reEnterPassword) {
      toast.error('Passwords do not match', { autoClose: 1500 })
    }
    const isResetComplete = await resetPassword(formData.password)
    if (isResetComplete) {
      navigate('/')
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
            <div className="FormHeadingContainer">Set a password</div>
            <div className="FormSubHeadingText">
            Your previous password has been reseted. Please set a new password for your account.
            </div>
            <div className="SetPassPageFormInputsContainer">
              <form onSubmit={onSubmit}>
                <InputComponent 
                  label="Create Password"
                  
                    type={securePasswordText ? 'password' : 'text'}
                    name="password"
                    
                    user={formData}
                    setUser={setFormData}
                    isPasswordField={true}
                    placeholder="Enter Your Password"
                    required secureTextState={securePasswordText} setSecureTextState={setSecurePasswordText} />
                
                <InputComponent
                  label ='Re-enter Password'
                  
                    type={secureReEnterPasswordText ? 'password' : 'text'}
                    name="reEnterPassword"
                    user={formData}
                    setUser={setFormData}
                    placeholder="Re-Enter Your Password"
                    isPasswordField={true}
                  secureTextState={secureReEnterPasswordText} setSecureTextState={setSecureReEnterPasswordText} />
                
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
        <Copyright />
      </div>
      <div className="DesignContainer">
        <img src={SVG.AuthDesignSection} className="AuthDesignImage" alt="Auth Design" />
      </div>
      <ToastContainer />
    </div>
  )
}

export default connect(null, { resetPassword })(memo(SetPassword))
