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
} from './UserDashboard.styled'
import Modal from '../../../components/Modal/Modal'

import { logout } from '../../../actions/auth.action'

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

  useEffect(() => {
    getProfile()
  }, [getProfile])

  useEffect(() => {
    setFormData(profile)
  }, [profile])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
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
    <DashboardContainer>
      <ImageContainer>
        <BackgroundImage src={profileBackground} alt="Background" />
        <ProfilePic>
          <ImgProfile src={selectedProfilePic || profile?.profilePic[0] || images.defaultProfileImg} alt="User Profile" />
          {isEditing && <EditPic src={SVG.editPic} alt="Edit" onClick={() => document.getElementById('profilePicInput').click()} />}
          <input id="profilePicInput" type="file" style={{ display: 'none' }} accept="image/*" onChange={handleProfilePicChange} />
        </ProfilePic>
      </ImageContainer>

      <DashboardContainer>
        <DashboardHeader>
          <HeaderTitle>Account</HeaderTitle>
        </DashboardHeader>
        <DashboardContent>
          <UserInfoColumns>
            <UserInfoColumn>
              <UserInfoItem>
                <Label>Name</Label>
                {isEditing ? (
                  <Input name="username" value={formData.username || ''} onChange={handleChange} />
                ) : (
                  <Value>{profile?.username}</Value>
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
                    fontSize={`1.25vw`}
                    padding={`2.5%`}
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
                <Label>Age</Label>
                {isEditing ? (
                  <Input name="age" value={formData?.age || ''} onChange={handleChange} />
                ) : (
                  <Value>{profile?.age ?? '18'}</Value>
                )}
              </UserInfoItem>
              <UserInfoItem>
                <Label>Persona</Label>
                {isEditing ? (
                  <Input name="persona" value={formData?.persona || ''} onChange={handleChange} />
                ) : (
                  <Value>{profile?.persona ?? 'Traveller'}</Value>
                )}
              </UserInfoItem>
            </UserInfoColumn>
          </UserInfoColumns>
          <DashboardActions>
            {isEditing ? (
              <>
                <SaveButton onClick={handleSave}>Save Changes</SaveButton>
                <CancelButton onClick={handleCancel}>Cancel</CancelButton>
              </>
            ) : (
              <>
                <EditButton onClick={() => setIsEditing(true)}>
                  <img src={SVG.editButton} alt="Edit" /> Edit Your Profile
                </EditButton>
                <DeleteButton onClick={() => setDeleteModal(true)}>
                  <img src={SVG.deleteIcon} alt="Delete" /> Delete Account
                </DeleteButton>
              </>
            )}
          </DashboardActions>
        </DashboardContent>
        <ToastContainer />
      </DashboardContainer>
      {deleteModal && (
        <Modal
          message="Are you sure you want to delete your account? This action cannot be undone."
          onConfirm={handleDeleteAccount}
          onCancel={handleCancelDelete}
        />
      )}
    </DashboardContainer>
  )
}

export default connect(mapStateToProps, { getProfile, updateProfile, deleteProfile })(memo(UserDashboard))
