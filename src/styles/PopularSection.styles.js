import styled from 'styled-components'
import firstImage from '../data/Images/aeroplaneBack.png'

export const PopularTripContainer = styled.div`
  margin: 5% 0;
  background-image: url(${firstImage});
  background-size: contain;
  background-position: -30px;
  background-repeat: no-repeat;
  position: relative;
  @media (max-width: 440px) {
    margin: 5% 0 15%;
  }
`

export const PopularButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const PopularTripHeading = styled.div`
  display: flex;
  justify-content: space-between;

  margin: ${(props) => props.margin};
  padding: 3% 0;
  flex-wrap: wrap;
  font-size: ${(props) => props.fontSize};
`

export const PopularTripContent = styled.div`
  display: flex;
  overflow-x: auto;

  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  gap: 20px;
  scrollbar-width: none;
  overflow-y: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`

export const PopularHeadingLeft = styled.div`
  font-size: 4rem;
  font-weight: 600;
  line-height: 66px;
  text-align: left;

  @media (max-width: 440px) {
    font-size: 5rem;
  }
`

export const PopularHeadingRight = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 25%;

  .left {
    background-color: white;
    color: black;
    border: black 1px solid;
  }
  @media (max-width: 440px) {
    position: absolute;
    width: 50%;
    top: 101%;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const PopularButton = styled.button`
  font-size: 2rem;
  padding: 5% 10%;
  cursor: pointer;
  background-color: #000000;
  border-radius: 50px;
  font-weight: 700;
  border: none;
  color: rgb(255, 255, 255);
  @media (max-width: 440px) {
    font-size: 3rem;
  }
`

export const ArrowButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ArrowButton = styled.button`
  border: none;
  background-color: white;
  border-radius: 50%;
  width: 3%;
  aspect-ratio: 1;
  margin: 0 0.5%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  &.left {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 440px) {
      /* top: 101%; */
      left: 1%;
      transform: translateY(0);
    }
  }
  &.right {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 440px) {
      /* top: 101%; */
      right: 1%;
      transform: translateY(0);
    }
  }
`
