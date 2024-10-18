import React, { useEffect, useState, memo } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import DatePicker from '../../components/DatePicker/DatePicker'
import Searchbar from '../../components/Searchbar/Searchbar'
import { connect } from 'react-redux'
import { getProfile } from '../../actions/profile.action'
import { createTrip } from '../../actions/trips.action'
import { ToastContainer } from 'react-toastify'
import ImageUpload from './ImageUpload/ImageUpload'
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
                      <InputLabel>Start Location</InputLabel>
                      <Searchbar
                        inputValues={tripData.startLocation}
                        setInputValues={setTripData}
                        onValue={'startLocation'}
                        placeholderValue={'Enter Start Location'}
                        style={{ width: '100%' }}
                        height={`51px`}
                        fontWeight={`500`}
                        borderColor={`#0b87ac`}
                      />{' '}
                    </InputGroup>
                    <InputGroup>
                      <InputLabel>Destination</InputLabel>
                      <Searchbar
                        inputValues={tripData.destination}
                        setInputValues={setTripData}
                        onValue={'destination'}
                        placeholderValue={'Enter Destination'}
                        style={{ width: '100%' }}
                        height={`51px`}
                        fontWeight={`500`}
                        borderColor={`#0b87ac`}
                      />
                    </InputGroup>
                  </InputRow>
                  <InputRow>
                    <InputGroup>
                      <InputLabel>Start Date</InputLabel>
                      <DatePicker
                        inputValues={tripData.startDate}
                        setInputValues={setTripData}
                        onValue={'startDate'}
                        placeholderValue={'Select Start date'}
                        fontWeight={`500`}
                        borderColor={`#0b87ac`}
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLabel>End Date</InputLabel>
                      <DatePicker
                        inputValues={tripData.endDate}
                        setInputValues={setTripData}
                        onValue={'endDate'}
                        placeholderValue={'Select End date'}
                        height={`51px`}
                        fontWeight={`500`}
                        borderColor={`#0b87ac`}
                      />
                    </InputGroup>
                  </InputRow>
                  <InputRow>
                    <InputGroup>
                      <InputLabel>Total Members</InputLabel>
                      <InputField
                        type="text"
                        name="totalMembers"
                        value={tripData.totalMembers || ''}
                        onChange={handleChange}
                        placeholder="Enter Total Members"
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLabel>Budget</InputLabel>
                      <InputField
                        type="text"
                        name="budget"
                        value={tripData.budget || ''}
                        onChange={handleChange}
                        placeholder="Enter Budget"
                      />
                    </InputGroup>
                  </InputRow>
                  <InputGroup>
                    <InputLabel>Description</InputLabel>
                    <DescriptionField
                      name="description"
                      value={tripData.description}
                      onChange={handleChange}
                      placeholder="Enter Trip Description"
                    />
                  </InputGroup>

                  <PublishTripButton>
                    <NextButton onClick={handleNext}>Next</NextButton>
                  </PublishTripButton>
                </>
              ) : (
                <>
                  <InputRow>
                    <InputGroup>
                      <InputLabel>Full Name</InputLabel>
                      <InputField
                        name="name"
                        type="text"
                        className="input-field"
                        placeholder="Enter full name"
                        value={profile?.name !== null ? profile.name : ''}
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLabel>Email</InputLabel>
                      <InputField
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
                      <InputLabel>Phone Number</InputLabel>
                      <InputField
                        name="phoneNumber"
                        type="text"
                        className="input-field"
                        placeholder="Enter phone number"
                        value={profile?.phoneNumber !== null ? profile.phoneNumber : ''}
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLabel>Age</InputLabel>
                      <InputField
                        name="text"
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
                      <InputLabel>Gender</InputLabel>
                      <InputField
                        name="gender"
                        type="text"
                        className="input-field"
                        placeholder="Enter gender"
                        onChange={handleChange}
                        value={tripData.gender}
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLabel>Persona</InputLabel>
                      <InputField
                        name="persona"
                        type="text"
                        className="input-field"
                        placeholder="Enter persona"
                        onChange={handleChange}
                        value={tripData.persona}
                      />
                    </InputGroup>
                  </InputRow>

                  <PublishTripButton>
                    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                  </PublishTripButton>
                </>
              )}
            </LeftSection>
          </PublishTripLeftSection>

          <PublishTripRightSection>
            <ImageUpload tripData={tripData} setTripData={setTripData} />
          </PublishTripRightSection>
        </PublishTripContent>
      </PublishTripContainer>
      <Footer />
      <ToastContainer />
    </PublishTripPage>
  )
}

export default memo(connect(mapStateToProps, { getProfile, createTrip })(PublishTrip))
