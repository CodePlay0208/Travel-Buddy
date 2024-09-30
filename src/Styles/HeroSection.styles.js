import styled from 'styled-components'

export const HeroSectionContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1736px;
  margin: 0 auto;
  padding: 20px;
`

export const HeroSectionText = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 4vw;
    line-height: 5vw;
    color: #2d3134;
  }
`

export const HeroSectionButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`

export const HeroSectionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  gap: 12px;
  min-width: 120px;
  height: 41px;
  border-radius: 36px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  background-color: ${({ primary }) => (primary ? '#2D3134' : 'white')};
  color: ${({ primary }) => (primary ? '#FFFFFF' : '#2D3134')};
  border: ${({ primary }) => (primary ? 'none' : '1px solid #3D3D3D')};
`

export const HeroSectionCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`

export const HeroSectionCard = styled.div`
  flex: 1 1 calc(33.333% - 40px);
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 24px;
  overflow: hidden;
  margin: 10px;

  @media (max-width: 1200px) {
    flex: 1 1 calc(50% - 40px);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`

export const HeroSectionCardImg = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio:4/3;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio:4/3;
    background: linear-gradient(180deg, rgba(54, 53, 48, 0) 72.87%, rgba(36, 36, 33, 0.9) 101.17%);
    border-radius: 24px;
  }
`

export const HeroSectionRating = styled.div`
  position: absolute;
  width: 51px;
  height: 29px;
  left: 16px;
  top: 16px;
  background-color: #2d3134;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #ffffff;
`

export const HeroSectionPlaceName = styled.div`
  position: absolute;
  width: 135px;
  height: 25px;
  left: 16px;
  bottom: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #ffffff;
`
