import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 10%;
`
export const ImageSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 8/3;
  justify-content: center;
  position: relative;
  margin: 5% auto;
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
`

export const RightImages = styled.div`
  width: calc(50% - 0.6%);
  display: flex;
  gap: 2.4%;
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
  right: 1%;
  bottom: 2.5%;
  background-color: white;
  border: none;
  border-radius: 7.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1%;
  width: 17.5%;
  font-size: min(24px, 1vw);
  img {
    width: 10%;
    aspect-ratio: 1;
  }
`
