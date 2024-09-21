import React, {useContext, useState, memo } from 'react';
import './DeleteProfile.css'; // Import the CSS file
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import UserSideBar from '../UserSideBar/UserSideBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteProfile} from '../../../actions/profile.action'
import {UserLoginContext} from "../../../Utils/Context/UserLoginContext";

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  loading: state.profile.loading,
})

const DeleteProfile = ({ profile }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [confirmationText, setConfirmationText] = useState('');

    
  const {loggedInUserValues , setLoggedInUserValues} = useContext(UserLoginContext);


    const handleSignOutLogic = () => {
        //TODO: do all the necessary stuff
        fetch('http://localhost:4000/login/logout', {
            method: 'POST',
            credentials: 'include', // Ensure cookies are sent with the request
        })
            .then(response => {
                if (response.ok) {
                    console.log('Logged out successfully');
                    setLoggedInUserValues({
                        _id: "",
                        username: "",
                        emailId: "",
                        profilePic: ""
                    });
                    // Optionally redirect or update UI after logout
                } else {
                    console.error('Logout failed:', response.statusText);
                    // Handle logout failure, if needed
                    if (!response.ok) {
                        return response.json().then(error => {
                            throw new Error(error);
                        });
                    }
                }
            })
            .catch(error => {
                console.error('Error logging out:', error);
                // Handle network errors or other issues
            });
        navigate("/")
    }

    const handleProfileDeleted = () => {
        // Perform any necessary cleanup, such as logging out the user
        localStorage.removeItem('token');
        toast.success('Goodbye! Redirecting...', {
            onClose: () => handleSignOutLogic(),
        });
    };

    // const handleDelete = () => {
    //   try {
    //     deleteProfile()
    //     if (profile.response === 200) {
    //         toast.success('Profile deleted successfully');
    //         handleProfileDeleted();
    //     } else {
    //         toast.error('Failed to delete profile');
    //     }
    //   } catch (e) {
    //       toast.error('An error occurred while deleting the profile');
    //   }
    // }

    const handleDelete = async () => {
        if (confirmationText !== 'I want to delete my profile') {
            toast.error('You must type the exact confirmation text.');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.delete('http://localhost:4000/delete/deleteUser', { withCredentials: true });
            if (response.status === 200) {
                toast.success('Profile deleted successfully');
                handleProfileDeleted();
            } else {
                toast.error('Failed to delete profile');
            }
        } catch (err) {
            toast.error('An error occurred while deleting the profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="userTripsHeadContainer">
                <Navbar visibilityForSearch={true} />
                <div className="userTripsInnerContainer">
                    <div className="sideBarContainerInUserTrips">
                        <UserSideBar />
                    </div>
                    <div className="delete-profile-container">
                        <p>Please type "I want to delete my profile" to confirm.</p>
                        <input
                            type="text"
                            className="delete-profile-input"
                            value={confirmationText}
                            onChange={(e) => setConfirmationText(e.target.value)}
                            disabled={loading}
                        />
                        <button
                            className="delete-profile-button"
                            onClick={handleDelete}
                            disabled={loading || confirmationText !== 'I want to delete my profile'}
                        >
                            {loading ? 'Deleting...' : 'Delete Profile'}
                        </button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default connect(mapStateToProps, { deleteProfile})(memo(DeleteProfile))
