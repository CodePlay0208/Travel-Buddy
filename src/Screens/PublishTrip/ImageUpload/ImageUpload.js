import React from 'react';
import ImageUploading from 'react-images-uploading';
import firstImage from '../../../data/Images/gallery.png';
import {
  Frame,
  UploadPhotos,
  IconPicture,
  DropImage,
  DropImageInner,
  Browse,
  DropText,
  SupportsText,
  FileUploaderContainer,
  FileUploadLabel,
  FileUploadBox,
  FileUploadPlaceholder,
  UploadButtonContainer,
  UploadButton,
  ImagePreviewSection,
  PreviewImageItemContainer,
  PreviewImageItem,
  PreviewImageCrossContainer,
  PreviewImageRemoveButton,
  UploadContainer,
} from './ImageUpload.styled';

const MAX_IMAGE_UPLOAD_LIMIT = 5;

const ImageUpload = ({ tripData, setTripData }) => {
  const onImagesChange = (imageList, addUpdatedIndex) => {
    setTripData((prevTripData) => ({
      ...prevTripData,
      destinationImages: imageList,
    }));
  };

  return (
    <UploadContainer>
      <ImageUploading
        multiple
        value={tripData.destinationImages}
        onChange={onImagesChange}
        maxNumber={MAX_IMAGE_UPLOAD_LIMIT}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, onImageRemove, onImageUpdate, isDragging, dragProps }) => (
          <Frame>
            <UploadPhotos>Upload Photos</UploadPhotos>
            <DropImage>
              <DropImageInner role="button" onClick={onImageUpload} {...dragProps}>
                <IconPicture>
                  <img src={firstImage} alt="" />
                </IconPicture>
                <DropText>Drop your image here, or </DropText>
                <Browse>Browse</Browse>
                <SupportsText>Supports: PNG, JPG, JPEG, WEBP</SupportsText>
              </DropImageInner>
            </DropImage>

            <FileUploaderContainer>
              <FileUploadLabel>Add file</FileUploadLabel>
              <FileUploadBox>
                <FileUploadPlaceholder>Add file</FileUploadPlaceholder>
                <UploadButtonContainer>
                  <UploadButton onClick={onImageUpload}>Choose File</UploadButton>
                </UploadButtonContainer>
              </FileUploadBox>
            </FileUploaderContainer>

            <ImagePreviewSection>
              {imageList.map((image, index) => (
                <PreviewImageItemContainer key={index}>
                  <PreviewImageItem onClick={() => onImageUpdate(index)} src={image.data_url} alt="" />
                  <PreviewImageCrossContainer>
                    <PreviewImageRemoveButton onClick={() => onImageRemove(index)}>x</PreviewImageRemoveButton>
                  </PreviewImageCrossContainer>
                </PreviewImageItemContainer>
              ))}
            </ImagePreviewSection>
          </Frame>
        )}
      </ImageUploading>
    </UploadContainer>
  );
};

export default ImageUpload;
