
import styled from 'styled-components';

export const Frame = styled.div`
  position: relative;
`;

export const UploadPhotos = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.5vw;
  line-height: 1.5;
  color: #000000;
  margin-bottom: 20px;
`;

export const IconPicture = styled.div`
  img {
    width: 5rem;
    aspect-ratio: 1/1;
  }
`;

export const DropImage = styled.div`
  position: relative;
  width: 95%;
  max-width: 477px;
  height: auto;
  min-height: 10vw;
  border: 1px dashed #b1bfd0;
  border-radius: 9px;
  padding: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DropImageInner = styled.div`
  text-align: center;
`;

export const Browse = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1vw;
  line-height: 1.4;
  color: #1f4690;
`;

export const DropText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1vw;
  line-height: 1.4;
  color: #132a00;
  margin-top: 10px;
`;

export const SupportsText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.8vw;
  line-height: 1.2;
  color: #969db2;
  margin-top: 10px;
`;

export const FileUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 3%;
  position: relative;
`;

export const FileUploadLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #000000;
`;

export const FileUploadBox = styled.div`
  background: #f1f4f9;
  border-radius: 6px;
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  padding: 0 0 0 10px;
  align-items: center;
`;

export const FileUploadPlaceholder = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #aab6c1;
`;

export const UploadButtonContainer = styled.div`
  margin-left: auto;
`;

export const UploadButton = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  background-color: #8dd3bb;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  border-radius: 6px;
  border: 0;
  color: #3c3c3c;
`;

export const ImagePreviewSection = styled.div`
  flex: 1;
  flex-direction: row;
`;

export const PreviewImageItemContainer = styled.div`
  margin: 5px;
`;

export const PreviewImageItem = styled.img`
  width: 95px;
  height: 95px;
`;

export const PreviewImageCrossContainer = styled.div`
  position: relative;
  top: -100px;
  right: -90px;
  justify-content: center;
  align-items: center;
`;

export const PreviewImageRemoveButton = styled.button`
  height: 15px;
  width: 15px;
  border-radius: 10px;
`;

export const UploadContainer = styled.div`
  width: 100%;
`;
