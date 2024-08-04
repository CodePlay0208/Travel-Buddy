import React, { useEffect, memo } from 'react'
import Navbar from '../../Navbar/Navbar'
import UserSideBar from '../UserSideBar/UserSideBar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Trip from '../../Trip/Trip'
import './UserTrips.css'
import { connect } from 'react-redux'
import { getUserTrips, deleteUserTrip } from '../../../actions/trips.action'

const mapStateToProps = (state) => ({
  user: state.trip.user,
  loading: state.trip.loading,
  error: state.trip.error,
})

const UserTrips = (props) => {
  const { user, loading, error } = props

  const fetchUserTrips = () => {
    try {
      getUserTrips()
    } catch (e) {
      toast.error('Failed to fetch trips data.')
    }
  }

  useEffect(() => {
    fetchUserTrips()
  }, [fetchUserTrips])

  const handleDeleteTrip = (deletedTripId) => {
    deleteUserTrip(deletedTripId)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="userTripsHeadContainer">
      <Navbar visibilityForSearch={true} />
      <div className="userTripsInnerContainer">
        <div className="sideBarContainerInUserTrips">
          <UserSideBar />
        </div>
        <div className="searchResultsContainerInUserTrips">
          {user.trips.length > 0 ? (
            <ul>
              {user.trips.map((trip) => (
                <Trip key={trip._id} trip={trip} showDeleteButton={true} onDeleteTrip={handleDeleteTrip} />
              ))}
            </ul>
          ) : (
            <div>No trips found.</div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default connect(mapStateToProps, { getUserTrips, deleteUserTrip })(memo(UserTrips))
