import React, { useContext, useState, useEffect } from 'react'
import { UserLoginContext } from '../../utils/Context/LoggedInUserContext'
import './Trip.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Trip = ({ trip, showDeleteButton, onDeleteTrip }) => {
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
  }, [])

  const handleClickOnChatButton = () => {
    if (isUserLoggedIn) {
      navigate('/chats')
      // Add your chat handling logic here
    } else {
      navigate('/login')
    }
  }

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`https://api.travmigoz.com/tripDelete/deleteTrip/${trip._id}`, { withCredentials: true })
  //     toast.success('Trip deleted successfully.')
  //     onDeleteSuccess(trip._id)
  //   } catch (error) {
  //     toast.error('Failed to delete trip.')
  //   }
  // }

  return (
    <div className="cards">
      <a className="card" onClick={() => navigate(`/trip/${trip._id}`)}>
        <img src={trip.destinationImages[imageIndex]} className="card__image" alt={trip.startLocation} />
        <div className="card__overlay">
          <div className="card__header">
            <div className="card__header-text">
              <p>
                <strong>From:</strong>
                {trip.startLocation}
              </p>
              <p>
                <strong>To:</strong> {trip.endLocation}
              </p>
            </div>
            <div className="card__user">
              <div className="card__profile">
                <img src={trip.profileImg} alt="" />
              </div>
              <p>{trip.name}</p>
            </div>
          </div>
          <div className="card__description">
            <p>
              <strong>No. of Members:</strong>
              {trip.totalMembers}
            </p>
            <p>
              <strong>Age:</strong>
              {trip.age}
            </p>
            <p>
              <strong>Sex:</strong> {trip.sex}
            </p>
            <p className="descriptioncard">
              <strong>Description:</strong>
              {trip.description}{' '}
            </p>
            <button className="chat-now-btn" role="button" onClick={handleClickOnChatButton}>
              Chat Now
            </button>
          </div>
        </div>
      </a>
      <div className="deleteButtonuser-container">
        {showDeleteButton && (
          <button className="deleteButtonuser" onClick={onDeleteTrip}>
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default Trip
