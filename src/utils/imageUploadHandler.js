import { buildPreSignedUrlPayload, uploadFilesToPresignedUrls } from './fileUploadUtils'

// Utility: Crop image to 4:3 aspect ratio using Canvas
export async function cropImageToAspectRatio(file, aspectRatio = 4 / 3) {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.onload = function () {
      let { width, height } = img
      let cropWidth = width
      let cropHeight = height
      let offsetX = 0
      let offsetY = 0
      if (width / height > aspectRatio) {
        cropWidth = height * aspectRatio
        offsetX = (width - cropWidth) / 2
      } else {
        cropHeight = width / aspectRatio
        offsetY = (height - cropHeight) / 2
      }
      const canvas = document.createElement('canvas')
      canvas.width = cropWidth
      canvas.height = cropHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, offsetX, offsetY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight)
      canvas.toBlob((blob) => {
        if (blob) {
          const croppedFile = new File([blob], file.name, { type: file.type })
          resolve(croppedFile)
        } else {
          reject(new Error('Canvas toBlob failed'))
        }
      }, file.type)
    }
    img.onerror = reject
    img.src = URL.createObjectURL(file)
  })
}

export function convertFullToCroppedImageKey(key) {
  return key.replace(/^full-images\//, 'cropped-images/');
}

// Main handler for uploading original and cropped images
export async function handleImageUploads({ baseTripId, userId, images, randomFileName, generatePreSignedUrlForDestinationImages }) {
  const preSignedUrlPayload = buildPreSignedUrlPayload(baseTripId, userId, 'full-images', images, randomFileName)
  const preSignedUrlPayloadForCropped = buildPreSignedUrlPayload(baseTripId, userId, 'cropped-images', images, randomFileName)

  // Get presigned URLs
  const [preSignedUrls, preSignedUrlsForCroppedImages] = await Promise.all([
    generatePreSignedUrlForDestinationImages(preSignedUrlPayload),
    generatePreSignedUrlForDestinationImages(preSignedUrlPayloadForCropped),
  ])

  // Crop images to 4:3 before uploading cropped versions
  const croppedImages = await Promise.all(
    images.map(async (imgObj) => {
      if (imgObj.file) {
        const croppedFile = await cropImageToAspectRatio(imgObj.file)
        return { ...imgObj, croppedFile }
      }
      return imgObj
    }),
  )

  // Upload original images
  await uploadFilesToPresignedUrls(images, preSignedUrls, (imgObj) => imgObj.file)

  // Upload cropped images
  await uploadFilesToPresignedUrls(croppedImages, preSignedUrlsForCroppedImages, (imgObj) => imgObj.croppedFile)
}
