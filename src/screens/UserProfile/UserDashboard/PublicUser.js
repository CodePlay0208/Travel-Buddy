import Navbar from '../../../components/Navbar/Navbar'
import React from 'react'
import UserDashboard from './UserDashboard'
import { useParams } from 'react-router-dom'

const PublicUser = () => {
      const { id: userId } = useParams()
  return (
    <div>
      <Navbar />
      <UserDashboard userId={userId} />
    </div>
  )
}

export default PublicUser
