import styled from 'styled-components'

export const PublishTripPage = styled.div`
  position: relative;
  width: 100%;
`

export const InputField = styled.input`
  display: block;
  width: 100%;
  padding: 13.95px;
  border: 2.325px solid #0b87ac;
  border-radius: 9.3px;
  font-family: 'Poppins', sans-serif;
  font-size: 16.275px;
  color: #040f0f;

  ::placeholder {
    color: #040f0f;
    opacity: 0.7;
  }

  @media (max-width: 1080px) {
    padding: 10px;
    font-size: 14px;
  }
`

export const DescriptionField = styled.textarea`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 151px;
  padding: 13.95px;
  border: 2.325px solid #0b87ac;
  border-radius: 9.3px;
  font-size: 16.275px;
  color: #040f0f;

  ::placeholder {
    color: #040f0f;
    opacity: 0.7;
  }

  @media (max-width: 1080px) {
    padding: 10px;
    font-size: 14px;
    height: 120px;
  }
`

export const PublishTripContainer = styled.div`
  position: relative;
  padding: 3%;
  width: 95%;
  max-width: 1604px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 10px;

  @media (max-width: 1080px) {
    padding: 5%;
  }
`

export const PublishTripHeading = styled.div`
  position: relative;
  padding-left: 2%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 3.5vw;
  line-height: 1.8;

  @media (max-width: 1080px) {
    font-size: 5vw;
    padding-left: 0;
    text-align: center;
  }
`

export const PublishTripContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 80%;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`

export const PublishTripLeftSection = styled.div`
  width: 58%;
  max-width: 800px;

  @media (max-width: 1080px) {
    width: 100%;
  }
`

export const LeftSection = styled.div`
  position: relative;
  width: 95%;
  max-width: 906px;
  height: 90%;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 10px 10px;
  padding: 2% 4%;

  @media (max-width: 1080px) {
    width: 100%;
    padding: 3% 5%;
  }
`

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 2% 2% 2%;

  @media (max-width: 1080px) {
    margin: 0 0 10px 0;
  }
`

export const InputLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1vw;
  line-height: 1.4;
  color: #040f0f;
  margin-bottom: 10px;

  @media (max-width: 1080px) {
    font-size: 14px;
  }
`

export const ToggleBetweenTripUser = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  max-width: 906px;
  padding: 2% 0;
  background: #8dd3bb;
  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0px 0px;

  @media (max-width: 1080px) {
    width: 100%;
    padding: 3% 0;
  }
`

export const ToggleTab = styled.div`
  cursor: pointer;
  transition: background-color 0.4s ease;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.8vw;
  line-height: 2vw;
  color: #000000;
  margin: 0 4%;
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    right: 0;
    height: 0.4vh;
    background-color: #559c84;
    border-radius: 10px;
  }

`

export const Divider = styled.div`
  width: 0.5%;
  height: 4vw;
  
  background: #ffffff;
  border-radius: 50px;
  
  @media (max-width: 1080px) {
    height: 20px;
  }
`

export const PublishTripButton = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 302px;
  height: 74.83px;
  margin: 20px auto;
  background: #ffffff;
  border: 3px solid #8dd3bb;
  border-radius: 8.90855px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
    max-width: 100%;
  }
`

export const NextButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  color: #559c84;
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #559c84;
    color: white;
  }

  @media (max-width: 1080px) {
    font-size: 14px;
  }
`

export const SubmitButton = styled(NextButton)`
  background-color: #8dd3bb;
  color: black;
`

export const InputRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const PublishTripRightSection = styled.div`
  width: 42%;
  max-width: 500px;
  position: relative;
  background: #ffffff;
  border: 3px solid rgba(179, 204, 252, 0.1);
  box-shadow: 0px 4px 21px 1px rgba(36, 99, 235, 0.25);
  border-radius: 12px;
  padding: 3%;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
  }
`