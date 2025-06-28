import styled from 'styled-components'
import backgroundImage1 from './firstImage.jpg'

export const Frame = styled.div`
  height: 900px;
  width: 100%;
  display: flex;
  gap: 4%;
  padding: 0 8% 0 0;

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 40px;
    padding: 0;
    height: 100%;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImage1});
  background-size: cover;
  background-position: center;
  object-fit: contain;
  object-position: center;
  border-radius: 0 0 112px 0;
  overflow: hidden;

  @media (max-width: 440px) {
    width: 100%;
    height: 363px;
    border-bottom-right-radius: 45.28px;
  }
`

export const SideFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 30%;
  height: 100%;
  flex: none;
  justify-content: center;

  @media (max-width: 440px) {
    width: 100%;
    height: 310px;
    padding: 0 16px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`

export const WaitingMessageBig = styled.h1`
  z-index: 2;
  width: 75%;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 5.75rem;
  line-height: 120%;
  letter-spacing: 0%;
  color: white;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 42px;
    line-height: 120%;
    letter-spacing: 0%;
  }
`

export const WaitingMessageSmall = styled.h2`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  letter-spacing: 0%;
  margin: 0;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: 0%;
  }
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  width: 100%;
  flex: none;
`

export const Question = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 1.35rem;
  line-height: 150%;
  letter-spacing: 0%;
  margin: 0;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
  }
`

export const Description = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 1.35rem;
  margin: 0;
  line-height: 150%;
  letter-spacing: 0%;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
  }
`
