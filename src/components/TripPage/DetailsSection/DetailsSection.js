import React from 'react'
import { SectionContainer, Title, UpperSection, MapImage, Divider } from './DetailsSection.styled'
import AddMembers from './AddMembers/AddMembers'
import TripDescription from './TripDescription/TripDescription'
import TripItinerary from './TripItinerary'
import IncExcPreview from './IncExcPreview'

const DetailsSection = ({ isUserTrip, isEditMode, setEditMode, editedData, setEditedData, onSaveTrip }) => {
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
      <UpperSection>
        <Title>Itinerary</Title>
        {/* <Divider /> */}
        {/* <MapImage /> */}
        <TripItinerary />
        <Title>Inclusions & Exclusions</Title>
        {/* <Divider /> */}
        {/* <MapImage /> */}
        <IncExcPreview />
        <Divider />
      </UpperSection>
      <AddMembers isUserTrip={isUserTrip} editMode={isEditMode} />
    </SectionContainer>
  )
}

export default DetailsSection
