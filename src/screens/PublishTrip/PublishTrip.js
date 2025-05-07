import React, { useEffect, useState, memo, useCallback } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { connect } from 'react-redux'
import { createTrip, editTrip, createTripsImages, editTripImages } from '../../actions/trips.action'
import { toast, ToastContainer } from 'react-toastify'
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
  Container,
  DayTab,
  AddButton,
  DayContainer,
} from './PublishTrip.styled'
import TripDetail from './TripDetail'
import TripDates from './TripDates'
import { StyledToastContainer } from '../../styles/Global'
import TripItinerary from './TripItinerary'
import ItineraryPreview from './ItineraryPreview'
import { FlexContainer } from '../../components/HeroSectionV2/HeroSection.styled'

import { DayTitle, List, ListItem, PreviewTitle } from './ItineraryPreview.styled'
import { SVG } from '../../assets'

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
})

const TABS = {
  TRIP: 'trip',
  USER: 'user',
  ITINERARY: 'Itinerary',
}

const DEFAULT_TRIP_DATA = {
  destination: '',
  startLocation: '',
  minBudget: null,
  maxBudget: null,
  description: '',
  duration: 0,
  destinationImages: [],
  removedDestinationImages: [],
  tripData: [],
  multipleDates: [],
  dayTabs: [{ dayTitle: '', dayDescription: [] }],
}
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

const formatDateObj = (dateObj) => {
  const d = String(dateObj.getDate()).padStart(2, '0')
  const m = String(dateObj.getMonth() + 1).padStart(2, '0')
  const y = dateObj.getFullYear()
  return `${d}-${m}-${y}`
}

