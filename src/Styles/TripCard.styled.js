import styled from 'styled-components'

export const TripCardContainer = styled.div`
  width: 400px;
  height: 600px;
  background: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 25px 0px #8dd3bb40;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 3.5%;
  margin-bottom: 3.5%;
  /* margin: 1%; */
`

export const LeftContainer = styled.div`
  width: 400px;
  aspect-ratio: 4 / 3;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
`

export const CarouselItem = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  padding-top: 100%;
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`
export const DestinationImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 396.5px;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 15px;
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
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
  padding: 3% 5%;
  flex-direction: column;
  position: relative;
`

export const Duration = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2%;
  font-family: Montserrat;
  font-size: 10.43px;
  font-weight: 500;
  line-height: 12.72px;
  text-align: left;
  padding: 1% 0;
`

export const DateComp = styled.div`
  font-family: Montserrat;
  font-size: 1.7vw;
  font-weight: 700;
  line-height: 28.69px;
  color: #009965;
  padding: 1% 0;
`

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 2vw;
  font-weight: 700;
  line-height: 30.84px;
  text-align: left;
  color: #363434;
  padding: 1% 0;
`

export const Description = styled.div`
  font-family: Montserrat;
  font-size: 12.91px;
  font-weight: 500;
  line-height: 20.65px;
  text-align: left;
  color: #1f1d1d;
  padding: 4% 0 10%;
`

export const Budget = styled.div``

export const SubTitle = styled.div`
  font-family: Montserrat;
  font-size: 14.71px;
  font-weight: 700;
  padding-bottom: 5%;
  line-height: 17.93px;
  text-align: left;

  color: #009965;
`

export const Price = styled.div`
  font-family: Montserrat;
  font-size: 22.16px;
  font-weight: 500;
  line-height: 27.02px;
  text-align: left;

  color: #191717;
`
export const ChatNow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  position: relative;
  bottom: 0px;
`

export const ChatButton = styled.button`
  width: 130px;
  height: 48.36px;
  padding: 3% 8%;
  background: #8dd3bb;
  border-radius: 7.92793px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 13.41px;
  line-height: 16px;
  color: #292222;

  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }
`
