import { memo, useEffect } from 'react'
import './UserDashboard.css'
import { SVG } from '../../../assets'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProfile } from '../../../actions/profile.action'
import { ToastContainer, toast } from 'react-toastify'

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

  const handleEditProfileButton = () => {
    // navigate to edit profile page
  }

  useEffect(() => {
    fetchUserProfile()
  }, [])

  return (
    <>
      <div className="image-container">
        <div className="backgroundImage">
          <img
            className="backgroundImage"
            src="https://s3-alpha-sig.figma.com/img/04aa/b0c2/af63e471ad6e8893e0055179442738fc?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JH78agxc8kFWuZrH-7XFllzuV-QNoolPIXGoT~2llNqm~VWwqnJbkXslZm~Fn5DYxd7WTMKQSrOuMTFirTmZ5eSEx5L5F6MYbh06HQ1SaRFvfbbfZGPo1wfrN5H-BYWExQMG7PgwPz~mIzQ5GJf2I6wIbNIm4Du7pUHKEdO6D9uhR4700l6fw4Mrdb0YD7w5WAzUqCvcJ4H5lBJsgw7tKZdk6fPBbuOXin03cabNEu3RQ76kKNszbmlkDwFoG3dPFavf-amgZAIeZ9gk6Zp-gCUKjk307FvbHgy78eFIC9sc7gz-YpRUP1JtylWB0ZBjtyXGkLfjpjhtXvjKm81NCQ__"
            alt=""
          />
        </div>
        <div className="profilePic">
          <img className="imgProfile" src={profile.profilePic} alt="UserProfilePic" />
        </div>
      </div>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="header-title">Account</h1>
        </div>
        <div className="dashboard-content">
          <div className="user-info-columns">
            <div className="user-info-column">
              <div className="user-info-item">
                <span className="label">Name</span>
                <span className="value">{profile.name}</span>
              </div>
              <div className="user-info-item">
                <span className="label">Phone Number</span>
                <span className="value">+91 {profile.phoneNumber}</span>
              </div>
              <div className="user-info-item">
                <span className="label">Date of Birth</span>
                <span className="value">01-01-1992</span>
              </div>
            </div>
            <div className="user-info-column">
              <div className="user-info-item">
                <span className="label">Email</span>
                <span className="value">{profile.emailId}</span>
              </div>
              <div className="user-info-item">
                <span className="label">Address</span>
                <span className="value">Sambalpur, Odisha</span>
              </div>
              <div className="user-info-item">
                <span className="label">Persona</span>
                <span className="value">Traveller</span>
              </div>
            </div>
          </div>
          <div className="dashboard-actions">
            <button className="edit-button">
              <img src={SVG.editButton} className="EditButtonSVG" />
              Edit Your Profile
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default connect(mapStateToProps, { getProfile })(memo(UserDashboard))
