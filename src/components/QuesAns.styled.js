import styled from 'styled-components'

export const QuesAnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin: 0 5%;
  margin-bottom: 32px;
  `

export const Heading = styled.h2`
  display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  color: #252525;
  margin: 0;
  text-align: left;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-style: Bold;
    font-size: 32px;
    leading-trim: NONE;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
  }
`

export const QuesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (max-width: 440px) {
    gap: 24px;
  }
`

export const IconWrapper = styled.div`
  width: 40px;
  height: 48px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 440px) {
    width: 16px;
    height: 22px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`
export const QuesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
  min-height: 48px;

  @media (max-width: 440px) {
    gap: 6px;
  }
`
export const Question = styled.h3`
  margin: 0px;
  padding: 0px;
  flex: 1 1 0%;
  font-family: Montserrat, Arial, sans-serif;
  font-weight: 700;
  font-size: 1.85rem;
  line-height: 150%;
  text-align: justify;
  color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-style: Bold;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
  }
`
export const Answer = styled.p`
  display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 400;
  font-size: 1.85rem;
  line-height: 150%;
  text-align: justify;
  color: #000000;
  margin: 0;
  width: 100%;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: justify;
  }
`
