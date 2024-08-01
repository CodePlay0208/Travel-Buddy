import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-shadow-bar-1"></div>
            <div className="navbar-shadow-bar-2"></div>
            <div className="navbar-menu" hidden>
                <div className="navbar-menu-item">
                    <div className="navbar-icon-container">
                        <div className="navbar-icon airplane-icon"></div>
                        <div className="navbar-text">Find Flight</div>
                    </div>
                    <div className="navbar-icon-container">
                        <div className="navbar-icon bed-icon"></div>
                        <div className="navbar-text">Find Stays</div>
                    </div>
                </div>
                <div className="navbar-logo-container">
                    <div className="navbar-logo"></div>
                </div>
            </div>
            <div className="navbar-profile">
                <div className="navbar-profile-picture"></div>
                <div className="navbar-profile-status"></div>
                <div className="navbar-profile-arrow"></div>
            </div>
            <div className="navbar-title">
                Travmigoz
            </div>
        </div>
    );
};

export default Navbar;
