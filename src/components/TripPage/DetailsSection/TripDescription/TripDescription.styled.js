import styled from 'styled-components'

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const DescriptionContainer = styled.div`
  width: 60%;
  box-sizing: border-box;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.div`
  font-size: 2.5vw;
  font-weight: 600;
  line-height: 2.5vw;
  margin: 0 0 5% 0;
`

export const DescriptionTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 2.5vw;
  margin: 1.5% 0;
  color: #040f0f;
`

export const DescriptionContent = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1.2vw;
  font-weight: 500;
  line-height: 2vw;
  white-space: pre-line;
  font-family: Montserrat;
  letter-spacing: 0%;
`

export const ToggleButton = styled.span`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 1vw;
  line-height: 2vw;
  letter-spacing: 0%;
  text-decoration: underline;
  text-decoration-style: solid;
  color: black;
  cursor: pointer;
`
export const Link = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ChatSection = styled.div`
  width: 35%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 9px 0px #00000040;

  border-radius: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 3%;
`

export const ProfilePicture = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`

export const ProfileName = styled.div`
  margin: 2.5% 0 0;
  font-size: 2vw;
  font-weight: 500;
  line-height: 2vw;
`

export const DateContainer = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const DateSection = styled.div`
  display: flex;
`
export const InfoSection = styled.div`
  display: flex;
`

export const StartDate = styled.div`
  font-weight: 500;
  color: #040f0f;
  padding: 1% 4.5%;
  width: 50%;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-right: 0.5px solid #d9d9d9;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
`
export const EndDate = styled.div`
  font-weight: 500;
  font-size: 1.25vw;
  color: #040f0f;
  padding: 1% 4.5%;
  width: 50%;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-left: 0.5px solid #d9d9d9;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`
export const DetailsBox = styled.div`
  font-weight: 500;
  font-size: 1.25vw;
  color: #040f0f;
  padding: 2% 5%;
  width: 50%;
  box-sizing: border-box;
`

export const BoxHeading = styled.div`
  font-size: 0.65vw;
  font-weight: 500;
  color: #d9d9d9;
`

export const BoxContent = styled.div`
  font-size: 1.25vw;
  font-weight: 500;
`

export const Button = styled.button`
  font-size: 1.25vw;
  font-weight: 500;
  line-height: 1vw;
  color: #000000;
  text-align: center;
  background: #8dd3bb;
  padding: 5%;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #79bca7;
  }
`
export const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 5%;
`
export const ChatButton = styled(Button)`
  img {
    width: 1.5vw;
    aspect-ratio: 1;
  }
`

export const EditButton = styled(Button)`
  background-color: #fa5c5c;
  &:hover {
    background-color: #ff3939;
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
