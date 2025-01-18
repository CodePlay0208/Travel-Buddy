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
  height: 18vw;
  position: relative;
  margin: 5% 0;
`

export const SliderHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35vw;
  padding: 2% 0 2% 2%;
  height: 100%;
  position: absolute;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  background-color: white;
  z-index: 2;
  h2 {
    margin: 0;
  }
  span {
    color: red;
  }
  p {
    margin: 0;
    color: #afafaf;
  }
`

export const Slider = styled.div`
  display: flex;
  display: flex;
  width: calc(${(props) => props.cardCount} * 25vw);
  animation: ${(props) => getSlideAnimation(props.cardCount)} 30s linear infinite;
  position: relative;
`

export const Card = styled.div`
  background: url(${(props) => props.background}) no-repeat center center;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  border-radius: 13px;
  width: 33vw;
  position: relative;
  margin: 0.5%;
`

export const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #8dd3bb;
  border: 2px solid #8dd3bb;
  border-radius: 21px;
  padding: 1% 3%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BadgeText = styled.span`
  font-weight: 500;
  font-size: 1vw;
  color: #000000;
  text-align: center;
`
