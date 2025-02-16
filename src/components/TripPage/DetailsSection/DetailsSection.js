import React from 'react'
import { SectionContainer, Title, UpperSection, MapImage, Divider } from './DetailsSection.styled'

import AddMembers from './AddMembers/AddMembers'
import TripDescription from './TripDescription/TripDescription'

const DetailsSection = ({ isUserTrip }) => {
  return (
    <SectionContainer>
      <TripDescription isUserTrip={isUserTrip} />
      <UpperSection>
        <Title>Your Destination</Title>
        <Divider />
        <MapImage />
        <Divider />
      </UpperSection>
      <AddMembers isUserTrip={isUserTrip}/>
    </SectionContainer>
  )
}

export default DetailsSection
