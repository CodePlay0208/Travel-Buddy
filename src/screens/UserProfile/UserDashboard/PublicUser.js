import Navbar from '../../../components/Navbar/Navbar'
import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { images } from '../../../assets/images'
import {
  DashboardContainer,
  ProfilePic,
  ImgProfile,
  DashboardHeader,
  HeaderTitle,
  DashboardContent,
  UserInfoItemCenter,
  Container,
  ProfilePicContainer,
  NameContainer,
  UserInfoRow,
  UserInfoRows,
} from './UserDashboard.styled'

import { Label, StyledToastContainer, Value } from '../../../styles/Global'
import { useDispatch } from 'react-redux'
import { getOtherUserProfile } from '../../../store/slices/profile-slice'

const PublicUser = () => {
  const { id: userId } = useParams()
  const dispatch = useDispatch()

  const [profile, setOtherUserProfile] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        const res = await dispatch(getOtherUserProfile(userId)).unwrap()
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

export default memo(PublicUser)
