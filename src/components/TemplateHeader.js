import React from 'react'
import styled from 'styled-components'
import backgroundImage1 from './secondImage.jpg'
const Frame = styled.div`
  height: 900px;
  width: 100%;
  display: flex;
  gap: 4%;

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 40px;
    padding: 0;
    height: 100%;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${backgroundImage1});
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media (max-width: 440px) {
    width: 100%;
    height: 363px;
  }
`

const SideFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 58%;
  height: 100%;
  justify-content: center;
  gap: 24px;
  @media (max-width: 440px) {
    width: 90%;
    height: 310px;
    gap: 16px;
  }
`
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`

const WaitingMessageBig = styled.h1`
  z-index: 2;
  margin: 0;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
  }
`

const WaitingMessageSmall = styled.h2`
  z-index: 2;
  margin: 0;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffff;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
    line-height: 148%;
    letter-spacing: 0%;
    text-align: center;
  }
`

const TemplateHeader = ({ heading, content }) => (
  <Frame>
    <ImageWrapper>
      <Overlay />
      <SideFrame>
        <WaitingMessageBig>{heading}</WaitingMessageBig>
        <WaitingMessageSmall>{content}</WaitingMessageSmall>
      </SideFrame>
    </ImageWrapper>
  </Frame>
)

export default TemplateHeader
