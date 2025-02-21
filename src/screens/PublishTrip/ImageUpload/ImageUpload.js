import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading'
import firstImage from '../../../data/Images/gallery.png'
import secondImage from '../../../data/Images/placeholder.png'
import ImageOverlay from '../../../components/ImageOverlay/ImageOverlay'
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
  ShowAllImageContainer,
} from './ImageUpload.styled'

const MAX_IMAGE_UPLOAD_LIMIT = 5

const ImageUpload = ({ tripData, setTripData }) => {
  const [overlay, setOverlay] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedImage, setDisplayedImage] = useState(firstImage)

  const onImagesChange = (imageList, addUpdatedIndex) => {
    setTripData((prevTripData) => ({
      ...prevTripData,
      destinationImages: imageList,
    }))

    if (imageList.length > 0) {
      setDisplayedImage(imageList[0].data_url)
    } else {
      setDisplayedImage(firstImage)
    }
  }

  const handleImageClick = (index) => {
    setDisplayedImage(tripData.destinationImages[index].data_url)
  }

  const handleImageDoubleClick = (index) => {
    setCurrentIndex(index)
    setOverlay(true)
  }
  const handleImageRemove = (index, onImageRemove) => {
    setTripData((prev) => {
      const updatedImages = prev.destinationImages.filter((_, i) => i !== index)
      return {
        ...prev,
        destinationImages: updatedImages,
        removedDestinationImages: [...(prev.removedDestinationImages || []), prev.destinationImages[index]],
      }
    })

    onImageRemove(index)

    setDisplayedImage((prevTripData) => {
      return prevTripData.destinationImages.length > 1 ? prevTripData.destinationImages[0].data_url : firstImage
    })
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
        {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
          <Frame>
            <UploadPhotos>Upload Photos</UploadPhotos>

            <DropImageInner role="button" onClick={onImageUpload} {...dragProps}>
              {imageList.length > 0 ? (
                <DropImage>
                  <IconPicture>
                    <img src={displayedImage} alt="Uploaded Preview" />
                  </IconPicture>
                </DropImage>
              ) : (
                <DropImage>
                  <IconPicture width={`70%`}>
                    <img src={firstImage} alt="Uploaded Preview" />
                  </IconPicture>
                  <DropText>
                    Drop your image here, or <Browse>Browse</Browse>
                  </DropText>

                  <SupportsText>Supports: PNG, JPG, JPEG, WEBP</SupportsText>
                </DropImage>
              )}
              <FileUploaderContainer>
                <FileUploadLabel>Add file</FileUploadLabel>
                <FileUploadBox>
                  <FileUploadPlaceholder>Drop your image here, or Browse</FileUploadPlaceholder>
                  <UploadButtonContainer>
                    <UploadButton>Choose File</UploadButton>
                  </UploadButtonContainer>
                </FileUploadBox>
              </FileUploaderContainer>
            </DropImageInner>
            <ImagePreviewSection>
              {imageList.length > 0 ? (
                imageList.map((image, index) => (
                  <PreviewImageItemContainer key={index}>
                    <PreviewImageItem
                      src={image.data_url}
                      alt="Preview"
                      onClick={() => handleImageClick(index)}
                      onDoubleClick={() => handleImageDoubleClick(index)}
                    />
                    <PreviewImageCrossContainer>
                      <PreviewImageRemoveButton onClick={() => handleImageRemove(index, onImageRemove)} aria-label="Remove image">
                        x
                      </PreviewImageRemoveButton>
                    </PreviewImageCrossContainer>
                  </PreviewImageItemContainer>
                ))
              ) : (
                <></>
              )}
            </ImagePreviewSection>
          </Frame>
        )}
      </ImageUploading>
      <ShowAllImageContainer>
        <UploadButton
          onClick={() => {
            setOverlay(true)
          }}
        >
          See All Photos
        </UploadButton>
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
