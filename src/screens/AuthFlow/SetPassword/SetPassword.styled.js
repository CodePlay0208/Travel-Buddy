import styled from 'styled-components'

export const InputContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 320px) {
    margin-top: 20px;
  }
`

export const BtnContainer = styled.div`
  margin-top: 6.5%;
  border-style: none;
  border-width: 0px;

  @media (max-width: 768px) {
    margin-top: 10%;
  }
`

export const SubmitBtn = styled.button`
  background-color: #8dd3bb;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: 500;
  width: 100%;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    font-size: 1.125rem;
  }
`

export const BtnText = styled.p`
  font-weight: 600;
`

export const CopyTextContainer = styled.div`
  width: fit-content;
  left: -2%;
  bottom: -3%;
  z-index: 2;
`

export const Input = styled.input`
  ::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    padding-left: 4px;
    font-size: 0.9rem;

    @media (max-width: 550px) {
      font-size: 0.9rem;
    }
  }
`

export const Heading = styled.h1`
  @media (max-width: 950px) {
    font-size: 2rem;
  }
`

export const SubHeading = styled.p`
  @media (max-width: 950px) {
    font-size: 1rem;
  }
`

export const ReEnterPasswordContainer = styled.div`
  @media (max-width: 768px) {
    margin-top: 6.5%;
  }

  @media (max-width: 320px) {
    margin-top: 20px;
  }
`

export const DesignContainer = styled.div`
  @media (max-width: 550px) {
    display: none;
  }
`
