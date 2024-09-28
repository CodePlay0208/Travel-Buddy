import React, { useContext, useState, memo, useCallback } from 'react'
import './InputComponent.css'

import { SVG } from '../../assets'

const InputComponent = ({
  label,
  type,
  name,
  id,
  placeholder,
  isRequired,
  user,
  setUser,
  isPasswordField,
  secureTextState,
  setSecureTextState,
}) => {
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const PasswordEyeComponent = memo(() => {
    const handlePasswordEyeIconClick = () => {
      setSecureTextState((prevState) => !prevState)
    }

    return (
      <div className="inputEyeContainer" role="button" onClick={handlePasswordEyeIconClick}>
        {secureTextState ? <img src={SVG.EyeIcon} className="inputEyeIcon" /> : <img src={SVG.EyeSlashIcon} className="inputEyeIcon" />}
      </div>
    )
  })
  return (
    <div className="inputContainer">
      <label className="inputLabel">{label}</label>
      <input
        className="inputComponent"
        type={type}
        name={name}
        id={id}
        value={user[name]}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        required
      />
      {isPasswordField ? <PasswordEyeComponent /> : <div></div>}
    </div>
  )
}

export default InputComponent
