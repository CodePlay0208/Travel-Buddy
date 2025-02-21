import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading'
import firstImage from '../../../data/Images/gallery.png'
import ImageOverlay from '../../../components/ImageOverlay/ImageOverlay'
import {
  Frame,
  IconPicture,
  DropImage,
  DropImageInner,
  Browse,
  DropText,
  SupportsText,
  FileUploaderContainer,
  FileUploadLabel,
  FileUploadBox,
  ImagePreviewSection,
  PreviewImageItemContainer,
  PreviewImageItem,
  PreviewImageCrossContainer,
  PreviewImageRemoveButton,
  UploadContainer,
  ShowAllImageContainer,
  SeeAllButton,
} from './ImageUpload.styled'

const MAX_IMAGE_UPLOAD_LIMIT = 5

const ImageUpload = ({ tripData, setTripData }) => {
  const [overlay, setOverlay] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedImage, setDisplayedImage] = useState(firstImage)

  // When images are added/removed, update tripData and ensure the displayed image is still valid.
  const onImagesChange = (imageList) => {
    setTripData((prevTripData) => ({
      ...prevTripData,
      destinationImages: imageList,
    }))
    // If the current preview image was removed, default to the first available image
    const stillExists = imageList.find(image => image.data_url === displayedImage)
    if (!stillExists) {
      setDisplayedImage(imageList.length > 0 ? imageList[0].data_url : firstImage)
    }
  }

  // Set the preview to the clicked image.
  const handleImageClick = (index) => {
    setDisplayedImage(tripData.destinationImages[index].data_url)
  }

  // Open the overlay for a larger preview.
  const handleImageDoubleClick = (index) => {
    setCurrentIndex(index)
    setOverlay(true)
  }

  // Remove the image at the given index and update the displayed image if needed.
  const handleImageRemove = (index, onImageRemove) => {
    const removedImage = tripData.destinationImages[index]
    onImageRemove(index)
    if (removedImage.data_url === displayedImage) {
      const newImages = tripData.destinationImages.filter((_, i) => i !== index)
      setDisplayedImage(newImages.length > 0 ? newImages[0].data_url : firstImage)
    }
  }

  return (
    <UploadContainer>
      <ImageUploading
        multiple
        value={tripData.destinationImages}
        onChange={onImagesChange}
        maxNumber={MAX_IMAGE_UPLOAD_LIMIT}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
          <Frame>
            <DropImageInner role="button" onClick={onImageUpload} {...dragProps}>
              {imageList.length > 0 ? (
                <DropImage>
                  <IconPicture>
                    <img src={displayedImage} alt="Uploaded Preview" />
                  </IconPicture>
                </DropImage>
              ) : (
                <DropImage>
                  <IconPicture width="70%">
                    <img src={firstImage} alt="Uploaded Preview" />
                  </IconPicture>
                  <DropText>
                    Drop your image here, or <Browse>Browse</Browse>
                  </DropText>
                  <SupportsText>Supports: PNG, JPG, JPEG, WEBP</SupportsText>
                </DropImage>
              )}
              <FileUploaderContainer>
                <FileUploadLabel>Upload</FileUploadLabel>
                <FileUploadBox>Upload Image</FileUploadBox>
              </FileUploaderContainer>
            </DropImageInner>
            <ImagePreviewSection>
              {imageList.length > 0 &&
                imageList.map((image, index) => (
                  <PreviewImageItemContainer key={index}>
                    <PreviewImageItem
                      src={image.data_url}
                      alt="Preview"
                      onClick={() => handleImageClick(index)}
                      onDoubleClick={() => handleImageDoubleClick(index)}
                    />
                    <PreviewImageCrossContainer>
                      <PreviewImageRemoveButton
                        onClick={() => handleImageRemove(index, onImageRemove)}
                        aria-label="Remove image"
                      >
                        x
                      </PreviewImageRemoveButton>
                    </PreviewImageCrossContainer>
                  </PreviewImageItemContainer>
                ))}
            </ImagePreviewSection>
          </Frame>
        )}
      </ImageUploading>
      <ShowAllImageContainer>
        <SeeAllButton onClick={() => setOverlay(true)}>
          See All Photos
        </SeeAllButton>
      </ShowAllImageContainer>
      {overlay && (
        <ImageOverlay
          images={tripData.destinationImages.map((image) => image.data_url)}
          overlay={overlay}
          setOverlay={setOverlay}
          currentIndex={currentIndex}
        />
      )}
    </UploadContainer>
  )
}

export default ImageUpload
