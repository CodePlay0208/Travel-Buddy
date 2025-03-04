import styled from 'styled-components'

export const VerifyCodeResendCodeContainer = styled.div`
  display: flex;
  margin-top: 2.5%;
`

export const VerifyCodeDidntRecieveText = styled.p`
  font-size: 0.9vw;
  font-weight: 500;
  color: #848282;
  @media (max-width: 786px) {
    font-size: 2vw;
  }

  @media (max-width: 440px) {
    font-size: 3vw;
  }
`

export const VerifyCodeResendLink = styled.div`
  text-decoration: none;
`

export const VerifyCodeResendText = styled.p`
  margin-left: 5px;
  font-size: 0.9vw;
  font-weight: 500;
  color: #8dd3bb;
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
    font-size: 2vw;
  }

  @media (max-width: 440px) {
    font-size: 3vw;
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
