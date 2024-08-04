import React, { useEffect, useState, memo } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './PublishTrip.css'
import DatePicker from '../../components/DatePicker/DatePicker'
import Searchbar from '../../components/Searchbar/Searchbar'
import firstImage from '../../data/Images/gallery.png'
import { connect } from 'react-redux'
import { getProfile } from '../../actions/profile.action'
import { createTrip } from '../../actions/trips.action'
import { ToastContainer } from 'react-toastify'
import ImageUploading from 'react-images-uploading'

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
})

const TABS = {
  TRIP: 'trip',
  USER: 'user',
}

const MAX_IMAGE_UPLOAD_LIMIT = 5

const DEFAULT_TRIP_DATA = {
  destination: '',
  startDate: '',
  startLocation: '',
  endDate: '',
  totalMembers: null,
  budget: null,
  age: null,
  gender: '',
  description: '',
  destinationImages: [],
  persona: '',
}

const PublishTrip = (props) => {
  const { profile, getProfile, createTrip } = props
  const [activeSection, setActiveSection] = useState(TABS.TRIP)
  const [tripData, setTripData] = useState(DEFAULT_TRIP_DATA)

  const handleChange = (e) => {
    const updatedTripData = { ...tripData, [e.target.name]: e.target.value }
    setTripData(updatedTripData)
  }

  const handleToggle = (section) => {
    setActiveSection(section)
  }

  const handleNext = () => {
    setActiveSection(TABS.USER)
  }

  const handleSubmit = async () => {
    const isTripPublished = await createTrip(tripData)
    if (isTripPublished) {
      setTripData(DEFAULT_TRIP_DATA)
    }
  }

  const onImagesChange = (imageList, addUpdatedIndex) => {
    setTripData((prevTripData) => ({
      ...prevTripData,
      destinationImages: imageList,
    }))
  }

  useEffect(() => {
    getProfile()
  }, [getProfile])

  return (
    <div className="publish__trip__page">
      <Navbar />
      <div className="publish__trip__container">
        <div className="publish__trip__heading">Publish Your Trip!</div>
        <div className="publish__trip__content">
          <div className="publish__trip__leftsection">
            <div className="toggleBetweenTripUser">
              <div className={`trip_detail ${activeSection === TABS.TRIP ? 'active' : ''}`} onClick={() => handleToggle(TABS.TRIP)}>
                Trip Details
              </div>
              <div className="divider"></div>
              <div className={`user_detail ${activeSection === TABS.USER ? 'active' : ''}`} onClick={() => handleToggle(TABS.USER)}>
                User Details
              </div>
            </div>

            {/* Conditionally render forms based on the active section */}
            <div className="left-section">
              {activeSection === 'trip' ? (
                <>
                  <div className="input-row">
                    <div className="input-group">
                      <label className="input-label">Start Location</label>
                      <Searchbar
                        inputValues={tripData.startLocation}
                        setInputValues={setTripData}
                        onValue={'startLocation'}
                        placeholderValue={'Enter Start Location'}
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Destination</label>
                      <Searchbar
                        inputValues={tripData.destination}
                        setInputValues={setTripData}
                        onValue={'destination'}
                        placeholderValue={'Enter Destination'}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div className="input-row">
                    <div className="input-group">
                      <label className="input-label">Start Date</label>
                      <DatePicker
                        inputValues={tripData.startDate}
                        setInputValues={setTripData}
                        onValue={'startDate'}
                        placeholderValue={'Select Start date'}
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">End Date</label>
                      <DatePicker
                        inputValues={tripData.endDate}
                        setInputValues={setTripData}
                        onValue={'endDate'}
                        placeholderValue={'Select End date'}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div className="input-row">
                    <div className="input-group">
                      <label className="input-label">Budget</label>
                      <input
                        name="budget"
                        type="text"
                        className="input-field"
                        placeholder="Enter budget"
                        onChange={handleChange}
                        value={tripData.budget}
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Total Members</label>
                      <input
                        name="totalMembers"
                        type="number"
                        className="input-field"
                        placeholder="Enter number of members"
                        onChange={handleChange}
                        value={tripData.totalMembers}
                      />
                    </div>
                  </div>

                  <div className="input-group description-group">
                    <label className="input-label">Description</label>
                    <textarea
                      name="description"
                      className="description-field"
                      placeholder="Enter trip description"
                      onChange={handleChange}
                      value={tripData.description}
                    ></textarea>
                  </div>

                  <div className="publish__trip__button">
                    <button className="next-button" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="input-row">
                    <div className="input-group">
                      <label className="input-label">Full Name</label>
                      <input
                        name="name"
                        type="text"
                        className="input-field"
                        placeholder="Enter full name"
                        value={profile.name !== null ? profile.name : ''}
                      />
                    </div>

                    <div className="input-group">
                      <label className="input-label">Email</label>
                      <input
                        name="emailId"
                        type="email"
                        className="input-field"
                        placeholder="Enter email address"
                        value={profile.emailId !== null ? profile.emailId : ''}
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label className="input-label">Phone Number</label>
                      <input
                        name="phoneNumber"
                        type="text"
                        className="input-field"
                        placeholder="Enter phone number"
                        value={profile.phoneNumber !== null ? profile.phoneNumber : ''}
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Age</label>
                      <input
                        name="age"
                        type="number"
                        className="input-field"
                        placeholder="Enter age"
                        onChange={handleChange}
                        value={tripData.age}
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label className="input-label">Gender</label>
                      <input
                        name="gender"
                        type="text"
                        className="input-field"
                        placeholder="Enter gender"
                        onChange={handleChange}
                        value={tripData.gender}
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Persona</label>
                      <input
                        name="persona"
                        type="text"
                        className="input-field"
                        placeholder="Enter persona"
                        onChange={handleChange}
                        value={tripData.persona}
                      />
                    </div>
                  </div>

                  <div className="publish__trip__button">
                    <button className="submit-button" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="publish__trip__rightsection">
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
                      <div className="drop_text">Drop your image here, or</div>
                      <div className="browse">Browse</div>
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
                          <button className='preview-image-remove-button' onClick={() => onImageRemove(index)}>x</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
            {/* Additional content for right section */}
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default connect(mapStateToProps, { getProfile, createTrip })(memo(PublishTrip))
