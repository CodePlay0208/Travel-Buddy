import styled from 'styled-components'
import { Button } from '../../../styles/Global'

export const Frame = styled.div`
  position: relative;
`

export const UploadPhotos = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.5vw;
  line-height: 1.5;
  color: #000000;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
  @media (max-width: 500px) {
    font-size: 4vw;
  }
`

export const IconPicture = styled.div`
  img {
    width: ${(props) => (props.width ? props.width : '374px')};
    border-radius: 10px;
    aspect-ratio: 4 / 3;
    object-fit: cover;

    @media (max-width: 768px) {
      border-radius: 8px;
    }
    @media (max-width: 500px) {
      border-radius: 6px;
    }
  }
`

export const DropImage = styled.div`
  position: relative;
  height: auto;
  width: 380px;
  min-height: 10vw;
  aspect-ratio: 4 / 3;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='21' ry='21' stroke='%23B1BFD0FF' stroke-width='3' stroke-dasharray='4%2c15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");

  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
  }
`

export const DropImageInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Browse = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 100%;
  line-height: 1.4;
  color: #1f4690;

  @media (max-width: 1080px) {
    font-size: 75%;
  }
  @media (max-width: 500px) {
    font-size: 2.5vw;
  }
`

export const DropText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 100%;
  line-height: 1.4;
  color: #132a00;
  margin-top: 2.5%;

  @media (max-width: 1080px) {
    font-size: 75%;
  }
  @media (max-width: 500px) {
    font-size: 2.5vw;
  }
`

export const SupportsText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.6vw;
  line-height: 1.2;
  color: #969db2;
  margin-top: 2.5%;

  @media (max-width: 1080px) {
    font-size: 75%;
  }
  @media (max-width: 500px) {
    font-size: 2.5vw;
  }
`

export const FileUploaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 4%;
  position: relative;
`

export const FileUploadLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.75vw;
  line-height: 150%;
  color: #000000;

  @media (max-width: 1080px) {
    font-size: 2vw;
  }
  @media (max-width: 768px) {
    font-size: 11px;
  }
  @media (max-width: 500px) {
    font-size: 2.5vw;
  }
`

export const FileUploadBox = styled.div`
  width: 100%;
  height: 47px;
  border-radius: 40px;
  gap: 8px;
  padding-top: 8px;
  padding-right: 15px;
  padding-bottom: 8px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background-color: #f4f4f4;
  color: black;

  @media (max-width: 768px) {
    border-radius: 40px;
  }
  @media (max-width: 440px) {
    border-radius: 20px;
  }
`

export const FileUploadPlaceholder = styled.button`
  @media (max-width: 768px) {
    font-size: 11px;
  }
  @media (max-width: 500px) {
    font-size: 2.5vw;
  }
`

export const UploadButtonContainer = styled.div`
  margin-left: auto;
`
export const SeeAllButton = styled(Button)`
  font-size: 1vw;
  font-weight: 500;
  padding: 4% 5%;

  @media (max-width: 1080px) {
    font-size: 2vw;
  }
`

export const ShowAllImageContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin-top: 1%;
  @media (max-width: 1080px) {
    font-size: 75%;
  }
  @media (max-width: 500px) {
    font-size: 2.5vw;
  }
`

export const UploadButton = styled.button`
  display: flex;
  flex-direction: row;
  background-color: var(--color-primary);
  justify-content: center;
  align-items: center;
  padding: 3%;
  border-radius: 6px;
  border: 0;
  color: #000000d9;

  @media (max-width: 768px) {
    border-radius: 4px;
    font-size: 75%;
  }
  @media (max-width: 500px) {
    border-radius: 2px;
    font-size: 2.5vw;
  }
`

export const ImagePreviewSection = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 2.5%;
  padding-top: 2.5%;
  width: 100%;
`

export const PreviewImageItemContainer = styled.div`
  flex: 0 0 auto;
  width: 100px;
  aspect-ratio: 4 / 3;
  position: relative;
  @media (max-width: 1080px) {
    width: 150px;
  }
`

export const PreviewImageItem = styled.img`
  width: 100%;
  border-radius: 10px;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background-position: center;

  @media (max-width: 768px) {
    border-radius: 7px;
  }
  @media (max-width: 500px) {
    border-radius: 4px;
  }
`

export const PreviewImageCrossContainer = styled.button`
  position: absolute;
  top: -10%;
  right: -10%;
  padding: 0;
  background-color: #fef1f1;
  border: none;
  border-radius: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    top: -8%;
    right: -8%;
  }
  @media (max-width: 500px) {
    top: -6%;
    right: -6%;
  }
`

export const PreviewImageRemoveButton = styled.span`
  height: 15px;
  display: block;
  width: 15px;
  color: #ffffff;
  background-color: #ff0000;
  border-radius: 10px;
`

export const UploadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
  margin-top: 2.5%;
  position: relative;

  @media (max-width: 768px) {
    border-radius: 4px;
  }
  @media (max-width: 500px) {
    border-radius: 3px;
  }
`

export const ProgressBar = styled.div`
  height: 10px;
  background-color: #4caf50;
  border-radius: 5px;
  transition: width 0.2s ease;

  @media (max-width: 768px) {
    border-radius: 4px;
  }
  @media (max-width: 500px) {
    border-radius: 3px;
  }
`
