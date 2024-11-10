import React from 'react'
import { SectionContainer, Title, UpperSection, MapImage, Divider } from './DetailsSection.styled'

import AddMembers from './AddMembers/AddMembers'
import TripDescription from './TripDescription/TripDescription'

const DetailsSection = () => {
  return (
    <SectionContainer>
      <TripDescription />
      <UpperSection>
        <Title>Your Destination</Title>
        <Divider />
        <MapImage />
        <Divider />
      </UpperSection>
      <AddMembers />
    </SectionContainer>
  )
}

export default DetailsSection