const PublishTrip = (props) => {
  const { createTrip, editTrip, createTripsImages, editTripImages } = props
  const [activeSection, setActiveSection] = useState(TABS.TRIP)
  const [tripData, setTripData] = useState(DEFAULT_TRIP_DATA)
  const [toEditTrip, setToEditTrip] = useState(false)
  const [curIdx, setCurIdx] = useState(0)

  const navigate = useNavigate()
  const location = useLocation()
  const editTripData = location.state?.trip || {}

  useEffect(() => {
    if (Object.keys(editTripData).length > 0) {
      const formattedTripData = {
        ...editTripData,
        startDate: formatDate(editTripData.startDate),
        endDate: formatDate(editTripData.endDate),
        removedDestinationImages: editTripData.removedDestinationImages || [],
      }
      setTripData(formattedTripData)
      setToEditTrip(true)
    }
  }, [editTripData])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setTripData((prev) => ({ ...prev, [name]: value }))
  }, [])
  const handleNameChange = useCallback((name, value) => {
    setTripData((prev) => ({ ...prev, [name]: value }))
  }, [])
  const handleTripDataChange = useCallback((field, value) => {
    setTripData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleDeleteDate = useCallback((index) => {
    setTripData((prev) => ({
      ...prev,
      multipleDates: prev.multipleDates.filter((_, i) => i !== index),
    }))
  }, [])

  const handleToggle = useCallback((section) => {
    setActiveSection(section)
  }, [])

  const handleNext = useCallback(() => {
    if (toEditTrip) {
      setActiveSection(TABS.ITINERARY)
      return
    }
    if (activeSection === TABS.TRIP) {
      setActiveSection(TABS.USER)
    } else if (activeSection === TABS.USER) {
      setActiveSection(TABS.ITINERARY)
    }
  }, [activeSection])
  const addDayTab = useCallback(() => {
    setTripData((prev) => ({
      ...prev,
      dayTabs: [...prev.dayTabs, { dayTitle: '', dayDescription: [] }],
    }))
  }, [])

  const getProcessedTripDates = useCallback(() => {
    if (Array.isArray(tripData.multipleDates) && tripData.multipleDates.length > 0) {
      return tripData.multipleDates.map((dateStr) => {
        const [day, month, year] = dateStr.split('-').map(Number)
        const start = new Date(year, month - 1, day)
        const duration = parseInt(tripData.duration, 10) || 0
        const end = new Date(start)
        end.setDate(start.getDate() + duration)
        return { startDate: dateStr, endDate: formatDateObj(end) }
      })
    }
    return []
  }, [tripData.multipleDates, tripData.duration])

  const handleEditTripSubmit = useCallback(async () => {
    const formDataImages = new FormData()
    tripData.destinationImages?.forEach((image) => {
      if (image.file) formDataImages.append('destinationImages', image.file)
    })
    let removedImages = []
    ;(Array.isArray(tripData.removedDestinationImages) ? tripData.removedDestinationImages : []).forEach((image) => {
      removedImages.push(image.object)
    })
    formDataImages.append('removedDestinationImages', JSON.stringify(removedImages))
    const tripDetails = {
      ...tripData,
      tripDates: { startDate: tripData.startDate, endDate: tripData.endDate },
    }

    delete tripDetails.destinationImages
    delete tripDetails.removedDestinationImages

    const isTripPublished = await editTrip(tripData.tripId, tripDetails, false)
    if (!isTripPublished) {
      toast.error('Failed to update trip. Please try again.')
      return
    }

    const isTripImagesPublished = await editTripImages(tripData.tripId, formDataImages, true)
    if (isTripImagesPublished) {
      toast.success('Trip updated successfully!')
      navigate('/')
    } else {
      toast.error('Failed to update trip images. Please try again.')
    }
  }, [tripData, editTrip, editTripImages, navigate])

  const handleCreateTripSubmit = useCallback(async () => {
    const processedTripDates = getProcessedTripDates()
    const tripBody = { ...tripData, tripDates: processedTripDates }
    delete tripBody.destinationImages
    delete tripBody.removedDestinationImages

    const isTripPublished = await createTrip(tripBody, false)
    if (!isTripPublished) {
      toast.error('Failed to publish trip. Please try again.')
      return
    }

    const formDataImages = new FormData()
    tripData.destinationImages?.forEach((image) => {
      formDataImages.append('destinationImages', image.file)
      console.log(image)
    })

    let tripIds = []
    Object.values(isTripPublished.data).forEach((ids) => {
      if (Array.isArray(ids)) {
        tripIds = tripIds.concat(ids)
      }
    })
    formDataImages.append('tripIds', JSON.stringify(tripIds))
    await createTripsImages(formDataImages, true)

    toast.success('Trip published successfully!')
    navigate('/')
  }, [tripData, createTrip, createTripsImages, getProcessedTripDates, navigate])

  const handleSubmit = useCallback(async () => {
    try {
      if (toEditTrip) {
        await handleEditTripSubmit()
      } else {
        await handleCreateTripSubmit()
      }
    } catch (error) {
      console.error('Error during trip submission:', error)
      toast.error('An error occurred during submission.')
    }
  }, [toEditTrip, handleEditTripSubmit, handleCreateTripSubmit])

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
              {!toEditTrip && (
                <>
                  <Divider />
                  <ToggleTab className={activeSection === TABS.USER ? 'active' : ''} onClick={() => handleToggle(TABS.USER)}>
                    Trip Dates
                  </ToggleTab>
                </>
              )}
              {
                <>
                  <Divider />
                  <ToggleTab className={activeSection === TABS.ITINERARY ? 'active' : ''} onClick={() => handleToggle(TABS.ITINERARY)}>
                    Itinerary
                  </ToggleTab>
                </>
              }
            </ToggleBetweenTripUser>
            {activeSection === TABS.TRIP && (
              <TripDetail
                tripData={tripData}
                handleChange={handleChange}
                handleTripDataChange={handleTripDataChange}
                isReadOnly={toEditTrip}
              />
            )}
            {activeSection === TABS.USER && !toEditTrip && (
              <TripDates
                tripData={tripData}
                handleChange={handleChange}
                handleTripDataChange={handleTripDataChange}
                handleDeleteDate={handleDeleteDate}
              />
            )}
            {activeSection === TABS.ITINERARY && (
              <Container>
                <DayContainer>
                  {tripData.dayTabs.map((day, index) => (
                    <DayTab
                      onClick={() => {
                        setCurIdx(index)
                      }}
                      key={index}
                      className={index === curIdx ? 'active' : ''}
                    >
                      Day {index}
                      <img
                        className="clear"
                        src={SVG.clear}
                        alt="Clear"
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurIdx((prev) => (prev > 0 &&
                           prev >= index ? prev - 1 : prev))
                          setTripData((prev) => ({
                            ...prev,
                            dayTabs: prev.dayTabs.filter((_, i) => i !== index),
                          }))
                        }}
                      />
                    </DayTab>
                  ))}
                  <AddButton onClick={addDayTab} disabled={tripData.dayTabs.length >= (tripData?.duration || 6)}>
                    +
                  </AddButton>
                </DayContainer>

                <TripItinerary
                  key={curIdx}
                  tripData={tripData.dayTabs[curIdx]}
                  handleChange={(name, value) => {
                    setTripData((prev) => ({
                      ...prev,
                      dayTabs: prev.dayTabs.map((tab, i) => (i === curIdx ? { ...tab, [name]: value, dayTabId: i } : tab)),
                    }))
                  }}
                />
              </Container>
            )}
          </PublishTripLeftSection>
          <PublishTripRightSection>
            {activeSection === TABS.ITINERARY ? (
              <>
                <PreviewTitle>Preview</PreviewTitle>
                <ItineraryPreview tripData={tripData.dayTabs[curIdx]} />
              </>
            ) : (
              <ImageUpload tripData={tripData} setTripData={setTripData} />
            )}
          </PublishTripRightSection>
        </PublishTripContent>
        {activeSection === TABS.ITINERARY ? (
          <PublishTripButton>
            <SubmitButton onClick={handleSubmit}>Publish</SubmitButton>
          </PublishTripButton>
        ) : (
          <PublishTripButton>
            <SubmitButton onClick={handleNext}>Next</SubmitButton>
          </PublishTripButton>
        )}
      </PublishTripContainer>
      <Footer />
      <StyledToastContainer />
    </PublishTripPage>
  )
}

export default memo(
  connect(mapStateToProps, {
    createTrip,
    editTrip,
    createTripsImages,
    editTripImages,
  })(PublishTrip),
)
