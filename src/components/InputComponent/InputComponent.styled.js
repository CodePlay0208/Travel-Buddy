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
    color: #FF2B2B;
  }
  ${({ customLabelStyles }) => customLabelStyles && css(customLabelStyles)}
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
`

export const InputField = styled.input`
  width: 100%;
  border-style: none;
  background-color: #f4f4f4;
  font-size: 1.5vw;
  ${({ customInputFieldStyles }) => customInputFieldStyles && css(customInputFieldStyles)}
`

export const PassowrdEyeContainer = styled.div`
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const PasswordEyeImage = styled.img`
  height: 20px;
`
