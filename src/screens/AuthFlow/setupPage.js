import React, { useState, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import { register } from '../../actions/auth.action'

import { images } from '../../assets'
import {
  Container,
  FormAndCopyrightContainer,
  FormAndTitleContainer,
  TitleContainer,
  FormContainer,
  FormHeadingContainer,
  FormSubHeadingText,
  MainButtonAuth,
  DesignContainer,
  AuthDesignImage,
  Form,
  SupportingImg,
  VerifyCodeFormInputsContainer,
} from './AuthFlow.styled'
import InputComponent from '../../components/InputComponent/InputComponent'
import Copyright from '../../components/Copyright/Copyright'
import { InputFieldsContainer } from './LoginPage/loginPage.styled'
import Dropdown from '../../components/Dropdown/Dropdown'
import { Input, Label } from '../../styles/Global'
import DatePicker from '../../components/DatePicker/DatePicker'
import { updateProfile } from '../../actions/profile.action'

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isLoading: state.authReducer.isLoading,
})

const SetupPage = (props) => {
  const { updateProfile } = props
  const navigate = useNavigate()
  const location = useLocation()

  const [showPersonaDropDown, setShowPersonaDropDown] = useState(false)
  const [showGenderDropDown, setShowGenderDropDown] = useState(false)

  const [formData, setFormData] = useState({
    persona: '',
    gender: '',
    dateOfBirth: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedFormData = {
      ...formData,
      persona: formData.persona.toLowerCase(),
      gender: formData.gender.toLowerCase(),
    }
    await updateProfile(updatedFormData)

    navigate('/')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...formData,
      [name]: value,
    }))
  }
  return (
    <Container>
      <FormAndCopyrightContainer>
        <FormAndTitleContainer>
          <TitleContainer
            onClick={() => {
              navigate('/')
            }}
          >
            Travmigoz
          </TitleContainer>
          <FormContainer>
            <FormHeadingContainer> Setting up your Profile</FormHeadingContainer>
            <FormSubHeadingText>
              Welcome to <span>Travmigoz</span>- setup your profile.
            </FormSubHeadingText>
            <VerifyCodeFormInputsContainer>
              <Form onSubmit={handleSubmit}>
                <InputFieldsContainer>
                  <InputFieldsContainer>
                    <Label>Persona</Label>
                    <Input
                      name="persona"
                      value={formData?.persona || ''}
                      onChange={handleChange}
                      onFocus={() => setShowPersonaDropDown(true)}
                      readOnly
                      autoComplete="false"
                      placeholder="Choose Persona"
                    />
                    {showPersonaDropDown && (
                      <Dropdown
                        data={[{ value: 'Traveller' }, { value: 'Agent' }]}
                        selectSuggestion={(selected) => {
                          handleChange({
                            target: { name: 'persona', value: selected.value },
                          })
                          setShowPersonaDropDown(false)
                        }}
                        setShowDropdown={setShowPersonaDropDown}
                      />
                    )}
                  </InputFieldsContainer>
                  <InputFieldsContainer>
                    <Label>Gender</Label>
                    <Input
                      name="gender"
                      value={formData?.gender || ''}
                      onChange={handleChange}
                      onFocus={() => setShowGenderDropDown(true)}
                      readOnly
                      autoComplete="false"
                      placeholder="Choose Gender"
                    />
                    {showGenderDropDown && (
                      <Dropdown
                        data={[{ value: 'Male' }, { value: 'Female' }, { value: 'Others' }]}
                        selectSuggestion={(selected) => {
                          handleChange({
                            target: { name: 'gender', value: selected.value },
                          })
                          setShowGenderDropDown(false)
                        }}
                        setShowDropdown={setShowGenderDropDown}
                      />
                    )}
                  </InputFieldsContainer>
                  <InputFieldsContainer>
                    <Label>Date of Birth</Label>
                    <DatePicker
                      pickerType="dob"
                      inputValues={formData.dateOfBirth}
                      setInputValues={(value) => {
                        setFormData({
                          ...formData,
                          dateOfBirth: value,
                        })
                      }}
                      onValue={'dateOfBirth'}
                      placeholderValue={'Your Date of Birth'}
                    />
                  </InputFieldsContainer>
                </InputFieldsContainer>

                <MainButtonAuth onClick={handleSubmit} type="submit">
                  Sign up
                </MainButtonAuth>
              </Form>
              <SupportingImg src={images.verify_code_image} alt="supporting" />
            </VerifyCodeFormInputsContainer>
          </FormContainer>
        </FormAndTitleContainer>
        <Copyright />
      </FormAndCopyrightContainer>
      <DesignContainer>
        <AuthDesignImage src={images.auth_side_image} alt="Auth Design" />
      </DesignContainer>
      <ToastContainer />
    </Container>
  )
}

export default connect(mapStateToProps, { updateProfile })(memo(SetupPage))
