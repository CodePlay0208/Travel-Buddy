import styled from 'styled-components'

export const Frame = styled.div`
  width: 100%;
  display: flex;
  gap: 60px;
  flex-direction: column;

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 40px;
    padding: 0;
    height: 100%;
    margin: 40px 0;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: black;
  object-fit: contain;
  object-position: center;
  overflow: hidden;

  @media (max-width: 440px) {
    width: 100%;
    height: 110px;
    gap: 8px;
  }
`

export const SideFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  height: 100%;
  flex: none;
  justify-content: center;

  @media (max-width: 440px) {
    gap: 16px;
    width: 100%;
    padding: 0 16px;
  }
`

export const WaitingMessageBig = styled.h1`
  z-index: 2;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 4.25rem;
  color: #8dd3bb;
  margin: 0;
  line-height: 120%;
  letter-spacing: 0%;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
    letter-spacing: 0%;
  }
`

export const WaitingMessageSmall = styled.h2`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 2rem;
  z-index: 2;
  line-height: 120%;
  letter-spacing: 0%;
  color: white;
  margin: 0;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    letter-spacing: 0%;
  }
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: ${(props) => props?.width ?? '100%'};
  flex: none;

  @media (max-width: 440px) {
    width: 100%;
    align-items: center;
    gap: 16px;
  }
`
export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  transition:
    max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  max-height: ${({ expanded }) => (expanded ? '500px' : '0')};
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};

  @media (max-width: 440px) {
    gap: 3px;
  }
`

export const Question = styled.h1`
  font-family: Montserrat;
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
  cursor: pointer;
  padding-top: 8px;
  padding-right: 24px;
  padding-bottom: 8px;
  padding-left: 24px;
  letter-spacing: 0%;
  margin: 0;
  background-color: ${({ expanded }) => (expanded ? 'black' : 'white')};
  color: ${({ expanded }) => (expanded ? '#8dd3bb' : 'black')};

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
    border-bottom: 2px solid #8dd3bb;
    padding: 4px 10px;
  }
`

export const Description = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 1.4rem;
  margin: 0;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: justify;
  }
`

export const VerticalDivider = styled.div`
  height: 60px;
  border-right: 2px solid #000000;

  @media (max-width: 440px) {
    height: 24px;
    border-right: 1px solid #000000;
  }
`
