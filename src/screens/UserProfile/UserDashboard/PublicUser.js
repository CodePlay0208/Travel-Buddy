import Navbar from '../../../components/Navbar/Navbar'
import React, { memo, useEffect, useState } from 'react'
import UserDashboard from './UserDashboard'
import { useParams } from 'react-router-dom'
import { getOtherUserProfile } from '../../../actions/profile.action'
import { connect } from 'react-redux'

import { images } from '../../../assets/images'
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
  UserInfoItemCenter,
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
  UserInfoRow,
  UserInfoRows,
} from './UserDashboard.styled'

import Dropdown from '../../../components/Dropdown/Dropdown'
import { Input, Label, StyledToastContainer, Value } from '../../../styles/Global'
import { ToastContainer } from 'react-toastify'

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  loading: state.profileReducer.loading,
})

const PublicUser = ({ getOtherUserProfile }) => {
  const { id: userId } = useParams()

  const [profile, setOtherUserProfile] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        const res = await getOtherUserProfile(userId)
        if (res) {
          setOtherUserProfile(res.data)
        }
      }
    }

    fetchData()
  }, [userId, getOtherUserProfile])

  return (
    <div>
      <Navbar />
      <Container>
        <DashboardContainer>
          <DashboardHeader>
            <HeaderTitle>User Profile</HeaderTitle>
          </DashboardHeader>
          <DashboardContent>
            <UserInfoRows>
              <UserInfoRow>
                <UserInfoItemCenter>
                  <Label>Persona</Label>

                  <Value>{profile?.persona ?? 'Traveller'}</Value>
                </UserInfoItemCenter>
                <UserInfoItemCenter>
                  <Label>Gender</Label>

                  <Value>{profile?.gender ?? 'Prefer not to say'}</Value>
                </UserInfoItemCenter>

                <UserInfoItemCenter>
                  <Label>Date of Birth</Label>
                  <Value>{profile?.dateOfBirth ?? '01-01-2000'}</Value>
                </UserInfoItemCenter>
              </UserInfoRow>
              <UserInfoRow>
                {!!profile?.emailId?.length && !profile?.isEmailPrivate && (
                  <UserInfoItemCenter>
                    <Label>Email</Label>
                    <Value>
                      <a href={`mailto:${profile.emailId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {profile.emailId}
                      </a>
                    </Value>
                  </UserInfoItemCenter>
                )}
                {!!profile?.phoneNumber?.length && !profile?.isPhonePrivate && (
                  <UserInfoItemCenter>
                    <Label>Phone Number</Label>
                    <Value>
                      <a href={`tel:+91${profile.phoneNumber}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {`+91 ${profile.phoneNumber}`}
                      </a>
                    </Value>
                  </UserInfoItemCenter>
                )}
              </UserInfoRow>
            </UserInfoRows>
            <ProfilePicContainer>
              <ProfilePic>
                <ImgProfile src={profile?.profilePic?.[0]?.preSignedUrl || images.defaultProfileImg} alt="User Profile" />
              </ProfilePic>
              <NameContainer>
                <Label>Name</Label>

                <Value>{profile?.username}</Value>
              </NameContainer>
            </ProfilePicContainer>
          </DashboardContent>
          <StyledToastContainer />
        </DashboardContainer>
      </Container>
    </div>
  )
}

export default connect(mapStateToProps, { getOtherUserProfile })(memo(PublicUser))
