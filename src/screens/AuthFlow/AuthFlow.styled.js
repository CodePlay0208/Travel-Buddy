import styled, { css } from 'styled-components'

export const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  flex: 1;
  display: flex;
  background-color: white;
`

export const FormAndCopyrightContainer = styled.div`
  flex: 1.3 1;
  width: 55%;
  margin: 2%;
`

export const FormAndTitleContainer = styled.div`
  margin-bottom: 18%;
`

export const TitleContainer = styled.div`
  cursor: pointer;
  font-size: 2vw;
  font-weight: 600;
  color: #000000;
`

export const FormContainer = styled.div`
  margin: 4.8% 6.8%;
`

export const BackButtonContainer = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  margin-bottom: 1%;
  user-select: none;
  cursor: pointer;

  &:hover p,
  &:active p {
    color: #071007;
    font-weight: 500;
  }
`

export const BackButtonIcon = styled.img`
  height: 12px;
`

export const BackButtonText = styled.p`
  margin-left: 1%;
`

export const FormHeadingContainer = styled.div`
  flex: 1;
  margin-bottom: 1%;
  font-size: 3vw;
  font-weight: 700;

  ${({ customStyles }) => customStyles && customStyles};
`

export const FormSubHeadingText = styled.div`
  font-size: 1vw;
  font-weight: 400;
  color: #848282;

  padding-bottom: 2%;
  border-style: solid;
  border-width: 0px 0px 1px 0px;

  span {
    color: #000000;
  }
`

export const DividerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2% 0px;
  color: #112211;
  font-size: 1vw;
`

export const Divider = styled.div`
  height: 0.3px;
  width: 40%;
  background-color: #112211;

  ${({ customStyles }) => customStyles && customStyles}
`

export const OrLoginWithContainer = styled.div`
  margin: 0px 1%;
  text-align: center;
  color: #112211;
  font-size: 1vw;
`

export const DesignContainer = styled.div`
  width: 40%;
  aspect-ratio: 0.9;
  height: fit-content;
  padding: 2%;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const AuthDesignImage = styled.img`
  width: 100%;
  height: 100%;
`

export const GoogleSignUpButton = styled.div`
  padding: 1.4% 20%;
  background-color: #8dd3bb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
`

export const ContinueWithText = styled.div`
  font-weight: 400;
  font-size: 1vw;
`

export const ImageGoogleIcon = styled.img`
  height: 1.5vw;
  margin-right: 1%;
`

export const responsiveStyles = styled.div`
  input::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    padding-left: 0.5%;
  }

  @media (max-width: 550px) {
    input::placeholder {
      font-size: 1vw;
    }
  }
`

export const ButtonAlt = styled.button`
  display: flex;
  flex: 1;
  border-radius: 32px;
  border-style: solid;
  border-width: 1px;
  border-color: #252525;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2%;

  &:hover {
    background-color: #e0fff4;
  }
`

export const MainButtonAuth = styled.button`
  background-color: #8dd3bb;
  border-style: none;
  width: 100%;
  border-radius: 30px;
  margin-top: 1.5%;
  font-size: 1vw;
  padding: 2%;

  &:active {
    font-size: 1.2vw;
  }
  &:hover {
    background-color: #7abba4;
  }

  ${({ mainButtonStyles }) => mainButtonStyles && mainButtonStyles}
`
