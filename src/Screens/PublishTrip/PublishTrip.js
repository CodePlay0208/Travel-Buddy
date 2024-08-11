import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar';
import './PublishTrip.css';  // Link to the external CSS file

const PublishTrip = () => {
    const [activeSection, setActiveSection] = useState('trip'); // Default active section is 'trip'

    const handleToggle = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="publish__trip__page">
            <Navbar />
            <div className="publish__trip__container">
                <div className="publish__trip__heading">
                    Publish Your Trip!
                </div>
                <div className="publish__trip__content">
                    <div className="publish__trip__leftsection">
                        <div className='toggleBetweenTripUser'>
                            <div 
                                className={`trip_detail ${activeSection === 'trip' ? 'active' : ''}`} 
                                onClick={() => handleToggle('trip')}
                            >
                                Trip Details
                            </div>
                            <div className="divider"></div>
                            <div 
                                className={`user_detail ${activeSection === 'user' ? 'active' : ''}`} 
                                onClick={() => handleToggle('user')}
                            >
                                User Details
                            </div>
                        </div>

                        {/* Conditionally render forms based on the active section */}
                        <div className="left-section">
                            {activeSection === 'trip' ? (
                                <>
                                    <div className="input-group">
                                        <label className="input-label">Start Location</label>
                                        <div className="input-field">
                                            <span className="input-placeholder">Select Location</span>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Destination</label>
                                        <div className="input-field">
                                            <span className="input-placeholder">Select Location</span>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Start Date</label>
                                        <div className="input-field">
                                            <span className="input-placeholder">Select start date</span>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Budget</label>
                                        <div className="input-field">
                                            <span className="input-placeholder">Enter budget</span>
                                        </div>
                                    </div>

                                    <div className="input-group description-group">
                                        <label className="input-label">Description</label>
                                        <div className="description-field">
                                            <span className="input-placeholder">Enter trip description</span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="input-group">
                                        <label className="input-label">Full Name</label>
                                        <div className="input-field">
                                            <span className="input-placeholder">Enter full name</span>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Email</label>
                                        <div className="input-field">
                                            <span className="input-placeholder">Enter email address</span>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Phone Number</label>
                                        <div className="input-field">
                                            <span className="input-placeholder">Enter phone number</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="publish__trip__rightsection">
                        <div className="frame_2">
                            <div className="upload_photos">
                                Upload Photos
                            </div>
                            <div className="drop_image">
                                <div className="drop_image_inner">
                                    <div className="icon_picture">
                                        {/* Icon goes here */}
                                    </div>
                                    <div className="drop_text">
                                        Drop your image here, or
                                    </div>
                                    <div className="browse">
                                        Browse
                                    </div>
                                    <div className="supports_text">
                                        Supports: PNG, JPG, JPEG, WEBP
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Additional content for right section */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PublishTrip;
