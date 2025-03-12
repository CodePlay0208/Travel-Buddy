import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 2% 0;
  flex-direction: column;
  ${({ customContainerStyles }) => customContainerStyles && css(customContainerStyles)}
`

export const InputLabel = styled.p`
  font-size: 1rem;
  background-color: white;
  font-weight: 500;

  span {
    color: #ff2b2b;
  }
  ${({ customLabelStyles }) => customLabelStyles && css(customLabelStyles)}

  @media (max-width: 786px) {
    font-size: 2rem;
  }

  @media (max-width: 440px) {
    font-size: 3rem;
  }
`

export const InputFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 40px;
  padding: 2%;
  border-style: none;
  background-color: #f4f4f4;
  font-size: 1.5rem;

  @media (max-width: 786px) {
    border-radius: 20px;
    font-size: 3.5rem;
  }
`

export const InputField = styled.input`
  width: 100%;
  border-style: none;
  background-color: #f4f4f4;
  font-size: 1rem;
  ${({ customInputFieldStyles }) => customInputFieldStyles && css(customInputFieldStyles)}

  @media (max-width: 786px) {
    font-size: 3.5rem;
  }
`

export const PassowrdEyeContainer = styled.div`
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const PasswordEyeImage = styled.img`
  height: 20px;

  @media (max-width: 786px) {
    height: 30px;
  }
`
