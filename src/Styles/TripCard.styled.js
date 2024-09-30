import styled from 'styled-components'

export const TripCardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 5px 5px 9px rgba(0, 0, 0, 0.418);
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3%;
`

export const LeftContainer = styled.div`
  width: 380px;
  aspect-ratio: 4 / 3;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin: 10px auto;
`

export const CarouselItem = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  padding-top: 100%;
`

export const DestinationImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width:400px;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 10px;
`

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1%;
  width: 98%;
`

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileImg = styled.img`
  width: 40.32px;
  height: 40.32px;
  border-radius: 50%;
  margin-right: 8px;
`

export const Username = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 19.2658px;
  line-height: 23px;
  color: #000000;
`

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Locations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
`

export const DetailsRight = styled.div`
  display: flex;
  flex-direction: column;
`

export const DetailsContainer = styled.div`
  display: flex;
`

export const DateLabel = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #312e2e;
  margin: 4px 0;
`

export const SeparatorLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin: 8px 0;
`

export const Description = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16.7305px;
  line-height: 20px;
  color: #333333;
`

export const ChatNow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ChatButton = styled.button`
  width: 88px;
  height: 48.36px;
  background: #8dd3bb;
  border-radius: 7.92793px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 12.41px;
  line-height: 15px;
  color: #292222;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }
`
