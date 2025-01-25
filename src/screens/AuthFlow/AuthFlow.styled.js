import styled, { css } from 'styled-components'

export const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  flex: 1;
  display: flex;
  background-color: white;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`

export const FormAndCopyrightContainer = styled.div`
  flex: 1.3 1;
  width: 50%;
  // margin: 2.35% 12% 0% 2.35%;
  margin: 2.35%;

  @media (max-width: 550px) {
    margin: 0 auto;
    width: 100%;
  }
`

export const FormAndTitleContainer = styled.div`
  margin-bottom: 18%;
`

export const TitleContainer = styled.div`
  cursor: pointer;
  font-size: 2.5rem;
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
  margin-bottom: 10px;
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
  margin-left: 10px;
`

export const FormHeadingContainer = styled.div`
  flex: 1;
  margin-bottom: 1rem;
  font-size: 3.5rem;
  font-weight: 700;

  ${({ customStyles }) => customStyles && customStyles};
`

export const FormSubHeadingText = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  color: #848282;

  padding-bottom: 1.25rem;
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

  p {
    font-size: 0.9rem;
  }
`

export const Divider = styled.div`
  height: 0.3px;
  width: 40%;
  background-color: #112211;

  ${({ customStyles }) => customStyles && customStyles}
`

export const OrLoginWithContainer = styled.div`
  margin: 0px 8px;
  text-align: center;
  color: #112211;
  font-size: 0.9rem;
`

export const DesignContainer = styled.div`
  flex: 1 2;
  max-width: 42%;
  height: fit-content;
  padding: 40px 0px 0px 0%;

  @media (max-width: 550px) {
    display: none;
  }
`

export const AuthDesignImage = styled.img`
  height: 92vh;

  @media (max-width: 550px) {
    display: none;
  }
`

export const GoogleSignUpButton = styled.div`
  padding: 1.4% 20%;
  background-color: #8dd3bb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;

  @media (max-width: 855px) {
    padding: 1.4% 20%;
    background-color: white;

    p {
      display: none;
    }
  }
`

export const ContinueWithText = styled.p`
  color: white;
  font-weight: 400;
  font-size: 1rem;

  &:hover {
    background-color: #e0fff4;
  }
  @media (max-width: 855px) {
    display: none;
  }
`

export const ImageGoogleIcon = styled.img`
  height: 1rem;
  margin-right: 8px;
`

export const responsiveStyles = styled.div`
  input::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    padding-left: 4px;
  }

  @media (max-width: 550px) {
    input::placeholder {
      font-size: 0.9rem;
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

  p {
    font-size: 16px;
    font-weight: 400;
    color: #252525;
  }

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

  p {
    font-weight: 700;
    font-size: 1.2rem;
    color: #ffffff;
  }

  &:active {
    font-size: 1.6rem;
  }
  &:hover {
    background-color: #7abba4;
  }

  ${({ mainButtonStyles }) => mainButtonStyles && mainButtonStyles}
`
