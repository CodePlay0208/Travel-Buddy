import axios from "axios"

// Utility to generate a random hex string
export const randomHexString = (byteCount = 16) => {
  const arr = new Uint8Array(byteCount)
  window.crypto.getRandomValues(arr)
  return Array.from(arr)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

// Utility to generate a random file name
export const randomFileName = (file, byteCount = 16) => {
  const origName = file
  // Optionally keep extension if needed:
  // const ext = origName.includes('.') ? origName.slice(origName.lastIndexOf('.')) : '';
  const hex = randomHexString(byteCount)
  return `${hex}`
}

// Build payload for presigned URL request
export function buildPreSignedUrlPayload(baseTripId, userId, prefix, images, getFileName) {
  return {
    baseTripId,
    prefix: `${prefix}/${userId}/${baseTripId}`,
    files: images.map((image) => ({
      filename: getFileName(image.file.name),
      filetype: image.file.type || 'image/jpeg',
    })),
  }
}

// Helper to upload files to presigned URLs
export async function uploadFilesToPresignedUrls(files, urls, getFile) {
  return Promise.all(
    files.map(async (imgObj, i) => {
      const file = getFile(imgObj)
      const presignedUrl = urls[i]?.s3Url
      if (file && presignedUrl) {
        try {
          await axios.put(presignedUrl, file, {
            headers: { 'Content-Type': file.type },
          })
        } catch (err) {
          console.error('Upload error:', err)
          return { index: i, error: err }
        }
      }
    }),
  )
}
