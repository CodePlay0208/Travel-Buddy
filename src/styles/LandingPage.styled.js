import styled from 'styled-components';

export const LandingContainer = styled.div`
  width: auto;
  
`
export const H2Item = styled.h2`
  display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 120%;
  color: #252525;
  margin: 0;
  text-align: left;
  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-style: Bold;
    font-size: 24px;
    leading-trim: NONE;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
  }
`
export const H1Item = styled.h1`
  display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 120%;
  color: #252525;
  margin: 0;
  text-align: left;
  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-style: Bold;
    font-size: 24px;
    leading-trim: NONE;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
  }
`
export const PItem = styled.p`
  display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
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