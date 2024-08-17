import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import UserDashboard from './UserDashboard/UserDashboard';

const UserProfile = () => {
    return (
        <div>
            <Navbar></Navbar>
            <UserDashboard></UserDashboard>
            <Footer></Footer>
        </div>
    );
};

export default UserProfile;