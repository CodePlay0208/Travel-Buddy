import React, { useState, memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import { register } from '../../actions/auth.action'

import { images, SVG } from '../../assets'
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
  LabelCust,
  ProfilePic,
  ProfileImage,
  EditPic,
  ProfileContainer,
  SetupPageSkip,
} from './AuthFlow.styled'
import InputComponent from '../../components/InputComponent/InputComponent'
import Copyright from '../../components/Copyright/Copyright'
import { InputFieldsContainer, LoginSignUpLink } from './LoginPage/loginPage.styled'
import Dropdown from '../../components/Dropdown/Dropdown'
import { Input, Label, StyledToastContainer } from '../../styles/Global'
import DatePicker from '../../components/DatePicker/DatePicker'
import { updateProfile } from '../../actions/profile.action'
import { InputLabel } from '../../components/InputComponent/InputComponent.styled'
import { VerifyCodeResendText } from './VerifyCode/VerifyCode.styled'
import { Logo } from '../../styles/Navbar.styles'

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isLoading: state.authReducer.isLoading,
})

const SetupPage = (props) => {
  const { updateProfile } = props
  const navigate = useNavigate()
  const location = useLocation()

  const [imageFile, setImageFile] = useState(null)

  const [selectedProfilePic, setSelectedProfilePic] = useState(null)
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
    if (imageFile) {
      const formDataNew = new FormData()
      formDataNew.append('profilePic', imageFile)
      Object.entries(updatedFormData).forEach(([key, value]) => {
        formDataNew.append(key, value)
      })
      await updateProfile(formDataNew, true)
    } else {
      await updateProfile(updatedFormData)
    }

    navigate('/')
  }

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0]
    setImageFile(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedProfilePic(reader.result)
      }
      reader.readAsDataURL(file)
    }
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
            <Logo src={images.travmigoz_logo} alt="travmigoz logo" />
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
                    <InputLabel>Persona</InputLabel>
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
                    <InputLabel>Gender</InputLabel>
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
                    <InputLabel>Date of Birth</InputLabel>
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
                  Save your Profile
                </MainButtonAuth>
              </Form>
              <ProfileContainer>
                <InputLabel>Profile</InputLabel>
                <ProfilePic>
                  <ProfileImage src={selectedProfilePic || images.defaultProfileImg} alt="User Profile" />
                  {<EditPic src={SVG.editPic} alt="Edit" onClick={() => document.getElementById('profilePicInput').click()} />}
                  <input id="profilePicInput" type="file" style={{ display: 'none' }} accept="image/*" onChange={handleProfilePicChange} />
                </ProfilePic>
              </ProfileContainer>
            </VerifyCodeFormInputsContainer>
            <FormSubHeadingText border="none">
              <SetupPageSkip
                onClick={() => {
                  navigate('/')
                }}
              >
                Skip Setup
              </SetupPageSkip>
            </FormSubHeadingText>
          </FormContainer>
        </FormAndTitleContainer>
        <Copyright />
      </FormAndCopyrightContainer>
      <DesignContainer>
        <AuthDesignImage src={images.auth_side_image} alt="Auth Design" />
      </DesignContainer>
      <StyledToastContainer />
    </Container>
  )
}

SetupPage.displayName = 'SetupPage'

export default connect(mapStateToProps, { updateProfile })(memo(SetupPage))
