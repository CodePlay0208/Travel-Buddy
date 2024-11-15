import { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProfile } from '../../../actions/profile.action'
import { ToastContainer, toast } from 'react-toastify'
import { SVG } from '../../../assets'
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
  UserInfoItem,
  Label,
  Value,
  DashboardActions,
  EditButton,
  DeleteButton,
} from './UserDashboard.styled'

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  loading: state.profileReducer.loading,
})

const UserDashboard = ({ profile, getProfile }) => {
  const navigate = useNavigate()
  
  const fetchUserProfile = () => {
    try {
      getProfile()
    } catch (e) {
      toast.error('Unable to fetch user profile, Please try again!', { autoClose: 1500 })
      console.error('Error fetching user profile:', e)
    }
  }

  useEffect(() => {
    fetchUserProfile()
  }, [])

  return (
    <DashboardContainer>
      <ImageContainer>
        <BackgroundImage
          src="https://s3-alpha-sig.figma.com/img/04aa/b0c2/af63e471ad6e8893e0055179442738fc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R3z~bjqHlHSykfZ1Sc8gNj7xMGo6PQpLm4eKTY21zVHtM07huTrnAoIRXlclsP5DksxuGABZd554VfMkMLJ1v4dtbPrYMubRtdOgbUE0b9q6~q6FVs8V-XbSrQeeA5HOu9NauVuXcFuhRr9Rf-fJ1W8p6gdSRtPM6-wLfm2Aq1ndEA4JaaydF2fLFNKf0n7tR3HBhXAACUGTCkDRYOO~fMBj5HFXTShV1XCSmgeHkrVQWW1L50XUQzFr2-CastqtTtDEnHCwysyjmjPVlPgwx3SeUENa-t~0E668xdzqzhKivMSOffFLuzf4E72ioJsl~I85WbilLAH435JjL4TFTg__"
          alt="Background"
        />
        <ProfilePic>
          <ImgProfile src={profile.ProfilePic??images.defaultProfileImg} alt="User Profile" />
          <EditPic src={SVG.editPic} alt="Edit" />
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
                <Value>{profile?.username}</Value>
              </UserInfoItem>
              <UserInfoItem>
                <Label>Phone Number</Label>
                <Value>+91 {profile?.phoneNumber}</Value>
              </UserInfoItem>
              <UserInfoItem>
                <Label>Date of Birth</Label>
                <Value>{profile.dob??'01-01-2000'}</Value>
              </UserInfoItem>
            </UserInfoColumn>
            <UserInfoColumn>
              <UserInfoItem>
                <Label>Email</Label>
                <Value>{profile?.emailId}</Value>
              </UserInfoItem>
              <UserInfoItem>
                <Label>Address</Label>
                <Value>{profile.address??'Sambalpur, Odisha'}</Value>
              </UserInfoItem>
              <UserInfoItem>
                <Label>Persona</Label>
                <Value>{profile.persona??'Traveller'}</Value>
              </UserInfoItem>
            </UserInfoColumn>
          </UserInfoColumns>
          <DashboardActions>
            <EditButton>
              <img src={SVG.editButton} alt="Edit" /> Edit Your Profile
            </EditButton>
            <DeleteButton>
              <img src={SVG.deleteIcon} alt="Delete" /> Delete Account
            </DeleteButton>
          </DashboardActions>
        </DashboardContent>
        <ToastContainer />
      </DashboardContainer>
    </DashboardContainer>
  )
}

export default connect(mapStateToProps, { getProfile })(memo(UserDashboard))
