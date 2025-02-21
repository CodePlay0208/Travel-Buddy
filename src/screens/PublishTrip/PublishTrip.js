import React, { useEffect, useState, memo } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { connect } from 'react-redux'
import { getProfile } from '../../actions/profile.action'
import { createTrip, editTrip } from '../../actions/trips.action'
import { ToastContainer } from 'react-toastify'
import ImageUpload from './ImageUpload/ImageUpload'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  PublishTripPage,
  PublishTripContainer,
  PublishTripHeading,
  PublishTripContent,
  PublishTripLeftSection,
  PublishTripRightSection,
  ToggleBetweenTripUser,
  ToggleTab,
  Divider,
  PublishTripButton,
  SubmitButton,
} from './PublishTrip.styled'
import TripDetail from './TripDetail'
import TripDates from './TripDates'

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
})

const TABS = {
  TRIP: 'trip',
  USER: 'user',
}

const DEFAULT_TRIP_DATA = {
  destination: '',
  startDate: '',
  startLocation: '',
  endDate: '',
  minBudget: null,
  maxBudget: null,
  description: '',
  destinationImages: [],
  persona: '',
  tripData: [],
  multipleDates: [],
  duration: '',
}

const PublishTrip = (props) => {
  const { getProfile, createTrip, editTrip } = props
  const [activeSection, setActiveSection] = useState(TABS.TRIP)
  const [tripData, setTripData] = useState(DEFAULT_TRIP_DATA)
  const navigate = useNavigate()
  const location = useLocation()
  const editTripData = location.state?.trip || {}
  const [toEditTrip, setToEditTrip] = useState(false)

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
  }

  useEffect(() => {
    if (Object.keys(editTripData).length > 0) {
      const formattedTripData = {
        ...editTripData,
        startDate: formatDate(editTripData.startDate),
        endDate: formatDate(editTripData.endDate),
      }
      setTripData(formattedTripData)
      setToEditTrip(true)
    }
  }, [editTripData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setTripData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleTripDataChange = (field, value) => {
    setTripData((prevData) => ({
      ...prevData,
      [field]: value,
    }))
  }

  const handleDeleteDate = (index) => {
    setTripData((prevData) => ({
      ...prevData,
      multipleDates: prevData.multipleDates.filter((_, i) => i !== index),
    }))
  }

  useEffect(() => {
    console.log('Trip Data updated:', tripData)
  }, [tripData])

  const handleToggle = (section) => {
    setActiveSection(section)
  }

  const handleNext = () => {
    setActiveSection(TABS.USER)
  }

  const handleSubmit = async () => {
    try {
      const formDataNew = new FormData()

      Object.entries(tripData).forEach(([key, value]) => {
        if ((!toEditTrip && key === 'destinationImages') || (key === 'removedDestinationImages' && Array.isArray(value))) {
          value.forEach((image) => {
            formDataNew.append('destinationImages', image.file)
          })
        } else if (key === 'multipleDates' && Array.isArray(value)) {
          const formatDateObj = (dateObj) => {
            const d = String(dateObj.getDate()).padStart(2, '0')
            const m = String(dateObj.getMonth() + 1).padStart(2, '0')
            const y = dateObj.getFullYear()
            return `${d}-${m}-${y}`
          }

          const tripDates = value.map((dateStr) => {
            const [day, month, year] = dateStr.split('-').map(Number)
            const start = new Date(year, month - 1, day)
            const duration = parseInt(tripData.duration, 10) || 0
            const end = new Date(start)
            end.setDate(start.getDate() + duration)
            return { startDate: dateStr, endDate: formatDateObj(end) }
          })

          formDataNew.append('tripDates', JSON.stringify(tripDates))
        } else {
          formDataNew.append(key, value)
        }
      })

      let isTripPublished
      if (toEditTrip) {
        isTripPublished = await editTrip(tripData.tripId, formDataNew, true)
      } else {
        isTripPublished = await createTrip(formDataNew, false)
      }

      if (isTripPublished) {
        console.log('Trip successfully published!')
      } else {
        console.error('Failed to publish trip.')
      }
    } catch (error) {
      console.error('Error during trip submission:', error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [getProfile])

  return (
    <PublishTripPage>
      <Navbar />
      <PublishTripContainer>
        <PublishTripHeading>Publish Your Trip!</PublishTripHeading>
        <PublishTripContent>
          <PublishTripLeftSection>
            <ToggleBetweenTripUser>
              <ToggleTab className={activeSection === TABS.TRIP ? 'active' : ''} onClick={() => handleToggle(TABS.TRIP)}>
                Trip Details
              </ToggleTab>
              <Divider />
              <ToggleTab className={activeSection === TABS.USER ? 'active' : ''} onClick={() => handleToggle(TABS.USER)}>
                Trip Dates
              </ToggleTab>
            </ToggleBetweenTripUser>
            {activeSection === TABS.TRIP ? (
              <TripDetail tripData={tripData} handleChange={handleChange} handleTripDataChange={handleTripDataChange} />
            ) : (
              <TripDates
                tripData={tripData}
                handleChange={handleChange}
                handleTripDataChange={handleTripDataChange}
                handleDeleteDate={handleDeleteDate}
              />
            )}
          </PublishTripLeftSection>
          <PublishTripRightSection>
            <ImageUpload tripData={tripData} setTripData={setTripData} />
          </PublishTripRightSection>
        </PublishTripContent>
        {activeSection === TABS.TRIP ? (
          <PublishTripButton>
            <SubmitButton onClick={handleNext}>Next</SubmitButton>
          </PublishTripButton>
        ) : (
          <PublishTripButton>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          </PublishTripButton>
        )}
      </PublishTripContainer>
      <Footer />
      <ToastContainer />
    </PublishTripPage>
  )
}

export default memo(connect(mapStateToProps, { getProfile, createTrip, editTrip })(PublishTrip))
