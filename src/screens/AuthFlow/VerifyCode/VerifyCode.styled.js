import styled from 'styled-components'

export const VerifyCodeFormInputsContainer = styled.div`
  margin-top: 5%;
`

export const VerifyCodeResendCodeContainer = styled.div`
  display: flex;
  margin-top: 2.5%;
`

export const VerifyCodeDidntRecieveText = styled.p`
  font-size: 1rem;
  font-weight: 500;
`

export const VerifyCodeResendLink = styled.a`
  text-decoration: none;
`

export const VerifyCodeResendText = styled.p`
  margin-left: 5px;
  font-size: 1rem;
  font-weight: 500;
  color: #ff8682;
  cursor: pointer;
  padding: 0px 1px;

  &:hover {
    color: #e14944;
  }

  &:active {
    color: #ca2c27;
    transform: scale(0.98);
  }
`

export const VerifyCodeVerifyButtonContainer = styled.div`
  margin-top: 4.5%;
  border-style: none;
  border-width: 0px;
`

export const VerifyCodeVerifyButton = styled.button`
  background-color: #8dd3bb;
  padding: 15px;
  font-size: 1.1rem;
  width: 100%;
  border-width: 0px;
  font-weight: 600;
  border-radius: 5px;

  &:active {
    font-size: 1.125px;
  }
`
