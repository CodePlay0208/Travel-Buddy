import styled from 'styled-components'
import firstImage from '../data/image.png'

export const Frame = styled.div`
  position: relative;
  width: 100%;
  margin: 10% auto 5%;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 440px) {
    margin: 20% auto;
  }
`

export const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`

export const Rectangle40 = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1729px;
  height: 65%;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(141, 211, 187, 0.28);
`

export const Heading = styled.div`
  position: absolute;
  font-weight: 700;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 3.5rem;
  margin: 0.6em 0;
  line-height: 42px;
  color: #000000;
  text-align: center;
  @media (max-width: 480px) {
    width: 100%;
    font-size: 7rem;
    top: 20%;
  }
`

export const ExploreButton = styled.button`
  position: relative;
  padding: 1.5%;
  width: 100%;
  background: var(--color-primary);
  border-radius: 40px;
  border: none;
  margin-top: 5%;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: #000000;
  cursor: pointer;

  &:hover {
    background: #76b39d;
  }
  @media (max-width: 480px) {
    width: 80%;
    font-size: 4rem;
    padding: 2.5%;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 33px 33px 66px 66px;
  padding: 3% 3% 2.5%;
  @media (max-width: 1024px) {
    border-radius: 15px 15px 30px 30px;
  }

  @media (max-width: 768px) {
    border-radius: 7.5px 7.5px 15px 15px;
  }

  @media (max-width: 480px) {
    border-radius: 3px 3px 7.5px 7.5px;
    width: 90%;
    background: none;
  }
`

export const LocationBox = styled.button`
  box-sizing: border-box;
  background: #ffffff;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #112211;
  cursor: pointer;
  margin: 1%;
  padding: 1%;
  border-radius: 20px;
  gap: 5%;

  &:hover {
    background: #e6fff4;
  }

  img {
    width: 2.5rem;
    aspect-ratio: 1;
  }

  @media (max-width: 1024px) {
    width: 45%;
    height: auto;
  }
  @media (max-width: 480px) {
    background: none;
    font-size: 5rem;
    img {
      width: 8rem;
      aspect-ratio: 1;
    }
  }
`
