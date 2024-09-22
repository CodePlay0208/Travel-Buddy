import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  TripCardContainer,
  TripImages,
  ProfileSection,
  ProfileImage,
  ProfileName,
  TripInfo,
  TripLocations,
  TripMembers,
  TripAgeGender,
  TripDescription,
  TripButton
} from './TripCard.styled';

const TripCard = ({ trip }) => {
  const {
    profileImg,
    name,
    startLocation,
    endLocation,
    totalMembers,
    age,
    gender,
    description,
    destinationImages
  } = trip;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false // Disable arrows
  };

  return (
    <TripCardContainer>
      <TripImages>
        <Slider {...settings}>
          {destinationImages.map((image, index) => (
            <img key={index} src={image} alt={`Destination ${index}`} />
          ))}
        </Slider>
      </TripImages>
      <ProfileSection>
        <ProfileImage src={profileImg} alt={`${name}'s profile`} />
        <ProfileName>{name}</ProfileName>
      </ProfileSection>
      <TripInfo>
        <TripLocations>{startLocation} to {endLocation}</TripLocations>
        <TripMembers>Total Members: {totalMembers}</TripMembers>
        <TripAgeGender>Age: {age}, Gender: {gender}</TripAgeGender>
        <TripDescription>{description}</TripDescription>
        <TripButton>Chat Now</TripButton>
      </TripInfo>
    </TripCardContainer>
  );
};

export default TripCard;
