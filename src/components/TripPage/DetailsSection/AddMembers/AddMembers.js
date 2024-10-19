import React from 'react';
import DetailBox from '../DetailBox/DetailBox';
import './AddMembers.css'
const AddMembers = () => {
    return (
        
        <div className="trippage_details-lower-section">
        <div className="trippage_heading-container">
            <div className="trippage_head-title">
                Meet Your Travmigoz
            </div>
            <div className="trippage_create-more-button">
                Create More
            </div>
        </div>

        <div className="trippage_profile-cards">
            <DetailBox heading={"Username"} body={"Trip Publisher"} svg={""}></DetailBox>
            <DetailBox heading={"Username"} body={"Member 1"} svg={""}></DetailBox>
            <DetailBox heading={"Username"} body={"Member 2"} svg={""}></DetailBox>
        </div>
    </div>
    );
};

export default AddMembers;