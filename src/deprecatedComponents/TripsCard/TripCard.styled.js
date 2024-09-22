import styled from 'styled-components';

export const TripCardContainer = styled.div`
  width: 386px;
  background: #faf8ed;
  border: 2px solid #ffffff;
  box-shadow: 10px 10px 9px rgba(192, 188, 161, 0.22);
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TripImages = styled.div`
  width: 100%;

  .slick-slide img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const ProfileName = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #2d3134;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TripInfo = styled.div`
  padding: 16px;
`;

export const TripLocations = styled.p`
  font-family: 'Inter', sans-serif;
  margin: 8px 0;
`;

export const TripMembers = styled.p`
  font-family: 'Inter', sans-serif;
  margin: 8px 0;
`;

export const TripAgeGender = styled.p`
  font-family: 'Inter', sans-serif;
  margin: 8px 0;
`;

export const TripDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #5b5f62;
  margin: 8px 0;
  white-space: normal;
`;

export const TripButton = styled.button`
  width: 100%;
  height: 37px;
  background: #2d3134;
  border-radius: 46px;
  border: none;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  cursor: pointer;
  margin-top: 16px;
`;
