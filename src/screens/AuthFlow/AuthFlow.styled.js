import styled, { css } from 'styled-components'
import { Label } from '../../styles/Global'

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

  @media (max-width: 786px) {
    margin-bottom: 10%;
  }
`

export const TitleContainer = styled.div`
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  font-family: "lufga" !important;
  color: var(--color-primary);

  @media (max-width: 786px) {
    font-size: 4rem;
  }
`

export const FormContainer = styled.div`
  margin: 3% 5% 3% 7%;

  @media (max-width: 440px) {
    margin: 10% 5%;
  }
`
export const ProfileImage = styled.img`
  border-radius: 50%;
  border-radius: 50%;
  width: 90%;
  object-fit: cover;
  aspect-ratio: 1;
`
export const EditPic = styled.img`
  position: absolute;
  right: 5%;
  z-index: 10;
  bottom: 5%;
  width: 20%;
`
export const ProfileContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 786px) {
    width: 80%;
  }

  @media (max-width: 440px) {
    padding: 10%;
    width: 100%;
  }
`
export const ProfilePic = styled.div`
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 2px solid #6ecead;

  @media (max-width: 786px) {
    border-radius: 50%;
  }

  @media (max-width: 440px) {
    width: 100%;
    border-radius: 50%;
  }
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
  height: 1rem;

  @media (max-width: 786px) {
    height: 2rem;
  }
`
export const SupportingImg = styled.img`
  width: 30%;
  border-radius: 15px;

  @media (max-width: 786px) {
    width: 60%;
    border-radius: 10px;
  }

  @media (max-width: 440px) {
    width: 100%;
    border-radius: 5px;
    padding: 10%;
  }
`
export const Form = styled.form`
  width: 60%;

  @media (max-width: 786px) {
    width: 100%;
  }
`

export const BackButtonText = styled.p`
  margin-left: 1%;
  font-size: 1rem;

  @media (max-width: 786px) {
    font-size: 2rem;
  }
`
export const SetupPageSkip = styled.div`
  color: #009965;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0px 1px;

  &:hover {
    color: #57caa1;
  }

  &:active {
    color: #6eddb6;
    transform: scale(0.98);
  }

  @media (max-width: 786px) {
    font-size: 2rem;
  }

  @media (max-width: 440px) {
    width: 100%;
    padding: 0 40%;
    font-size: 3rem;
  }
`

export const FormHeadingContainer = styled.div`
  flex: 1;
  margin-bottom: 1%;
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 786px) {
    font-size: 6rem;
  }

  ${({ customStyles }) => customStyles && customStyles};
`

export const FormSubHeadingText = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: #848282;

  padding: 2% 0;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border: ${(props) => props.border};
  span {
    font-weight: 600;
    color: #000000;
  }

  @media (max-width: 786px) {
    font-size: 2rem;
  }

  @media (max-width: 440px) {
    font-size: 3rem;
  }
`

export const DividerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6% 0px;
  color: #112211;
  font-size: 1rem;

  @media (max-width: 786px) {
    font-size: 2rem;
  }
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
  font-size: 1rem;

  @media (max-width: 786px) {
    font-size: 2rem;
  }
`

export const DesignContainer = styled.div`
  width: 40%;
  aspect-ratio: 0.9;
  height: fit-content;
  padding: 4% 6%;

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
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;

  @media (max-width: 786px) {
    border-radius: 3px;
  }
`

export const ContinueWithText = styled.div`
  font-weight: 400;
  font-size: 1rem;

  @media (max-width: 786px) {
    font-size: 2rem;
  }

  @media (max-width: 440px) {
    font-size: 3rem;
  }
`

export const ImageGoogleIcon = styled.img`
  height: 1rem;
  margin-right: 2.5%;

  @media (max-width: 440px) {
    height: 3rem;
  }
`

export const OtpContainer = styled.div`
  width: 60%;
  @media (max-width: 440px) {
    width: 100%;
  }
`
export const responsiveStyles = styled.div`
  input::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    padding-left: 0.5%;
  }

  @media (max-width: 550px) {
    input::placeholder {
      font-size: 1rem;
    }
  }
`

export const VerifyCodeFormInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 786px) {
    flex-direction: column-reverse;
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

  @media (max-width: 786px) {
    border-radius: 16px;
  }
`

export const LabelCust = styled(Label)`
  font-size: 1rem;
  background-color: white;
  font-weight: 500;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
`

export const MainButtonAuth = styled.button`
  background-color: var(--color-primary);
  border-style: none;
  width: 100%;
  border-radius: 30px;
  margin-top: 5%;
  font-size: 1rem;
  padding: 3%;
  color: white;
  font-weight: 500;

  &:active {
    font-size: 1.2rem;
  }
  &:hover {
    background-color: #7abba4;
  }

  ${({ mainButtonStyles }) => mainButtonStyles && mainButtonStyles}

  @media (max-width: 786px) {
    font-size: 2rem;
  }

  @media (max-width: 440px) {
    font-size: 3rem;
  }
`
