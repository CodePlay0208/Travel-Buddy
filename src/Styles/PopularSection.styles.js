import styled from 'styled-components'
import firstImage from '../../data/Images/aeroplaneBack.png'

const mediaQueries = {
  large: '@media (max-width: 1024px)',
  medium: '@media (max-width: 768px)',
  small: '@media (max-width: 480px)',
}

export const PopularTripContainer = styled.div`
  max-width: 1726px;
  margin: 10% 0;
  background-image: url(${firstImage});
  background-size: contain;
  background-position: -30px;
  background-repeat: no-repeat;
  margin-bottom: 2%;

  ${mediaQueries.large} {
    margin: 50px auto 0 auto;
  }

  ${mediaQueries.medium} {
    background-position: center;
  }

  ${mediaQueries.small} {
    background-size: cover;
  }
`

export const PopularButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopularTripHeading = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1459px;
  margin: 5% 10% 0 10%;
  padding: 30px 0;
  flex-wrap: wrap;

  ${mediaQueries.large} {
    margin: 50px auto 0 auto;
    padding: 20px 0;
  }

  ${mediaQueries.medium} {
    align-items: center;
  }
`

export const PopularTripContent = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0 0 0 5.5%;
  padding: 30px 0;
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

  ${mediaQueries.large} {
    margin: 0 0 0 5%;
  }

  ${mediaQueries.medium} {
    margin: 0;
  }
`

export const PopularHeadingLeft = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 56px;
  font-weight: 600;
  line-height: 66px;
  text-align: left;

  ${mediaQueries.large} {
    font-size: 3rem;
    line-height: 50px;
  }

  ${mediaQueries.medium} {
    font-size: 2rem;
    line-height: 40px;
    text-align: center;
  }

  ${mediaQueries.small} {
    font-size: 1.5rem;
    line-height: 30px;
  }
`

export const PopularHeadingRight = styled.div`
  display: flex;
  align-items: center;

  .left {
    background-color: white;
    color: black;
    border: black 1px solid;
  }

  ${mediaQueries.large} {
    .left {
      width: 40px;
      height: 40px;
    }
  }
`

export const PopularButton = styled.button`
  font-size: 36px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #8dd3bb;
  width: 268px;
  border-radius: 10px;
  font-weight: 700;
  border: none;
  color: rgb(0, 0, 0);
  margin-top: 5%;

  ${mediaQueries.small} {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`

export const ArrowButton = styled.button`
  background: #2d3134;
  color: #faf8ed;
  border: none;
  border-radius: 50%;
  width: 54px;
  height: 54px;
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  ${mediaQueries.small} {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`
