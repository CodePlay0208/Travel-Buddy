import React from 'react'
import { Container, InputColumn, InputGroup, InputRow } from './PublishTrip.styled'
import { Input, Label } from '../../styles/Global'
import DatePicker from '../../components/DatePicker/DatePicker'
import DateRange from './dateRange'

const TripDates = ({ tripData, handleChange, handleTripDataChange, handleDeleteDate }) => {
  return (
    <Container>
      <InputRow>
        <InputColumn width="80%">
          <InputGroup>
            <Label fontSize="1rem" fontWeight="600">
              Duration (No. of Days)
            </Label>
            <Input name="duration" type="text" placeholder="Enter No. of Days" value={tripData.duration || ''} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <Label fontSize="1rem" fontWeight="600">
              Pick Your Start Dates
            </Label>
            <DatePicker
              inputValues={tripData.multipleDates}
              setInputValues={(value) => handleTripDataChange('multipleDates', value)}
              onValue="multipleDates"
              maxDates={10}
              showOnlyCalendar={true}
              placeholderValue="Your Arrival & Departure"
              fontWeight="500"
              fontSize="1rem"
              padding="2.5%"
              borderRadius="30px"
              backgroundColor="#f4f4f4"
              border="2px solid #f4f4f4"
            />
          </InputGroup>
        </InputColumn>
        <InputColumn>
          <InputRow>
            <Label fontSize="1rem" fontWeight="600">
              Dates
            </Label>
          </InputRow>
          {tripData.multipleDates?.map((date, index) => (
            <DateRange key={index} startDate={date} totalDays={tripData.duration} onDelete={() => handleDeleteDate(index)} />
          ))}
        </InputColumn>
      </InputRow>
    </Container>
  )
}

export default TripDates
