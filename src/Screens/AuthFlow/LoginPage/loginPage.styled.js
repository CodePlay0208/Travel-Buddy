import styled from 'styled-components'

export const LoginRememberMeAndForgetPasswordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.5%;
  padding: 0px 4px;
`

export const LoginRememberMeContainer = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`

export const LoginForgetPasswordLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: #ff8682;
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

export const LoginLoginButtonContainer = styled.div`
  margin-top: 5%;
  border-style: none;
  border-width: 0px;
`

export const LoginLoginButton = styled.button`
  background-color: #8dd3bb;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: 500;
  width: 100%;
  border-width: 0px;
  border-radius: 5px;

  &:active {
    font-size: 1.125px;
  }
`

export const LoginDontHaveAccountContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`

export const LoginSignUpLink = styled.a`
  text-decoration: none;
  margin-left: 5px;
  font-size: 1rem;
  font-weight: 500;
  color: #ff8682;
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

export const DividerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 6% 0px;
`

export const Divider = styled.div`
  height: 0.3px;
  width: 40%;
  background-color: #112211;
`

export const OrLoginWithContainer = styled.div`
  color: #112211;
  font-size: 0.9rem;
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

export const GoogleIcon = styled.img`
  height: 40px;

  ${GoogleSignUpButton}:active & {
    height: 44px;
  }
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

export const InputPlaceholder = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  padding-left: 4px;

  &::placeholder {
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 950px) {
    &::placeholder {
      font-size: 0.9rem;
    }
  }
`
