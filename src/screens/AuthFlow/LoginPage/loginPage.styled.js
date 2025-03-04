import styled from 'styled-components'

export const LoginRememberMeAndForgetPasswordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5%;
  padding: 0px 4px;
`

export const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const LoginRememberMeContainer = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`

export const LoginForgetPasswordLink = styled.a`
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 800;
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
`

export const LoginSignUpLink = styled.span`
  text-decoration: none;
  font-size: 0.9vw;
  margin-left: 2px;
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
    font-size: 2vw;
  }
  
  @media (max-width: 440px) {
    font-size: 3vw;
  }
`

export const Divider = styled.div`
  height: 0.5px;
  width: 45%;
  background-color: #112211;
`

export const GoogleSignUpButton = styled.button`
  padding: 1.4% 20%;
  border-style: solid;
  border-width: 2px;
  border-radius: 2px;
  border-color: #8dd3bb;
  background-color: #8dd3bb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  &:active {
    border-width: 2.5px;
  }
`

export const ContinueWithText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
`

export const DesignContainer = styled.div`
  flex: 1 2;
  max-width: 42%;
  min-width: 0%;
  height: fit-content;
  padding: 20px 0px 0px 0%;

  @media (max-width: 550px) {
    display: none;
  }
`

export const AuthDesignImage = styled.img`
  height: 95vh;
`

export const LoginButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 786px) {
    flex-direction: column;
    gap: 5px;
  }
`
