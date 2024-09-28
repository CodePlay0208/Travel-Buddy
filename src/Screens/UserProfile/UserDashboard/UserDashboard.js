import { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProfile } from '../../../actions/profile.action'
import { ToastContainer, toast } from 'react-toastify'
import { SVG } from '../../../assets'
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
  profile: state.profile.profile,
  loading: state.profile.loading,
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
          src="https://s3-alpha-sig.figma.com/img/04aa/b0c2/af63e471ad6e8893e0055179442738fc?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mu2sRh9hZ3dOJ0C45BqnAwBA6~fwz-iPNYffvhHcRILBbtOB07UuxiSuAv8cYzC~cLddAdp6gTnc8W2baB9bBLto0jRLNDUsNVWnNFHqEbBe2eRjToymtlva4bp8lhXWmORsVB~ShdrA36u19OLSmifT7ex3lXzjnkzqQrdS0pGxd4CwZABExLdUwsK~Y8DQmTK8KkM8criJFBlmJ6yRkfeqS5d-8e102e5nMxtCVDX58f2VfyUJJLzHrDzig05Q7lu5q6jzjFN4gdeD8dl4on6A7Qgew30I2bOQsL3JVQKCncrkqQUDz6QN9094qte9sHvLYC8Whdwy85Xt8BX09g__"
          alt="Background"
        />
        <ProfilePic>
          <ImgProfile src={profile?.profilePic} alt="User Profile" />
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
                <Value>{profile?.name}</Value>
              </UserInfoItem>
              <UserInfoItem>
                <Label>Phone Number</Label>
                <Value>+91 {profile?.phoneNumber}</Value>
              </UserInfoItem>
              <UserInfoItem>
                <Label>Date of Birth</Label>
                <Value>01-01-1992</Value>
              </UserInfoItem>
            </UserInfoColumn>
            <UserInfoColumn>
              <UserInfoItem>
                <Label>Email</Label>
                <Value>{profile?.emailId}</Value>
              </UserInfoItem>
              <UserInfoItem>
                <Label>Address</Label>
                <Value>Sambalpur, Odisha</Value>
              </UserInfoItem>
              <UserInfoItem>
                <Label>Persona</Label>
                <Value>Traveller</Value>
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
