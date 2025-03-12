import styled from 'styled-components'

export const SignUpTwoInput = styled.div`
  display: flex;
  flex: 1 1;
  width: 100%;

  gap: 1.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  ${({ customStyles }) => customStyles && customStyles}
`

export const SignUpFormInputsContainer = styled.div`
  margin-top: 1%;
`

export const SignUpTermsAgreementContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.5%;
  cursor: pointer;
  padding: 0px 4px;
`

export const SignUpTermsAgreementText = styled.label`
  flex: 1;
  display: flex;
  padding-top: 4px;
  margin-left: 5px;
  font-size: 1rem;
  font-weight: 500;
`

export const SignUpTermsLink = styled.a`
  text-decoration: none;

  &:hover .SignUpLinkText {
    color: #e14944;
  }

  &:active .SignUpLinkText {
    color: #ca2c27;
    transform: scale(0.98);
  }
`

export const SignUpLinkText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #ff8682;
  transition:
    color 0.3s ease,
    transform 0.1s ease;
  cursor: pointer;
  padding: 0px 4px;
`

export const SignUpCreateAccountContainer = styled.div`
  margin-top: 5%;
  border-style: none;
  border-width: 0px;
`

export const SignUpCreateAccountButton = styled.button`
  background-color: var(--color-primary);
  padding: 15px;
  font-size: 1.1rem;
  width: 100%;
  border-width: 0px;
  font-weight: 600;
  border-radius: 5px;
`

export const SignUpAlreadyHaveContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  margin-top: 2%;
  align-items: flex-start;
`

export const SignUpAlreadyHaveText = styled.div`
  display: flex;
  font-size: 0.9rem;
  font-weight: 500;
  flex-direction: row;
  margin: 1% 0;
  justify-content: center;
  align-items: center;
  color: #848282;

  @media (max-width: 786px) {
    font-size: 2rem;
  }

  @media (max-width: 440px) {
    font-size: 3rem;
  }
`

export const SignUpLoginLink = styled.span`
  text-decoration: none;
  margin: 2px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #252525;
  transition:
    color 0.3s ease,
    transform 0.1s ease;
  cursor: pointer;

  &:hover {
    color: #e14944;
  }

  &:active {
    color: #ca2c27;
    transform: scale(0.98);
  }

  @media (max-width: 786px) {
    font-size: 2rem;
  }

  @media (max-width: 440px) {
    font-size: 3rem;
  }
`

export const SignUpLoginText = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: #000000;
  transition:
    color 0.3s ease,
    transform 0.1s ease;
  cursor: pointer;
`

export const SignUpCopyrightTextContainer = styled.div`
  width: fit-content;
  left: -2%;
  bottom: -3%;
  z-index: 2;
`

export const SignUpDesignContainer = styled.div`
  flex: 1 2;
  max-width: 42%;
  min-width: 0%;
  height: fit-content;
  padding: 20px 50px 0px 0%;

  @media (max-width: 550px) {
    display: none;
  }
`

export const SignUpAuthDesignImage = styled.img`
  height: 95vh;
  min-height: 90vh;
  margin-right: 50px;

  @media (max-width: 550px) {
    display: none;
  }
`

export const SignUpGoogleSignUpButton = styled.button`
  padding: 1.4% 20%;
  border-style: solid;
  border-width: 2px;
  border-radius: 2px;
  border-color: var(--color-primary);
  background-color: white;

  &:active {
    border-width: 2.5px;
  }

  @media (max-width: 855px) {
    padding: 1.4% 20%;
  }
`

export const SignUpContinueWithText = styled.span`
  display: none;

  @media (min-width: 856px) {
    display: inline;
  }
`
