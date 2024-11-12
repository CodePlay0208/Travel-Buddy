import styled from 'styled-components'

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
      width:75%
    }
    @media (max-width: 500px) {
      border-radius: 6px;
      width:50%
    }
  }
`

export const DropImage = styled.div`
  position: relative;
  height: auto;
  width: 380px;
  min-height: 10vw;
  aspect-ratio: 4 / 3;
  border: 1px dashed #b1bfd0;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 768px) {
    border-radius: 7px;
  }
  @media (max-width: 500px) {
    border-radius: 3px;
    width: 100%;
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
  margin: 8% 3% 3%;
  position: relative;
`

export const FileUploadLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 11px;
  }
  @media (max-width: 500px) {
    font-size: 2.5vw;
  }
`

export const FileUploadBox = styled.div`
  background: #f1f4f9;
  border-radius: 6px;
  position: relative;
  width: 100%;
  display: flex;
  padding: 0 0 0 2.5%;
  align-items: center;

  @media (max-width: 768px) {
    border-radius: 4px;
  }
  @media (max-width: 500px) {
    border-radius: 2px;
  }
`

export const FileUploadPlaceholder = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #aab6c1;

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
  background-color: #8dd3bb;
  justify-content: center;
  align-items: center;
  padding: 3%;
  border-radius: 6px;
  border: 0;
  color: #ffffffd9;

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
  padding-top: 5%;
  width: 100%;
`

export const PreviewImageItemContainer = styled.div`
  flex: 0 0 auto;
  width: 100px;
  aspect-ratio: 4 / 3;
  position: relative;

  @media (max-width: 768px) {
    width: 75px;
  }
  @media (max-width: 500px) {
    width: 50px;
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
  width: 15px;
  color: #ef4343;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 13px;
    width: 13px;
    border-radius: 8px;
  }
  @media (max-width: 500px) {
    height: 11px;
    width: 11px;
    border-radius: 6px;
  }
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
