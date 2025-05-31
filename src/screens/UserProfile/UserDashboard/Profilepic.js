import React, { useState } from 'react'
import axios from 'axios'

const Profilepic = ({ profile }) => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image first!')
      return
    }

    const formData = new FormData()
    formData.append('image', selectedFile)

    try {
      const response = await axios.post('http://localhost:4000/user', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      alert('Image uploaded successfully!')
      //console.log('Response:', response.data)
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image.')
    }
  }

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <img
          src={profile?.ProfilePic ?? 'images/defaultProfileImg'}
          alt="User Profile"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
        <img
          src={'SVG.editPic'}
          alt="Edit"
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            cursor: 'pointer',
          }}
          onClick={() => document.getElementById('fileInput').click()}
        />
      </div>
      <input id="fileInput" type="file" style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />
      <button onClick={handleFileUpload} style={{ marginTop: '10px' }}>
        Upload
      </button>
    </div>
  )
}

export default Profilepic
