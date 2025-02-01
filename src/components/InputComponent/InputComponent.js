import React, { memo, useCallback } from 'react'
import { SVG } from '../../assets'
import { Container, InputLabel, InputField, InputFieldContainer, PassowrdEyeContainer, PasswordEyeImage } from './InputComponent.styled'

const PasswordEyeComponent = memo((props) => {
  const { secureTextState, setSecureTextState } = props

  const handlePasswordEyeIconClick = useCallback(() => {
    setSecureTextState((prevState) => !prevState)
  }, [])

  return (
    <PassowrdEyeContainer role="button" onClick={handlePasswordEyeIconClick}>
      <PasswordEyeImage src={secureTextState ? SVG.EyeIcon : SVG.EyeSlashIcon} alt={secureTextState ? 'Show password' : 'Hide password'} />
    </PassowrdEyeContainer>
  )
})

const InputComponent = ({
  label,
  type,
  name,
  id,
  placeholder,
  isRequired = true,
  user,
  setUser,
  isPasswordField,
  secureTextState,
  setSecureTextState,
  customContainerStyles,
  customLabelStyles,
  customInputFieldStyles,
}) => {
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <Container customContainerStyles={customContainerStyles}>
      <InputLabel customLabelStyles={customLabelStyles}>
        {label}
        {isRequired && <span>*</span>}
      </InputLabel>
      <InputFieldContainer>
        <InputField
          type={type}
          name={name}
          id={id}
          value={user[name]}
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          required
          customInputFieldStyles={customInputFieldStyles}
        />
        {isPasswordField ? <PasswordEyeComponent secureTextState={secureTextState} setSecureTextState={setSecureTextState} /> : null}
      </InputFieldContainer>
    </Container>
  )
}

export default InputComponent
