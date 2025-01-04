import React, { useState, useEffect } from 'react'
import { memo } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProfile, updateProfile, deleteProfile } from '../../../actions/profile.action'
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
  Label,
  Value,
  Input,
  DashboardActions,
  EditButton,
  SaveButton,
  CancelButton,
  DeleteButton,
  Container,
  ProfilePicContainer,
  NameContainer,
} from './UserDashboard.styled'
import Modal from '../../../components/Modal/Modal'

import { logout } from '../../../actions/auth.action'
import Dropdown from '../../../components/Dropdown/Dropdown'

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  loading: state.profileReducer.loading,
})

const UserDashboard = ({ profile, getProfile, updateProfile, deleteProfile }) => {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({})
  const [selectedProfilePic, setSelectedProfilePic] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [deleteModal, setDeleteModal] = useState(false)
  const [showPersonaDropDown, setShowPersonaDropDown] = useState(false)
  const [showGenderDropDown, setShowGenderDropDown] = useState(false)

  useEffect(() => {
    getProfile()
  }, [getProfile])

  useEffect(() => {
    setFormData(profile)
  }, [profile])

  const handleChange = (e) => {
    const { name, value } = e.target
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

  const handleSave = async () => {
    try {
      if (imageFile) {
        const formDataNew = new FormData()
        formDataNew.append('profilePic', imageFile)
        Object.entries(formData).forEach(([key, value]) => {
          formDataNew.append(key, value)
        })
        await updateProfile(formDataNew, true)
      } else {
        await updateProfile(formData)
      }
      toast.success('Profile updated successfully!', { autoClose: 1500 })
      setIsEditing(false)
      setSelectedProfilePic(null)
    } catch (e) {
      toast.error('Failed to update profile. Please try again.', { autoClose: 1500 })
      console.error('Error updating profile:', e)
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
    await deleteProfile()
    logout()
    navigate('/')
    window.location.reload()
    toast.success('Account deleted successfully!', { autoClose: 1500 })
  }

  const handleCancelDelete = () => {
    setDeleteModal(false)
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
                      onBlur={(e) => {
                        setTimeout(() => setShowPersonaDropDown(false), 1000)
                      }}
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
                      />
                    )}
                  </>
                ) : (
                  <Value>{profile?.persona ?? 'Traveller'}</Value>
                )}
              </UserInfoItem>
              <UserInfoItem>
                <Label>Phone Number</Label>
                {isEditing ? (
                  <Input name="phoneNumber" value={formData.phoneNumber || ''} onChange={handleChange} />
                ) : (
                  <Value>+91 {profile?.phoneNumber}</Value>
                )}
              </UserInfoItem>
              <UserInfoItem>
                <Label>Date of Birth</Label>
                {isEditing ? (
                  <DatePicker
                    inputValues={formData?.dateOfBirth || ''}
                    setInputValues={(value) => handleInputChange('dateOfBirth', value)}
                    onValue={'dateOfBirth'}
                    placeholderValue={'Select Your Date of Birth'}
                    fontSize={`1vw`}
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
                <Label>Email</Label>
                {isEditing ? (
                  <Input name="emailId" value={formData.emailId || ''} onChange={handleChange} />
                ) : (
                  <Value>{profile?.emailId}</Value>
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
                      onBlur={(e) => {
                        setTimeout(() => setShowGenderDropDown(false), 1000)
                      }}
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
                      />
                    )}
                  </>
                ) : (
                  <Value>{profile?.gender ?? 'Prefer not to say'}</Value>
                )}
              </UserInfoItem>
            </UserInfoColumn>
          </UserInfoColumns>
          <ProfilePicContainer>
            <ProfilePic>
              <ImgProfile src={selectedProfilePic || profile?.profilePic[0] || images.defaultProfileImg} alt="User Profile" />
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
        <ToastContainer />
      </DashboardContainer>

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

export default connect(mapStateToProps, { getProfile, updateProfile, deleteProfile })(memo(UserDashboard))
