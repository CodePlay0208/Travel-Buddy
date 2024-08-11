import React, { useState, useContext } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar';
import './PublishTrip.css';  // Link to the external CSS file
import DatePicker from '../../components/DatePicker/DatePicker';
import Searchbar from '../../components/SearchBar/Searchbar';
import { InputValuesContext } from '../../Utils/Context/InputValuesContext';

const PublishTrip = () => {
    const [activeSection, setActiveSection] = useState('trip'); // Default active section is 'trip'
    const [inputValues, setInputValues] = useState({
        destination: "",
        startDate: "",
        startLocation: "",
        endDate: "",
    })
    const handleToggle = (section) => {
        setActiveSection(section);
    };

    const handleNext = () => {
        setActiveSection('user');
    };

    const handleSubmit = () => {
        // Implement the submit logic here
        alert('Trip submitted!');
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
                                    <div className="input-row">
                                        <div className="input-group">
                                            <label className="input-label">Start Location</label>
                                            <Searchbar inputValues={inputValues.startLocation} setInputValues={setInputValues} onValue={"startLocation"} placeholderValue={"Enter Start Location"} style={{ width: '100%' }} />
                                        </div>
                                        <div className="input-group">
                                            <label className="input-label">Destination</label>
                                            <Searchbar inputValues={inputValues.destination} setInputValues={setInputValues} onValue={"destination"} placeholderValue={"Enter Destination"} style={{ width: '100%' }} />
                                        </div>
                                    </div>

                                    <div className="input-row">
                                        <div className="input-group">
                                            <label className="input-label">Start Date</label>
                                            <DatePicker inputValues={inputValues.startDate} setInputValues={setInputValues} onValue={'startDate'} placeholderValue={"Select Start date"} style={{ width: '100%' }} />
                                        </div>
                                        <div className="input-group">
                                            <label className="input-label">End Date</label>
                                            <DatePicker inputValues={inputValues.endDate} setInputValues={setInputValues} onValue={'endDate'} placeholderValue={"Select End date"} style={{ width: '100%' }} />

                                        </div>
                                    </div>

                                    <div className="input-row">
                                        <div className="input-group">
                                            <label className="input-label">Budget</label>
                                            <input type="text" className="input-field" placeholder="Enter budget" />
                                        </div>
                                        <div className="input-group">
                                            <label className="input-label">Total Members</label>
                                            <input type="number" className="input-field" placeholder="Enter number of members" />
                                        </div>
                                    </div>

                                    <div className="input-group description-group">
                                        <label className="input-label">Description</label>
                                        <textarea className="description-field" placeholder="Enter trip description"></textarea>
                                    </div>

                                    <div className="publish__trip__button">
                                        <button className="next-button" onClick={handleNext}>Next</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='input-row'>

                                        <div className="input-group">
                                            <label className="input-label">Full Name</label>
                                            <input type="text" className="input-field" placeholder="Enter full name" />
                                        </div>

                                        <div className="input-group">
                                            <label className="input-label">Email</label>
                                            <input type="email" className="input-field" placeholder="Enter email address" />
                                        </div>
                                    </div>
                                    <div className="input-row">
                                        <div className="input-group">
                                            <label className="input-label">Phone Number</label>
                                            <input type="text" className="input-field" placeholder="Enter phone number" />
                                        </div>
                                        <div className="input-group">
                                            <label className="input-label">Age</label>
                                            <input type="number" className="input-field" placeholder="Enter age" />
                                        </div>
                                    </div>
                                    <div className="input-row">
                                        <div className="input-group">
                                            <label className="input-label">Gender</label>
                                            <input type="text" className="input-field" placeholder="Enter gender" />
                                        </div>
                                        <div className="input-group">
                                            <label className="input-label">Persona</label>
                                            <input type="text" className="input-field" placeholder="Enter persona" />
                                        </div>
                                    </div>

                                    <div className="publish__trip__button">
                                        <button className="submit-button" onClick={handleSubmit}>Submit</button>
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
