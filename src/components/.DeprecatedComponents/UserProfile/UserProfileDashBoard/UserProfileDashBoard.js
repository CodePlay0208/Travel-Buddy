import React, { useState, useEffect, memo } from 'react'
import './UserProfileDashBoard.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { getProfile } from '../../../actions/profile.action'
import { ToastContainer, toast } from 'react-toastify'

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  loading: state.profileReducer.loading,
})

const UserProfileDashBoard = ({ profile }) => {
  const [userData, setUserData] = useState({
    id: 0,
    userName: '',
    phoneNumber: '',
    emailId: '',
    rating: '4.96',
    isVerified: false,
    profileImage: '', // Add this field to store the image URL
  })

  const fetchUserProfile = () => {
    try {
      getProfile()
    } catch (e) {
      toast.error('Unable to fetch user profile, Please try again!', { autoClose: 1500 })
      console.error('Error fetching user profile:', e)
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/user/getUserProfile', { withCredentials: true })
        // const data = await response.json();
        setUserData(response.data)
        // console.log(response);
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchUserData()
  }, [])

  return (
    <div className="userInformation">
      <div className="img-container">
        <img className="userProfileImage" src={profile.profileImage} alt="User Profile" />
      </div>
      <h2 className="userProfileDashUserName">{profile.userName}</h2>
      <div>
        <span className="infoAttributeName">Account Status:</span> {
        profile.isVerified ? 'Verified' : 'Not Verified',
      }
      </div>
      <div>
        <span className="infoAttributeName">User Rating:</span> { profile.rating }
      </div>
      <div>
        <span className="infoAttributeName">Email Id:</span> {profile.emailId}
      </div>
      <div className="userShortIntro">
        <label className="infoAttributeName">Contact No:</label>
        <input className="userPhoneNumber" value={profile.phoneNumber} disabled />
      </div>
      <button className="verify-btn">Get Verified Now</button>
      <ToastContainer />
    </div>
  )
}

export default connect(mapStateToProps, { getProfile })(memo(UserProfileDashBoard))
