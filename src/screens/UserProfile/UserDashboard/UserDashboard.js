import React, { useState, useEffect } from 'react'
import { memo } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProfile, updateProfile, deleteProfile, getOtherUserProfile } from '../../../actions/profile.action'
import { ToastContainer, toast } from 'react-toastify'
import { SVG } from '../../../assets'
import { images } from '../../../assets/images'
import profileBackground from '../../../data/Images/profileBackground.png'
import DatePicker from '../../../components/DatePicker/DatePicker'
import {
  DashboardContainer,
  ImageContainer,
  BackgroundImage,
  ProfilePic,
  ImgProfile,
  EditPic,
  DashboardHeader,
  HeaderTitle,
  DashboardContent,
  UserInfoColumns,
  UserInfoColumn,
  UserInfoItem,
  DashboardActions,
  EditButton,
  SaveButton,
  CancelButton,
  DeleteButton,
  Container,
  ProfilePicContainer,
  NameContainer,
  MakePrivate,
  MakePrivateContainer,
  OtpContainer,
} from './UserDashboard.styled'
import Modal from '../../../components/Modal/Modal'

import { editSecondaryKey, logout } from '../../../actions/auth.action'
import Dropdown from '../../../components/Dropdown/Dropdown'
import { Input, Label, StyledToastContainer, Value } from '../../../styles/Global'
import OtpComponent from '../../AuthFlow/VerifyCode/OtpComponent'
import Overlay from '../../../components/Overlay/overlay'

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  loading: state.profileReducer.loading,
})

