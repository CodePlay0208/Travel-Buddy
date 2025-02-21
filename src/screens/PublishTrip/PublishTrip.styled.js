import styled from 'styled-components'

export const PublishTripPage = styled.div`
  position: relative;
  width: 100%;
`

export const InputField = styled.input`
  display: block;
  width: 100%;
  height: 51px;
  padding: 1% 5%;
  border: 2.325px solid #0b87ac;
  border-radius: 9.3px;
  font-family: 'Poppins', sans-serif;
  font-size: 16.275px;
  color: #040f0f;

  @media (max-width: 1080px) {
    font-size: 14px;
  }

  @media (max-width: 786px) {
    border-radius: 3px;
  }
`

export const DescriptionField = styled.textarea`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 80px;
  padding: 1% 1.25%;
  border: none;
  background-color: #f4f4f4;
  border-radius: 20px;
  font-size: 1vw;
  color: #040f0f;

  @media (max-width: 1080px) {
    height: 120px;
  }

  @media (max-width: 786px) {
    padding: 1% 2.5%;
    font-size: 2vw;
    border-radius: 20px;
  }
`

export const PublishTripContainer = styled.div`
  position: relative;
  padding: 1%;
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
  font-weight: 700;
  font-size: 3vw;
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
  width: calc(95% - 385px);
  margin-right: 5%;
  border-radius: 15px;
  position: relative;

  @media (max-width: 1080px) {
    width: 100%;
  }
`

export const LeftSection = styled.div`
  position: relative;
  height: 100%-50px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px #0000001a;
  border-radius: 10px;
  padding: 5%;

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
  position: relative;

  @media (max-width: 1080px) {
    margin: 0 0 10px 0;
  }
`

export const InputLabel = styled.label`
  font-weight: 600;
  font-size: 1vw;
  line-height: 1.4vw;
  color: #040f0f;
  margin-bottom: 10px;

  @media (max-width: 1080px) {
  }
`

export const ToggleBetweenTripUser = styled.div`
  position: relative;
  display: flex;
  gap: 3%;
  height: 50px;
  border-radius: 15px 15px 0px 0px;

  @media (max-width: 1080px) {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }

  @media (max-width: 786px) {
    width: 100%;
    border-radius: 5px 5px 0px 0px;
  }
`

export const ToggleTab = styled.div`
  cursor: pointer;
  transition: background-color 0.4s ease;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.5vw;
  line-height: 2vw;
  height: 100%;
  color: #000000;

  position: relative;
  padding: 1%;
  border-radius: 15px 15px 0px 0px;
  &.active {
    background-color: #8dd3bb;
  }

  @media (max-width: 1080px) {
    border-radius: 10px 10px 0px 0px;
  }

  @media (max-width: 786px) {
    border-radius: 5px 5px 0px 0px;
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
  height: 60px;
  margin: 20px auto;
  background: #ffffff;
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
  padding: 10px;
  color: #559c84;
  background-color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: 500;
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
  position: relative;
  display: flex;
  gap: 20px;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const InputColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 3%;
  width: ${(props) => props.width ?? '100%'};
`

export const PublishTripRightSection = styled.div`
  width: 385px;
  max-width: 500px;
  position: relative;

  background: #ffffff;
  border-radius: 12px;
  margin-top: 3%;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
  }
`
