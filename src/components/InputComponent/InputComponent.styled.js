import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${({ customContainerStyles }) => customContainerStyles && css(customContainerStyles)}
`

export const InputLabel = styled.p`
  font-size: 1vw;
  background-color: white;
  font-weight: 500;
  margin-left: 8px;

  span {
    color: #ff2b2b;
  }
  ${({ customLabelStyles }) => customLabelStyles && css(customLabelStyles)}

  @media (max-width: 786px) {
    font-size: 2vw;
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
  font-size: 1.5vw;

  @media (max-width: 786px) {
    border-radius: 20px;
    font-size: 3vw;
  }
`

export const InputField = styled.input`
  width: 100%;
  border-style: none;
  background-color: #f4f4f4;
  font-size: 1.5vw;
  ${({ customInputFieldStyles }) => customInputFieldStyles && css(customInputFieldStyles)}

  @media (max-width: 786px) {
    font-size: 3vw;
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
