import React from 'react';
import firstImage from "../../../data/Images/aeroPlaneTripPage.png";
import DetailBox from './DetailBox/DetailBox';
import {SVG} from "../../../assets/svg"
const DetailsSection = () => {
    return (
        <div className="details-section">
            <div className="chat-bar">

            </div>
            <div className="details-upper-section">
                <div className="details-right">
                    <div className="details-column">
                        <div>
                            <DetailBox heading="Heading 1" body="This is the body text for detail box 1." svg={SVG.EyeIcon} />
                        </div>
                        <div>
                            <DetailBox heading="Heading 2" body="This is the body text for detail box 2." svg={SVG.AuthDesignSection} />
                        </div>
                    </div>
                    <img src={firstImage} alt="Trip" className="trip-image"/>
                    <div className="details-column">
                        <div>
                            <DetailBox heading="Heading 3" body="This is the body text for detail box 3." svg="<svg></svg>" />
                        </div>
                        <div>
                            <DetailBox heading="Heading 4" body="This is the body text for detail box 4." svg="<svg></svg>" />
                        </div>
                    </div>
                </div>
                <div className="details-left"></div>
            </div>
            <div className="details-lower-section">
                <div className="details-right">
                    <div className="details-column">
                        <div>
                            <DetailBox heading="Heading 5" body="This is the body text for detail box 5." svg="<svg></svg>" />
                        </div>
                        <div>
                            <DetailBox heading="Heading 6" body="This is the body text for detail box 6." svg="<svg></svg>" />
                        </div>
                    </div>
                    <div className="details-column">
                        <div>
                            <DetailBox heading="Heading 7" body="This is the body text for detail box 7." svg="<svg></svg>" />
                        </div>
                        <div>
                            <DetailBox heading="Heading 8" body="This is the body text for detail box 8." svg="<svg></svg>" />
                        </div>
                    </div>
                </div>
                <div className="details-left"></div>
            </div>
        </div>
    );
};

export default DetailsSection;
