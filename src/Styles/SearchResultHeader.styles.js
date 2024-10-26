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
`

export const LandingHeader = styled.div`
  position: relative;
  width: 100%;
  height: min(40vw, 60vh);
  border-radius: 25px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #000000ac 0%, #00000000 60%);
    z-index: 1;
    border-radius: 25px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    border-radius: 20px;

    &::before {
      content: '';

      border-radius: 20px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 15px;

    &::before {
      content: '';

      border-radius: 15px;
    }
  }
`

export const LandingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
`

export const HeaderSearchBar = styled.div`
  position: absolute;
  width: 80%;
  max-width: 1339px;
  height: 24%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  box-shadow: 1px 4px 13px;

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
  position: absolute;
  width: 80%;
  max-width: 753px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 95%;
  }
`

export const HeaderDesHeading = styled.div`
  font-weight: 700;
  font-size: 5vw;
  transform: translate(0, -100%);
  color: white;
  margin-bottom: 2vw;
`

export const HeaderDesPara = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2vw;
  transform: translate(0, -300%);
  color: white;
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
