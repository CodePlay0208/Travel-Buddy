import styled from 'styled-components'

export const BoxContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 350px;
  background: #ffffff;
  border: 3px solid #8dd3bb;
  box-shadow: 4px 4px 16px rgba(6, 64, 43, 0.25);
  border-radius: 25px;
  padding: 4% 5%;

  @media (max-width: 1080px) {
    border-radius: 15px;
    border: 2px solid #8dd3bb;
    box-shadow: 2px 2px 8px rgba(6, 64, 43, 0.25);
  }
  
  @media (max-width: 440px) {
    border-radius: 5px;
    border: 1px solid #8dd3bb;
    box-shadow: 1px 1px 4px rgba(6, 64, 43, 0.25);
  }
`

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
`

export const Heading = styled.div`
  font-weight: 500;
  color: #000000;
  font-size: 2vw;
  margin: 7.5% 0;
  cursor: pointer;
  text-align: center;
`

export const BodyText = styled.div`
  font-size: 1.75vw;
  font-weight: 500;
  line-height: 3vw;
  text-align: center;
`
