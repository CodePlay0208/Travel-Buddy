import React from 'react'
import { Container, DescriptionField, InputColumn, InputGroup, InputRow } from './PublishTrip.styled'

import { Button, Input, Label } from '../../styles/Global'
import DatePicker from '../../components/DatePicker/DatePicker'
import DateRange from './dateRange'
import { FlexContainer } from '../../components/HeroSectionV2/HeroSection.styled'
import DayTitle from './dayTitle'

const TripItinerary = ({ tripData, handleChange, handleTripDataChange, handleDeleteDate }) => {
  const [curPoint, setCurPoint] = React.useState('')
  const [curDescription, setCurDescription] = React.useState('')
  const handleAddPoint = () => {
    if (curPoint) {
      const updatedDayPoints = [...(tripData.dayPoints || []), curPoint]
      handleChange('dayPoints', updatedDayPoints)
      setCurPoint('')
    } else {
      alert('Please enter a point')
    }
  }
  return (
    <Container>
      <InputRow>
        <InputColumn width="100%">
          <InputGroup width="50%">
            {/* <Label fontSize="1rem" fontWeight="600">
              Day Title
            </Label> */}
            <Input
              width="60%"
              name="dayTitle"
              type="text"
              placeholder="Enter Day Name"
              value={tripData.dayTitle || ''}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            {/* <Label fontSize="1rem" fontWeight="600">
              Day Description
            </Label> */}
            <FlexContainer style={{ width: '100%' }}>
              <DescriptionField
                name="dayPoints"
                borderRadius="30px"
                value={curPoint}
                onChange={(e) => setCurPoint(e.target.value)}
                placeholder="Enter Day Description"
              />
              <FlexContainer width="15%" height="100%" justifyContent="flex-end" alignItems="flex-end">
                <Button padding="12.5%" onClick={handleAddPoint}>
                  Add
                </Button>
              </FlexContainer>
            </FlexContainer>
          </InputGroup>
          <InputGroup width="50%" margin="3% 2% 2%" gap='10px'>
            {/* <Label fontSize="1rem" fontWeight="600">
            Dates
          </Label> */}
            {tripData.dayPoints?.map((dayPoint, index) => (
              <DayTitle title={dayPoint}></DayTitle>
            ))}
          </InputGroup>
        </InputColumn>
        {/* <InputColumn>
        
      </InputColumn> */}
      </InputRow>
    </Container>
  )
}

export default TripItinerary
