import styled from 'styled-components'

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
}

export const HeaderContainer = styled.div`
  position: relative;

  width: 95%;
  height: auto;
  margin: 2.5%;
  margin-bottom: 7.5%;
`

export const LandingHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow: visible;

`

export const LandingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
`

export const HeaderSearchBar = styled.div`
  position: relative;
  width: 80%;
  max-width: 1339px;
  height: 1000%;
  margin: 2.5%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  box-shadow: 0px 0px 12px 0px #00000033;

  @media (max-width: ${breakpoints.tablet}) {
    height: 22%;
    border-radius: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 20%;
    border-radius: 6px;
  }
`

export const HeaderDescription = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
  margin: 1%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 95%;
  }
`

export const HeaderDesHeading = styled.div`
  font-weight: 600;
  letter-spacing: 0.11em;
  text-align: center;

  font-size: 6vw;
  color: #8dd3bb;
`

export const HeaderDesPara = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-align: center;

  font-size: 2vw;
  color: #000000;
`

export const HeaderNavRightLogin = styled.div`
  color: white;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`
