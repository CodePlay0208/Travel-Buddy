import React from 'react';
import './AboutSection.css';

// Ensure you import images correctly
import firstImage from '../../data/Images/aboutSection/image1.png';
import secondImage from '../../data/Images/aboutSection/image2.png';
import thirdImage from '../../data/Images/aboutSection/image.png';

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="about-section__background"></div>
            <div className="about-section__content-frame first">
                <div className="about-section__content-inner-frame">
                    <div className="about-section__icon-group">
                        <img src={firstImage} alt="Trust who you travel with" />
                    </div>
                    <div className="about-section__title">
                        Trust who you travel with
                    </div>
                    <div className="about-section__description">
                        We take the time to get to know each of our trip publishers and members. We check reviews, profiles, and IDs, so you know who you’re travelling with and can find a group at ease on our secure platform.
                    </div>
                </div>
            </div>
            <div className="about-section__content-frame second">
                <div className="about-section__content-inner-frame">
                    <div className="about-section__icon-group">
                        <img src={secondImage} alt="Finding the best group" />
                    </div>
                    <div className="about-section__title">
                        Finding the best group
                    </div>
                    <div className="about-section__description">
                        No matter where you’re going, find the perfect trip and the perfect group from our wide range of destinations and routes.
                    </div>
                </div>
            </div>
            <div className="about-section__content-frame third">
                <div className="about-section__content-inner-frame">
                    <div className="about-section__icon-group">
                        <img src={thirdImage} alt="Scroll, click, tap and go!" />
                    </div>
                    <div className="about-section__title">
                        Scroll, click, tap and go!
                    </div>
                    <div className="about-section__description">
                        Finding a trip has never been easier! Thanks to our simple app powered by great technology, you can book a trip close to you in just minutes.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
