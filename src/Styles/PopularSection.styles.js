import styled from 'styled-components'
import firstImage from '../data/Images/aeroplaneBack.png'

export const PopularTripContainer = styled.div`
  margin: 10% 0;
  background-image: url(${firstImage});
  background-size: contain;
  background-position: -30px;
  background-repeat: no-repeat;
  margin-bottom: 2%;
  font-size: 5.2vw;
`

export const PopularButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopularTripHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${(props) => props.margin};
  padding: 30px 0;
  flex-wrap: wrap;
  font-size: ${(props) => props.fontSize};
`

export const PopularTripContent = styled.div`
  display: flex;
  overflow-x: auto;
  margin: ${(props) => props.margin};
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
`

export const PopularHeadingLeft = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 100%;
  font-weight: 600;
  line-height: 66px;
  text-align: left;
`

export const PopularHeadingRight = styled.div`
  display: flex;
  align-items: center;

  .left {
    background-color: white;
    color: black;
    border: black 1px solid;
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
`
