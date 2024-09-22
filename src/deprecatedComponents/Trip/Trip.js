import React, { useContext, useState, useEffect } from 'react'
import { UserLoginContext } from '../../Utils/Context/LoggedInUserContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import {
  Card,
  CardImage,
  CardOverlay,
  CardHeader,
  CardHeaderText,
  CardUser,
  CardProfile,
  CardDescription,
  ChatNowButton,
  DeleteButtonContainer,
  DeleteButtonUser,
} from '../../components/styles/Trip.styled'

const Trip = ({ trip, showDeleteButton, onDeleteSuccess }) => {
  const { isUserLoggedIn } = useContext(UserLoginContext)
  const navigate = useNavigate()
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const images = trip.destinationImages
      const sizeOfImages = images.length
      setImageIndex((currentImageIndex) => (currentImageIndex + 1) % sizeOfImages)
    }, 2000)

    return () => clearInterval(intervalId)
  }, [trip.destinationImages])

  const handleClickOnChatButton = () => {
    if (isUserLoggedIn) {
      navigate('/chats')
    } else {
      navigate('/login-page')
    }
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/tripDelete/deleteTrip/${trip._id}`, { withCredentials: true })
      toast.success('Trip deleted successfully.')
      onDeleteSuccess(trip._id)
    } catch (error) {
      toast.error('Failed to delete trip.')
    }
  }

  return (
    <Card>
    
      <a onClick={() => navigate(`/trip/${trip._id}`)}>
        <CardImage src={trip.destinationImages[imageIndex]} alt={trip.startLocation} />
        <CardOverlay>
          <CardHeader>
            <CardHeaderText>
              <p>
                <strong>From:</strong> {trip.startLocation}
              </p>
              <p>
                <strong>To:</strong> {trip.endLocation}
              </p>
            </CardHeaderText>
            <CardUser>
              <CardProfile>
                <img src={trip.profileImg} alt={trip.name} />
              </CardProfile>
              <p>{trip.name}</p>
            </CardUser>
          </CardHeader>
          <CardDescription>
            <p>
              <strong>No. of Members:</strong> {trip.totalMembers}
            </p>
            <p>
              <strong>Age:</strong> {trip.age}
            </p>
            <p>
              <strong>Sex:</strong> {trip.sex}
            </p>
            <p className="descriptioncard">
              <strong>Description:</strong> {trip.description}
            </p>
            <ChatNowButton onClick={handleClickOnChatButton}>Chat Now</ChatNowButton>
          </CardDescription>
        </CardOverlay>
      </a>
      {showDeleteButton && (
        <DeleteButtonContainer>
          <DeleteButtonUser onClick={handleDelete}>Delete</DeleteButtonUser>
        </DeleteButtonContainer>
      )}
    </Card>
  )
}

export default Trip
