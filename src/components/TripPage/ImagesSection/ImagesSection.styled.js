import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 10%;

  @media (max-width: 440px) {
    margin: 0;
  }
`
export const ImageSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 8/3;
  justify-content: center;
  position: relative;
  margin: 5% auto;
  @media (max-width: 440px) {
    aspect-ratio: 4/3;
  }
`

export const ImageRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 1.2%;
  justify-content: center;
`

export const OnlyImage = styled.img`
  aspect-ratio: 2;
  border-radius: 10px;
`

export const MainImage = styled.img`
  width: calc(50% - 0.6%);
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  @media (max-width: 440px) {
    width: 100%;
  }
`
export const RightImage = styled.img`
  width: calc(50% - 0.6%);
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  @media (max-width: 440px) {
    display: none;
  }
`

export const RightImages = styled.div`
  width: calc(50% - 0.6%);
  display: flex;
  gap: 2.4%;
  @media (max-width: 440px) {
    display: none;
  }
`

export const ImageItem = styled.img`
  width: calc(50% - 1.2%);
  object-fit: cover;
  border-radius: 10px;
`

export const TallImage = styled.img`
  width: calc(50% - 1.2%);
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`

export const StackedImages = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`

export const LLSection = styled.div`
  width: calc(50% - 1.2%);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3%;
`

export const LRSection = styled.div`
  width: calc(50% - 1.2%);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3%;
`

export const ShowAllPhotos = styled.button`
  position: absolute;
  right: 2.5%;
  bottom: 5%;
  background-color: #ffffffb5;
  border: none;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1% 2%;
  width: 17.5%;
  font-size: min(24px, 1rem);
  img {
    width: 10%;
    aspect-ratio: 1;
    margin: 0 1% 0 0%;
  }
  @media (max-width: 440px) {
    width: 27%;
    font-size: min(24px, 2rem);
    padding: 2%;
  }
`