const UserDashboard = ({ profile, getProfile, updateProfile, deleteProfile, userId, getOtherUserProfile, editSecondaryKey, logout }) => {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({})
  const [selectedProfilePic, setSelectedProfilePic] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [deleteModal, setDeleteModal] = useState(false)
  const [otpVerify, setOtpVerify] = useState(false)
  const [showPersonaDropDown, setShowPersonaDropDown] = useState(false)
  const [showGenderDropDown, setShowGenderDropDown] = useState(false)

  const [isUserKeyChanged, setIsUserChanged] = useState(false)

  const isLoginWithEmail = formData.isLoginWithEmail || formData.isSignupWithEmail
  useEffect(() => {
    if (!userId) {
      getProfile()
    }
  }, [getProfile])

  useEffect(() => {
    setFormData(profile)
  }, [profile])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'phoneNumber' || name === 'emailId') {
      setIsUserChanged(true)
    }
    setFormData((prevData) => ({
      ...formData,
      [name]: value,
    }))
  }

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const mapDataToApi = async () => {
    const formDataNew = new FormData()
    if (imageFile) {
      formDataNew.append('profilePic', imageFile)
    }
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'profilePic') {
        return
      }
      formDataNew.append(key, value)
    })

    const res = await updateProfile(formDataNew, true)
    if (res) {
      toast.success('Profile updated successfully!', { autoClose: 1500 })
    } else {
      toast.error('Failed to update profile. Please try again.', { autoClose: 1500 })
    }
    setIsEditing(false)
    setSelectedProfilePic(null)
  }
  const handleSave = async (e) => {
    if (isUserKeyChanged) {
      await editSecondaryKey(isLoginWithEmail ? { phoneNumber: `+91${formData.phoneNumber}` } : { emailId: formData.emailId })
      setIsUserChanged(false)
      setOtpVerify(true)
    } else {
      onSubmitOtp(e)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setFormData(profile)
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
  const handleDeleteAccount = async () => {
    setDeleteModal(false)
    const res = await deleteProfile()
    if (res) {
      await logout()
      toast.success('Account deleted successfully!', { autoClose: 1500 })
    } else {
      toast.error('failed to delete profile')
    }
  }

  const handleCancelDelete = () => {
    setDeleteModal(false)
  }
  const onResendOtpClick = () => {}

  const onSubmitOtp = async (e) => {
    e.preventDefault()
    await mapDataToApi()

    setOtpVerify(false)
  }
  return (
    <Container>
      <DashboardContainer>
        <DashboardHeader>
          <HeaderTitle>User Profile</HeaderTitle>
        </DashboardHeader>
        <DashboardContent>
          <UserInfoColumns>
            <UserInfoColumn>
              <UserInfoItem>
                <Label>Persona</Label>
                {isEditing ? (
                  <>
                    <Input
                      name="persona"
                      value={formData?.persona || ''}
                      onChange={handleChange}
                      onFocus={() => setShowPersonaDropDown(true)}
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
                  </>
                ) : (
                  <Value>{profile?.persona ?? 'Traveller'}</Value>
                )}
              </UserInfoItem>
              <UserInfoItem>
                <Label>Gender</Label>
                {isEditing ? (
                  <>
                    <Input
                      name="gender"
                      value={formData?.gender || ''}
                      onChange={handleChange}
                      onFocus={() => setShowGenderDropDown(true)}
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
                  </>
                ) : (
                  <Value>{profile?.gender ?? 'Prefer not to say'}</Value>
                )}
              </UserInfoItem>

              <UserInfoItem>
                <Label>Date of Birth</Label>
                {isEditing ? (
                  <DatePicker
                    pickerType="dob"
                    inputValues={formData?.dateOfBirth || ''}
                    setInputValues={(value) => handleInputChange('dateOfBirth', value)}
                    onValue={'dateOfBirth'}
                    placeholderValue={'Select Your Date of Birth'}
                    fontSize={`1rem`}
                    padding={`2.5%`}
                    borderRadius={'20px'}
                    backgroundColor={'#f4f4f4'}
                    border={'2px solid #f4f4f4'}
                  />
                ) : (
                  <Value>{profile?.dateOfBirth ?? '01-01-2000'}</Value>
                )}
              </UserInfoItem>
            </UserInfoColumn>
            <UserInfoColumn>
              <UserInfoItem>
                <MakePrivateContainer>
                  <Label>Email</Label>
                  {isEditing && (
                    <MakePrivate>
                      <div style={{ fontSize: '12px' }}>Make Private</div>

                      <input
                        type="checkbox"
                        checked={formData.isEmailPrivate || false}
                        onChange={(e) => setFormData((prev) => ({ ...prev, isEmailPrivate: e.target.checked }))}
                        style={{
                          marginLeft: '10px',
                          width: '15px',
                          height: '15px',
                          cursor: 'pointer',
                          accentColor: 'var(--color-primary)',
                        }}
                      />
                    </MakePrivate>
                  )}
                </MakePrivateContainer>
                {isEditing ? (
                  <Input name="emailId" value={formData.emailId || ''} onChange={handleChange} readOnly={isLoginWithEmail} />
                ) : (
                  <Value>{profile?.emailId ?? '--'}</Value>
                )}
              </UserInfoItem>
              <UserInfoItem>
                <MakePrivateContainer>
                  <Label>Phone Number</Label>
                  {isEditing && (
                    <MakePrivate>
                      <div style={{ fontSize: '12px' }}>Make Private</div>

                      <input
                        type="checkbox"
                        checked={formData.isPhoneNumberPrivate || false}
                        onChange={(e) => setFormData((prev) => ({ ...prev, isPhoneNumberPrivate: e.target.checked }))}
                        style={{
                          marginLeft: '10px',
                          width: '15px',
                          height: '15px',
                          cursor: 'pointer',
                          accentColor: 'var(--color-primary)',
                        }}
                      />
                    </MakePrivate>
                  )}
                </MakePrivateContainer>
                {isEditing ? (
                  <Input name="phoneNumber" value={formData.phoneNumber || ''} onChange={handleChange} readOnly={!isLoginWithEmail} />
                ) : (
                  <Value>{!!profile?.phoneNumber?.length ? ` ${profile?.phoneNumber}` : '--'}</Value>
                )}
              </UserInfoItem>
            </UserInfoColumn>
          </UserInfoColumns>
          <ProfilePicContainer>
            <ProfilePic>
              <ImgProfile
                src={selectedProfilePic || profile?.profilePic?.[0]?.preSignedUrl || images.defaultProfileImg}
                alt="User Profile"
              />
              {isEditing && <EditPic src={SVG.editPic} alt="Edit" onClick={() => document.getElementById('profilePicInput').click()} />}
              <input id="profilePicInput" type="file" style={{ display: 'none' }} accept="image/*" onChange={handleProfilePicChange} />
            </ProfilePic>
            <NameContainer>
              <Label width={isEditing ? '100%' : 'auto'}>Name</Label>
              {isEditing ? (
                <Input name="username" value={formData.username || ''} onChange={handleChange} />
              ) : (
                <Value>{profile?.username}</Value>
              )}
            </NameContainer>
          </ProfilePicContainer>
        </DashboardContent>
        <DashboardActions>
          {isEditing ? (
            <>
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
              <SaveButton onClick={handleSave}>Save Changes</SaveButton>
            </>
          ) : (
            <>
              <DeleteButton onClick={() => setDeleteModal(true)}>
                <img src={SVG.deleteIcon} alt="Delete" /> Delete Account
              </DeleteButton>
              <EditButton onClick={() => setIsEditing(true)}>
                <img src={SVG.editButton} alt="Edit" /> Edit Your Profile
              </EditButton>
            </>
          )}
        </DashboardActions>
        <StyledToastContainer />
      </DashboardContainer>

      {otpVerify && (
        <Overlay>
          <OtpContainer>
            <OtpComponent
              formData={formData}
              setFormData={setFormData}
              onResendClick={onResendOtpClick}
              onSubmit={onSubmitOtp}
              name="otp"
            />
          </OtpContainer>
        </Overlay>
      )}
      {deleteModal && (
        <Modal
          message="Are you sure you want to delete your account? This action cannot be undone."
          onConfirm={handleDeleteAccount}
          onCancel={handleCancelDelete}
        />
      )}
    </Container>
  )
}

export default connect(mapStateToProps, { getProfile, updateProfile, deleteProfile, editSecondaryKey, logout })(memo(UserDashboard))
