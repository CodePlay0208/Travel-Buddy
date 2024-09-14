import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: relative;
  width: 95%;
  height: auto;
  margin: 2.5%;
`

export const LandingHeader = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
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
`

export const HeaderDescription = styled.div`
  position: absolute;
  width: 80%;
  max-width: 753px;
  height: auto;
  top: 35vh;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 1;
`

export const HeaderDesHeading = styled.div`
  font-family: 'TradeGothic LT Extended', sans-serif;
  font-weight: 700;
  font-size: 5rem;
  transform: translate(0, -100%);
  color: white;
`

export const HeaderDesPara = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  transform: translate(0, -300%);
  color: white;
`

export const HeaderNavRightLogin = styled.div`
  color: white;
`

export const Media768 = styled.div`
  @media (max-width: 768px) {
    ${LandingHeader} {
      height: 50vh;
    }

    ${HeaderSearchBar} {
      width: 90%;
      height: 50px;
      top: 45vh;
    }

    ${HeaderDescription} {
      top: 30vh;
      width: 90%;
    }

    ${HeaderDesHeading} {
      font-size: 1.5rem;
    }

    ${HeaderDesPara} {
      font-size: 1rem;
    }
  }
`

export const Media480 = styled.div`
  @media (max-width: 480px) {
    ${LandingHeader} {
      height: 40vh;
    }

    ${HeaderSearchBar} {
      width: 95%;
      height: 40px;
      top: 40vh;
    }

    ${HeaderDescription} {
      top: 25vh;
      width: 95%;
    }

    ${HeaderDesHeading} {
      font-size: 1.2rem;
    }

    ${HeaderDesPara} {
      font-size: 0.9rem;
    }
  }
`
