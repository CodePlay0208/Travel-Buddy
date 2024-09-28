import styled from 'styled-components'

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
  margin: 2.35% 12% 0% 3.5%;

  @media (max-width: 550px) {
    margin: 0 auto;
    width: 100%;
  }
`

export const FormAndTitleContainer = styled.div`
  margin-bottom: 18%;
`

export const TitleContainer = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  color: #42a7c3;
`

export const FormContainer = styled.div`
  margin: 6.8%;
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
  font-size: 3.125rem;
  font-weight: 700;
`

export const FormSubHeadingText = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
`

export const DividerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 6% 0px;
`

export const Divider1 = styled.div`
  height: 0.3px;
  width: 40%;
  background-color: #112211;
`

export const Divider2 = styled.div`
  height: 0.3px;
  width: 40%;
  background-color: #112211;
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
  padding: 20px 0px 0px 0%;

  @media (max-width: 550px) {
    display: none;
  }
`

export const AuthDesignImage = styled.img`
  height: 95vh;

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
  font-weight: 700;
  font-size: 1.5rem;

  @media (max-width: 855px) {
    display: none;
  }
`

export const GoogleIcon = styled.img`
  height: 40px;
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
