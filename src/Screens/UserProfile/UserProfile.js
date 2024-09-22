import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import UserDashboard from './UserDashboard/UserDashboard'

const UserProfile = () => {
  return (
    <div>
      <Navbar></Navbar>
      <UserDashboard></UserDashboard>
      <Footer></Footer>
    </div>
  )
}

export default UserProfile
