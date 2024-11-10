import React from 'react';
import { AboutSectionWrapper, ContentFrame, IconGroup, Title, Description, Background } from '../../styles/AboutSection.styled';

// Ensure you import images correctly
import firstImage from '../../data/Images/aboutSection/image1.png';
import secondImage from '../../data/Images/aboutSection/image2.png';
import thirdImage from '../../data/Images/aboutSection/image.png';

const AboutSection = () => {
    return (
        <AboutSectionWrapper>
            <Background />
            <ContentFrame className="first">
                <div className="about-section__content-inner-frame">
                    <IconGroup>
                        <img src={firstImage} alt="Trust who you travel with" />
                    </IconGroup>
                    <Title>Trust who you travel with</Title>
                    <Description>
                        We take the time to get to know each of our trip publishers and members. We check reviews, profiles, and IDs, so you know who you’re travelling with and can find a group at ease on our secure platform.
                    </Description>
                </div>
            </ContentFrame>

            <ContentFrame className="second">
                <div className="about-section__content-inner-frame">
                    <IconGroup>
                        <img src={secondImage} alt="Finding the best group" />
                    </IconGroup>
                    <Title>Finding the best group</Title>
                    <Description>
                        No matter where you’re going, find the perfect trip and the perfect group from our wide range of destinations and routes.
                    </Description>
                </div>
            </ContentFrame>

            <ContentFrame className="third">
                <div className="about-section__content-inner-frame">
                    <IconGroup>
                        <img src={thirdImage} alt="Scroll, click, tap and go!" />
                    </IconGroup>
                    <Title>Scroll, click, tap and go!</Title>
                    <Description>
                        Finding a trip has never been easier! Thanks to our simple app powered by great technology, you can book a trip close to you in just minutes.
                    </Description>
                </div>
            </ContentFrame>
        </AboutSectionWrapper>
    );
};

export default AboutSection;
