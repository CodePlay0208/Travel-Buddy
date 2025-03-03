import styled from 'styled-components'
import backgroundImage from '../../../data/Images/MapImage.png'
export const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`

export const Title = styled.div`
  font-size: 2.5vw;
  font-weight: 600;
  line-height: 2.5vw;
  margin: 5% 0;
  text-align: center;
`

export const UpperSection = styled.div`
  box-sizing: border-box;
  margin: 2.5% 0;
`

export const MapImage = styled.div`
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 10px;

  @media (max-width: 1080px) {
  }
  @media (max-width: 440px) {
  }
`

export const Divider = styled.div`
  height: 1px;
  background-color: grey;
  width: calc(100% + 8%);
  margin: 4% -4% 2.5%;

  @media (max-width: 768px) {
    height: 0.25px;
    background-color: rgba(128, 128, 128, 0.608);
  }
`
