import styled, { keyframes } from 'styled-components'

const getSlideAnimation = (cardCount) => keyframes`
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-${(100 / cardCount) * (cardCount - 4)}%);
  }
  100% {
    transform: translateX(0%);
  }
`

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
  margin: 5% 0;
  @media (max-width: 786px) {
    flex-direction: column-reverse;
    margin: 30% 0 10%;
  }
`

export const SliderHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35rem;
  padding: 1% 0 1% 2%;
  height: 95%;
  position: absolute;
  margin: 0.5% 0;
  box-shadow: 0px 0px 12px 0px #00000033;

  background-color: white;
  z-index: 2;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  font-size: 1rem;
  @media (max-width: 1024px) {
    border-top-right-radius: 70px;
    border-bottom-right-radius: 70px;
    box-shadow: 0px 0px 0px;
  }
  @media (max-width: 768px) {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    position: relative;
    height: auto;
    width: 100%;
  }
  @media (max-width: 480px) {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }
  span {
    color: red;
  }
  p {
    margin: 0;
    color: #afafaf;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`

export const Slider = styled.div`
  display: flex;
  width: calc(${(props) => props.cardCount} * 25rem);
  animation: ${(props) => getSlideAnimation(props.cardCount)} 30s linear infinite;
  position: relative;
  height: 18rem;
  @media (max-width: 440px) {
    width: calc(${(props) => props.cardCount} * 60rem);
    height: 40rem;
  }
`

export const Card = styled.img`
  object-fit: cover;
  background-size: cover;
  background-position: center;
  width: 100%;
  position: relative;
  border-radius: 13px;

  @media (max-width: 1024px) {
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    border-radius: 8px;
  }
  @media (max-width: 480px) {
    border-radius: 5px;
    width: 50rem;
  }
`

export const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 21px;
  padding: 1% 3%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BadgeText = styled.span`
  font-weight: 500;
  font-size: 1.25rem;
  color: #000000;
  text-align: center;
`

export const CardContainer = styled.div`
  position: relative;
  width: 33rem;
  aspect-ratio: 4 / 3;
  margin: 0 0.5%;
  @media (max-width: 480px) {
    width: 50rem;
  }
`
