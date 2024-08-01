import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Navbar from '../../NavBar/Navbar';
import UserSideBar from '../UserSideBar/UserSideBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserLoginContext } from '../../../Utils/Context/UserLoginContext';
import { useNavigate } from 'react-router-dom';
import Trip from '../../Trip/Trip';
import './UserTrips.css';

const UserTrips = () => {
  const [tripsData, setTripsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { loggedInUserValues } = useContext(UserLoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUserValues) {
      navigate('/login-page');
      return;
    }

    const fetchUserTrips = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/tripsByUser', { withCredentials: true });
        setTripsData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        toast.error('Failed to fetch trips data.');
      }
    };

    fetchUserTrips();
  }, [loggedInUserValues, navigate]);

  const handleDeleteTrip = (deletedTripId) => {
    setTripsData(tripsData.filter(trip => trip._id !== deletedTripId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='userTripsHeadContainer'>
      <Navbar visibilityForSearch={true} />
      <div className='userTripsInnerContainer'>
        <div className='sideBarContainerInUserTrips'>
          <UserSideBar />
        </div>
        <div className='searchResultsContainerInUserTrips'>
          {tripsData.length > 0 ? (
            <ul>
              {tripsData.map(trip => (
                <Trip 
                  key={trip._id} 
                  trip={trip} 
                  showDeleteButton={true} // You can set this based on any condition you want
                  onDeleteSuccess={handleDeleteTrip} 
                />
              ))}
            </ul>
          ) : (
            <div>No trips found.</div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserTrips;
