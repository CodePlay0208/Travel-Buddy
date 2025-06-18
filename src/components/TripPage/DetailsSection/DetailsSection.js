import React, { memo } from 'react'
import { SectionContainer, Title, UpperSection, MapImage, Divider, LocationContainer } from './DetailsSection.styled'
import AddMembers from './AddMembers/AddMembers'
import TripDescription from './TripDescription/TripDescription'
import TripItinerary from './TripItinerary'
import IncExcPreview from './IncExcPreview'
import PickupLocation from '../../PickupLocation/PickupLocation'
import PickupLocationDemo from '../../PickupLocation/PickupLocationDemo'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
})

const DetailsSection = ({trip, isUserTrip, isEditMode, setEditMode, editedData, setEditedData, onSaveTrip }) => {
  return (
    <SectionContainer>
      <TripDescription
        isUserTrip={isUserTrip}
        editMode={isEditMode}
        setEditMode={setEditMode}
        editedData={editedData}
        setEditedData={setEditedData}
        onSaveTrip={onSaveTrip}
      />
      
      <LocationContainer>

      <PickupLocation  title="Pick Up Location:" locationsClubbed={trip.startLocation} />
      <PickupLocation  title="Destination:" locationsClubbed={trip.destination} />
      </LocationContainer>
      <UpperSection>
        <Title>Itinerary</Title>
        {/* <Divider /> */}
        {/* <MapImage /> */}
        <TripItinerary />
        
        {/* <Divider /> */}
        {/* <MapImage /> */}
        <IncExcPreview />
        <Divider />
      </UpperSection>
      <AddMembers isUserTrip={isUserTrip} editMode={isEditMode} />
    </SectionContainer>
  )
}

export default connect(mapStateToProps, null)(memo( DetailsSection))
