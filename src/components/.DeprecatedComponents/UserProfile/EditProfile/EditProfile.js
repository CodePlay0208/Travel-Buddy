// src/EditProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProfile.css';

import Navbar from '../../Navbar/Navbar';
import UserSideBar from '../UserSideBar/UserSideBar';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    username: '',
    age: '',
    sex: '',
    address: ''
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the current user's profile data
    axios.get('/api/user/profile')
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the profile!', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/edit_user', profile);
      setMessage('User profile updated successfully');
      console.log(response.data);
    } catch (error) {
      setMessage('Error updating profile');
      console.error(error);
    }
  };

  return (
    <div className="userTripsHeadContainer">
      <Navbar visibilityForSearch={true} />
      <div className="userTripsInnerContainer">
        <div className="sideBarContainerInUserTrips">
          <UserSideBar />
        </div>
        <div className="edit-profile-container">
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={profile.age}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Sex:</label>
              <input
                type="text"
                name="sex"
                value={profile.sex}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button type="submit">Update Profile</button>
            </div>
          </form>
          {message && <p className={`message ${message.includes('successfully') ? 'success' : ''}`}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
