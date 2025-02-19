import React, { useEffect, useState, memo } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import DatePicker from '../../components/DatePicker/DatePicker'
import Searchbar from '../../components/Searchbar/Searchbar'
import { connect } from 'react-redux'
import { getProfile } from '../../actions/profile.action'
import { createTrip, editTrip } from '../../actions/trips.action'
import { ToastContainer } from 'react-toastify'
import ImageUpload from './ImageUpload/ImageUpload'
import { useLocation } from 'react-router-dom'
import {
  PublishTripPage,
  PublishTripContainer,
  PublishTripHeading,
  PublishTripContent,
  PublishTripLeftSection,
  LeftSection,
  InputGroup,
  InputLabel,
  InputField,
  DescriptionField,
  ToggleBetweenTripUser,
  ToggleTab,
  Divider,
  PublishTripButton,
  NextButton,
  SubmitButton,
  InputRow,
  PublishTripRightSection,
} from './PublishTrip.styled'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../../components/Dropdown/Dropdown'
import { Input, Label } from '../../styles/Global'

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
  totalMembers: null,
  budget: null,
  age: null,
  gender: '',
  description: '',
  destinationImages: [],
  persona: '',
}

const PublishTrip = (props) => {
  const { profile, getProfile, createTrip, editTrip } = props
  const [activeSection, setActiveSection] = useState(TABS.TRIP)
  const [tripData, setTripData] = useState(DEFAULT_TRIP_DATA)
  const [showPersonaDropDown, setShowPersonaDropDown] = useState(false)
  const [showGenderDropDown, setShowGenderDropDown] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const editTripData = location.state?.trip || {}
  const [toEditTrip, setToEditTrip] = useState(false)

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0') // Ensures 2-digit day
    const month = String(date.getMonth() + 1).padStart(2, '0') // Month is 0-indexed
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
        if (!toEditTrip && key === 'destinationImages' && Array.isArray(value)) {
          value.forEach((image) => {
            formDataNew.append('destinationImages', image.file)
          })
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

  const handleTripDataChange = (field, value) => {
    setTripData({
      ...tripData,
      [field]: value,
    })
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
                User Details
              </ToggleTab>
            </ToggleBetweenTripUser>

            <LeftSection>
              {activeSection === TABS.TRIP ? (
                <>
                  <InputRow>
                    <InputGroup>
                      <Label>Start Location</Label>
                      <Searchbar
                        inputValues={tripData.startLocation}
                        setInputValues={(value) => handleTripDataChange('startLocation', value)}
                        onValue={'startLocation'}
                        placeholderValue={'Enter Start Location'}
                        style={{ width: '100%' }}
                        fontSize={`1vw`}
                        fontWeight={`500`}
                        borderColor={`#0b87ac`}
                        dropDownFontSize={'75%'}
                      />{' '}
                    </InputGroup>
                    <InputGroup>
                      <Label>Destination</Label>
                      <Searchbar
                        inputValues={tripData.destination}
                        setInputValues={(value) => handleTripDataChange('destination', value)}
                        onValue={'destination'}
                        placeholderValue={'Enter Destination'}
                        style={{ width: '100%' }}
                        fontSize={`1vw`}
                        fontWeight={`500`}
                        borderColor={`#0b87ac`}
                        dropDownFontSize={'75%'}
                      />
                    </InputGroup>
                  </InputRow>
                  <InputRow>
                    <InputGroup>
                      <Label>Start Date</Label>
                      <DatePicker
                        inputValues={tripData?.startDate}
                        setInputValues={(value) => handleTripDataChange('startDate', value)}
                        onValue={'startDate'}
                        placeholderValue={'Select Start date'}
                        fontWeight={`500`}
                        fontSize={`1vw`}
                        padding={`2.5%`}
                        borderRadius={'30px'}
                        backgroundColor={'#f4f4f4'}
                        border={'2px solid #f4f4f4'}
                      />
                    </InputGroup>
                    <InputGroup>
                      <Label>End Date</Label>
                      <DatePicker
                        inputValues={tripData?.endDate}
                        setInputValues={(value) => handleTripDataChange('endDate', value)}
                        onValue={'endDate'}
                        placeholderValue={'Select End date'}
                        fontWeight={`500`}
                        fontSize={`1vw`}
                        padding={`2.5%`}
                        borderRadius={'30px'}
                        backgroundColor={'#f4f4f4'}
                        border={'2px solid #f4f4f4'}
                      />
                    </InputGroup>
                  </InputRow>
                  <InputRow>
                    <InputGroup>
                      <Label>Total Members</Label>
                      <Input
                        type="text"
                        name="totalMembers"
                        value={tripData.totalMembers || ''}
                        onChange={handleChange}
                        placeholder="Enter Total Members"
                      />
                    </InputGroup>
                    <InputGroup>
                      <Label>Budget</Label>
                      <Input type="text" name="budget" value={tripData.budget || ''} onChange={handleChange} placeholder="Enter Budget" />
                    </InputGroup>
                  </InputRow>
                  <InputRow>
                    <InputGroup>
                      <Label>Description</Label>
                      <DescriptionField
                        name="description"
                        value={tripData.description}
                        onChange={handleChange}
                        placeholder="Enter Trip Description"
                      />
                    </InputGroup>
                  </InputRow>
                </>
              ) : (
                <>
                  <InputRow>
                    <InputGroup>
                      <Label>Full Name</Label>
                      <Input
                        name="name"
                        type="text"
                        className="input-field"
                        placeholder="Enter full name"
                        value={profile?.username !== null ? profile.username : ''}
                      />
                    </InputGroup>
                    <InputGroup>
                      <Label>Email</Label>
                      <Input
                        name="emailId"
                        type="email"
                        className="input-field"
                        placeholder="Enter email address"
                        value={profile?.emailId !== null ? profile.emailId : ''}
                      />
                    </InputGroup>
                  </InputRow>
                  <InputRow>
                    <InputGroup>
                      <Label>Phone Number</Label>
                      <Input
                        name="phoneNumber"
                        type="text"
                        className="input-field"
                        placeholder="Enter phone number"
                        value={profile?.phoneNumber !== null ? profile.phoneNumber : ''}
                      />
                    </InputGroup>
                    <InputGroup>
                      <Label>Age</Label>
                      <Input
                        name="age"
                        type="text"
                        className="input-field"
                        placeholder="Enter age"
                        onChange={handleChange}
                        value={tripData.age}
                      />
                    </InputGroup>
                  </InputRow>
                  <InputRow>
                    <InputGroup>
                      <Label>Gender</Label>
                      <Input
                        name="gender"
                        type="text"
                        className="input-field"
                        placeholder="Enter gender"
                        onChange={handleChange}
                        value={tripData.gender}
                        onFocus={() => setShowGenderDropDown(true)}
                        onBlur={(e) => {
                          setTimeout(() => setShowGenderDropDown(false), 1000)
                        }}
                      />
                      {showGenderDropDown && (
                        <Dropdown
                          data={[{ value: 'Male' }, { value: 'Female' }, { value: 'Others' }]}
                          selectSuggestion={(selected) => {
                            handleChange({
                              target: { name: 'gender', value: selected.value },
                            })
                            setShowGenderDropDown(false)
                          }}
                        />
                      )}
                    </InputGroup>

                    <InputGroup>
                      <Label>Persona</Label>
                      <Input
                        name="persona"
                        type="text"
                        className="input-field"
                        placeholder="Enter persona"
                        onChange={handleChange}
                        value={tripData.persona}
                        onFocus={() => setShowPersonaDropDown(true)}
                        onBlur={(e) => {
                          setTimeout(() => setShowPersonaDropDown(false), 1000)
                        }}
                      />
                      {showPersonaDropDown && (
                        <Dropdown
                          data={[{ value: 'Traveller' }, { value: 'Agent' }]}
                          selectSuggestion={(selected) => {
                            handleChange({
                              target: { name: 'persona', value: selected.value },
                            })
                            setShowPersonaDropDown(false)
                          }}
                        />
                      )}
                    </InputGroup>
                  </InputRow>
                </>
              )}
            </LeftSection>
          </PublishTripLeftSection>

          {!toEditTrip && (
            <PublishTripRightSection>
              <ImageUpload tripData={tripData} setTripData={setTripData} />
            </PublishTripRightSection>
          )}
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
