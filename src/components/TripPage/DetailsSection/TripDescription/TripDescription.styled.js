import styled from 'styled-components'

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const DescriptionContainer = styled.div`
  width: 49%;
  box-sizing: border-box;
  margin-bottom: 10%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.div`
  font-size: 3.5vw;
  font-weight: 600;
  line-height: 5vw;
  margin: 0 0 5% 0;
`

export const DescriptionTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 3vw;
  margin: 1.5% 0;
  color: #040f0f;
`

export const DescriptionContent = styled.div`
  font-size: 1.5vw;
  font-weight: 500;
  line-height: 2.5vw;
`

export const ToggleButton = styled.span`
  font-weight: 500;
  font-size: 1.5vw;
  color: #007bff;
  cursor: pointer;
`

export const ChatSection = styled.div`
  width: 43%;
  height: 100%;
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 4.25%;
`

export const ProfilePicture = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`

export const ProfileName = styled.div`
  margin: 2.5% 0 0;
  font-size: 32px;
  font-weight: 500;
  line-height: 2vw;
`

export const DateContainer = styled.div`
  margin: 5%;
`
export const DateSection = styled.div`
  display: flex;
`
export const InfoSection = styled.div`
  display: flex;
`

export const StartDate = styled.div`
  font-weight: 500;
  font-size: 1.5vw;
  color: #040f0f;
  padding: 2% 5%;
  width: 50%;
  box-sizing: border-box;
  border: 1px solid grey;
  border-right: 0.5px solid rgba(128, 128, 128, 0.453);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
export const EndDate = styled.div`
  font-weight: 500;
  font-size: 1.5vw;
  color: #040f0f;
  padding: 2% 5%;
  width: 50%;
  box-sizing: border-box;
  border: 1px solid grey;
  border-left: 0.5px solid rgba(128, 128, 128, 0.453);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const DetailsBox = styled.div`
  font-weight: 500;
  font-size: 1.5vw;
  color: #040f0f;
  padding: 2% 5%;
  width: 50%;
  box-sizing: border-box;
`

export const BoxHeading = styled.div`
  padding-bottom: 5%;
  font-size: 1vw;
  font-weight: 500;
  line-height: 2vw;
`

export const BoxContent = styled.div`
  padding-bottom: 5%;
  font-size: 1.5vw;
  font-weight: 500;
  line-height: 2vw;
`

export const ChatButton = styled.div`
  font-size: 2.5vw;
  font-weight: 500;
  line-height: 2vw;
  margin: 5% 0;
  color: #000000;
  text-align: center;
  background: #8dd3bb;
  padding: 5%;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #79bca7;
  }
`

export const GreyLine = styled.div`
  height: 0.25px;
  background-color: rgba(128, 128, 128, 0.608);

  @media (max-width: 768px) {
    height: 0.25px;
    background-color: rgba(128, 128, 128, 0.608);
  }
`
