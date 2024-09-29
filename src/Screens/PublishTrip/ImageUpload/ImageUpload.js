import React from 'react'
import ImageUploading from 'react-images-uploading'
import firstImage from '../../../data/Images/gallery.png'
import './ImageUpload.css'
const MAX_IMAGE_UPLOAD_LIMIT = 5

const ImageUpload = ({ tripData, setTripData }) => {
  const onImagesChange = (imageList, addUpdatedIndex) => {
    setTripData((prevTripData) => ({
      ...prevTripData,
      destinationImages: imageList,
    }))
  }
  return (
    <div className='upload_container'>
      <ImageUploading
        multiple
        value={tripData.destinationImages}
        onChange={onImagesChange}
        maxNumber={MAX_IMAGE_UPLOAD_LIMIT}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, onImageRemove, onImageUpdate, isDragging, dragProps }) => (
          <div className="frame_2">
            <div className="upload_photos">Upload Photos</div>
            <div className="drop_image">
              <div className="drop_image_inner" role="button" onClick={onImageUpload} {...dragProps}>
                <div className="icon_picture">
                  <img src={firstImage} alt="" />
                </div>
                <span className="drop_text">Drop your image here, or </span>
                <span className="browse">Browse</span>
                <div className="supports_text">Supports: PNG, JPG, JPEG, WEBP</div>
              </div>
            </div>

            <div className="file-uploader-container">
              <div className="file-upload-label">Add file</div>
              <div className="file-upload-box">
                <div className="file-upload-placeholder">Add file</div>
                <div className="upload-button-container">
                  <button className="upload-button" onClick={onImageUpload}>
                    Choose File
                  </button>
                </div>
              </div>
            </div>
            <div className="image-preview-section">
              {imageList.map((image, index) => (
                <div key={index} className="preview-image-item-container">
                  <img onClick={() => onImageUpdate(index)} className="preview-image-item" src={image} />
                  <div className="preview-image-cross-container">
                    <button className="preview-image-remove-button" onClick={() => onImageRemove(index)}>
                      x
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  )
}

export default ImageUpload
