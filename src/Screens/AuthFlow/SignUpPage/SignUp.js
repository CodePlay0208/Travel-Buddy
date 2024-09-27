import React, { useState, memo, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import { register } from '../../actions/auth.action'

import { SVG } from '../../assets'
import './SignUp.css'

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading,
})

const SignUp = (props) => {
  const { register } = props
  const [securePasswordText, setSecurePasswordText] = useState(true)
  const [secureConfirmPasswordText, setSecureConfirmPasswordText] = useState(true)
  const [isTermsAggrementChecked, setIsTermsAggrementChecked] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleTermsAgreementCheck = () => {
    setIsTermsAggrementChecked((prevState) => !prevState)
  }
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    termsCheck: isTermsAggrementChecked,
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const checkValueIsValid = (value) => {
    if (value === '' || value === undefined || value === null) {
      return false
    }
    return true
  }

  const PasswordEyeComponent = memo((props) => {
    const { secureTextState, setSecureTextState } = props

    const handlePasswordEyeIconClick = () => {
      setSecureTextState((prevState) => !prevState)
    }

    return (
      <div className="SignUpPasswordEyeContainer" role="button" onClick={handlePasswordEyeIconClick}>
        {secureTextState ? (
          <img src={SVG.EyeIcon} className="SignUpPasswordEyeIcon" />
        ) : (
          <img src={SVG.EyeSlashIcon} className="SignUpPasswordEyeIcon" />
        )}
      </div>
    )
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validEmail = checkValueIsValid(formData.email)
    const validPassword = checkValueIsValid(formData.password)

    if (!(validEmail && validPassword)) {
      toast.error('email-id or password not valid', {
        autoClose: 1500,
      })
      return
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match", {
        autoClose: 1500,
      })
      return
    }
    const isAuth = await register(formData)

    if (isAuth) {
      sessionStorage.setItem('prevRoute', location.pathname)
      navigate('/verify-otp')
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //
  //   var validEmail = checkValueIsValid(formData.email)
  //   var validPassword = checkValueIsValid(formData.password)
  //   console.log(validEmail, validPassword)
  //   console.log(formData.password, formData.confirmPassword)
  //
  //   if (!(validEmail && validPassword)) {
  //     toast.error('EmailId or Password Not Valid', {
  //       autoClose: 1500,
  //     })
  //     return
  //   }
  //
  //   if (formData.password !== formData.confirmPassword) {
  //     toast.error("Passwords Don't match", {
  //       autoClose: 1500,
  //     })
  //     return
  //   }
  //
  //   fetch('http://localhost:4000/login/signUp', {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       userEmail: formData.email,
  //       password: formData.password,
  //     }),
  //   })
  //     .then((response) => {
  //       console.log('asa')
  //       if (!response.ok) {
  //         return response.json().then((error) => {
  //           throw new Error(error)
  //         })
  //       }
  //       return response.json()
  //     })
  //     .then((data) => {
  //       if (!data.success) {
  //         toast.error('User Already Exist', {
  //           autoClose: 1000,
  //         })
  //         return
  //       }
  //       const previousURL = sessionStorage.getItem('redirectUrl') || '/'
  //       sessionStorage.removeItem('redirectUrl')
  //       // Handle successful login on frontend if needed
  //       console.log(previousURL)
  //       toast.success('User Signed In Successfully', {
  //         autoClose: 1000,
  //       })
  //
  //       setTimeout(() => {
  //         navigate(previousURL)
  //       }, 800)
  //     })
  //     .catch((err) => {
  //       console.log('cant send OTP', err)
  //       toast.error('User Already Exist', {
  //         autoClose: 1500,
  //       })
  //       return
  //     })
  // }
  return (
    <div className="SignUpContainer">
      <div className="SignUpFormAndCopyrightContainer">
        <div className="SignUpFormAndTitleContainer">
          <div className="SignUpTitleContainer">
            <p className="SignUpTitleText">Travmigoz</p>
          </div>
          <div className="SignUpFormContainer">
            <div className="SignUpFormHeadingContainer">
              <p className="SignUpFormHeadingText">Sign Up</p>
            </div>
            <div className="SignUpFormSubHeadingContainer">
              <p className="SignUpFormSubHeadingText">Let’s get you all set up so you can access your account.</p>
            </div>
            <div className="SignUpFormInputsContainer">
              <form action="post" onSubmit={handleSubmit}>
                <div className="SignUpNameInputContainer">
                  <div className="SignUpFirstNameInputContainer">
                    <label className="SignUpFirstNameLabel">First Name</label>
                    <input
                      className="SignUpFirstNameInput"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter Your First Name"
                      required
                    />
                  </div>
                  <div className="SignUpLastNameInputContainer">
                    <label className="SignUpLastNameLabel">Last Name</label>
                    <input
                      className="SignUpLastNameInput"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter Your Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="SignUpEmailAndPhoneContainer">
                  <div className="SignUpEmailInputContainer">
                    <label className="SignUpEmailText">Email</label>
                    <input
                      className="SignUpEmailInput"
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="SignUpPhoneInputContainer">
                    <label className="SignUpPhoneNumberLabel">Phone Number</label>
                    <input
                      className="SignUpPhoneNumberInput"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      placeholder="Enter Your Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="SignUpPasswordInputContainer">
                  <label className="SignUpPasswordText">Password</label>
                  <input
                    className="SignUpPasswordInput"
                    type={securePasswordText ? 'password' : 'text'}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    required
                  />
                  <PasswordEyeComponent secureTextState={securePasswordText} setSecureTextState={setSecurePasswordText} />
                </div>
                <div className="SignUpConfirmPasswordInputContainer">
                  <label className="SignUpConfirmPasswordText">Confirm Password</label>
                  <input
                    className="SignUpConfirmPasswordInput"
                    type={secureConfirmPasswordText ? 'password' : 'text'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Your Password"
                    required
                  />
                  <PasswordEyeComponent secureTextState={secureConfirmPasswordText} setSecureTextState={setSecureConfirmPasswordText} />
                </div>
                <div className="SignUpTermsAgreementContainer">
                  <input
                    type="checkbox"
                    name="termsCheck"
                    value={formData.termsCheck}
                    checked={isTermsAggrementChecked}
                    onChange={toggleTermsAgreementCheck}
                    required
                  />
                  <label className="SignUpTermsAgreementText">
                    I agree to all the{' '}
                    <a href="#" className="SignUpTermsLink">
                      <span className="SignUpLinkText"> Terms </span>
                    </a>{' '}
                    and{' '}
                    <a href="#" className="SignUpTermsLink">
                      <span className="SignUpLinkText"> Privacy Policies </span>
                    </a>
                  </label>
                </div>
                <div className="SignUpCreateAccountContainer">
                  <button type="submit" className="SignUpCreateAccountButton">
                    Create Account
                  </button>
                </div>
                <div className="SignUpAlreadyHaveContainer">
                  <p className="SignUpAlreadyHaveText">Already have an account?</p>
                  <a href="/login" className="SignUpLoginLink">
                    <p className="SignUpLoginText">Login</p>
                  </a>
                </div>
                <div className="SignUpDividerContainer">
                  <div className="SignUpDivider1" />
                  <div className="SignUpOrLoginWithContainer">
                    <p className="SignUpOrLoginWithText">Or login with</p>
                  </div>
                  <div className="SignUpDivider2" />
                </div>
                <div className="SignUpMoreSignUpButtonContainer">
                  <div className="SignUpGoogleSignUpButton">
                    <p className="SignUpContinueWithText">Continue with</p>
                    <img src={SVG.GoogleIcon} className="SignUpGoogleIcon" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="SignUpCopyrightTextContainer"></div>
        </div>
        <div className="SignUpCopyrightTextContainer">
          <p className="SignUpCopyrightText">
            &copy; 2024 <span className="SignUpTravmigozCopyrightText">Travmigoz</span>. All Rights Reserved
          </p>
        </div>
      </div>
      <div className="SignUpDesignContainer">
        <img src={SVG.AuthDesignSection} className="SignUpAuthDesignImage" alt="AuthDesignImage" />
      </div>
      <ToastContainer />
    </div>
  )
}

export default connect(mapStateToProps, { register })(memo(SignUp))
