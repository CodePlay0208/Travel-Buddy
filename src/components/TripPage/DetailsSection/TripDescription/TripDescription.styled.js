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

  @media (max-width: 440px) {
    width: 100%;
  }
`

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2.5rem;
  margin: 0 0 5% 0;

  @media (max-width: 440px) {
    font-size: 5rem;
    line-height: 5rem;
  }
`

export const DescriptionTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  margin: 1.5% 0;
  color: #040f0f;

  @media (max-width: 440px) {
    font-size: 5rem;
    line-height: 5rem;
  }
`

export const DescriptionContent = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2rem;
  white-space: pre-line;
  font-family: Montserrat;
  letter-spacing: 0%;

  @media (max-width: 440px) {
    font-size: 2.5rem;
    line-height: 5rem;
  }
`

export const ToggleButton = styled.span`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
  letter-spacing: 0%;
  text-decoration: underline;
  text-decoration-style: solid;
  color: black;
  cursor: pointer;

  @media (max-width: 440px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`
export const Link = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ChatSectionContainer = styled.div`
  width: 35%;

  height: 100%;

  @media (max-width: 440px) {
    width: 100%;
  }
`
export const ChatSection = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 9px 0px #00000040;
  padding: 0.5% 0;
  margin-bottom: 4%;
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
  width: 4rem;
  border-radius: 50%;
  aspect-ratio: 1;

  @media (max-width: 440px) {
    width: 12rem;
  }
`

export const ProfileName = styled.div`
  margin: 2.5% 0 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2rem;

  @media (max-width: 440px) {
    font-size: 4rem;
    line-height: 4rem;
  }
`

export const DateContainer = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 440px) {
    gap: 15px;
  }
`
export const DateSection = styled.div`
  display: flex;

  @media (max-width: 440px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`
export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 440px) {
    flex-wrap: wrap;
    gap: 15px;
  }
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
  border: none;
  @media (max-width: 440px) {
    width: 100%;
    border-radius: 50px;
  }
`
export const EndDate = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  color: #040f0f;
  padding: 1% 4.5%;
  width: 50%;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-left: 0.5px solid #d9d9d9;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border: none;
  @media (max-width: 440px) {
    width: 100%;
    border-radius: 50px;
  }
`
export const DetailsBox = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  color: #040f0f;
  padding: 2% 5%;
  width: 50%;
  box-sizing: border-box;
`

export const BoxHeading = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  color: #646464;

  @media (max-width: 440px) {
    font-size: 2rem;
  }
`

export const BoxContent = styled.div`
  font-size: 1.25rem;
  font-weight: 500;

  @media (max-width: 440px) {
    font-size: 4rem;
  }
`

export const Button = styled.button`
  font-size: 1.25rem;
  font-weight: 500;
  color: #000000;
  text-align: center;
  background: var(--color-primary);
  padding: 2.5% 5%;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000000;
    color: var(--color-primary);
  }

  @media (max-width: 440px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`
export const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 5%;
`
export const ChatButton = styled(Button)`
  &:hover {
    background-color: var(--color-secondary);
    color: black;
  }
  img {
    width: min(2.5rem, 100%);
    aspect-ratio: 1;
  }
  @media (max-width: 440px) {
    img {
      width: min(3rem, 100%);
      aspect-ratio: 1;
    }
  }
`
export const JoinButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  img {
    width: 3rem;
    aspect-ratio: 1;
  }
`
export const AlternateButton = styled(Button)`
  background-color: black;
  border: 1px solid black;
  margin: 16px 0;
  color: var(--color-primary);
  &:hover {
    background-color: white;
    color: black;
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
