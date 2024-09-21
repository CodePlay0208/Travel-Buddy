import React from 'react';
import { 
  Frame, 
  BackgroundImage, 
  Rectangle40, 
  Heading, 
  LocationContainer, 
  LocationBox, 
  ExploreButton 
} from '../styles/TopDestination.styled.js';

import firstImage from '../../data/image.png';

const TopDestination = () => (
  <Frame>
    <BackgroundImage src={firstImage} alt="" />
    <Rectangle40 />
    <Heading>Where do you want to go?</Heading>
    <LocationContainer>
      <LocationBox>Bangalore</LocationBox>
      <LocationBox>Tamil Nadu</LocationBox>
      <LocationBox>Mumbai</LocationBox>
    </LocationContainer>
    <ExploreButton>Explore more places</ExploreButton>
  </Frame>
);

export default TopDestination;
