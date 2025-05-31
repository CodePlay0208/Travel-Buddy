import React from 'react'
import { Container, InputColumn, InputGroup, InputRow } from './PublishTrip.styled'
import { Input, Label } from '../../styles/Global'
import DatePicker from '../../components/DatePicker/DatePicker'
import DateRange from './dateRange'
import InputDropdown from '../../components/InputDropdown/InputDropdown'

const TripDates = ({ tripData, handleChange, handleTripDataChange, handleDeleteDate }) => {
  return (
    <Container>
      <InputRow>
        <InputColumn width="80%">
          <InputGroup>
            <Label fontSize="1rem" fontWeight="700">
              Duration (No. of Days)
            </Label>
            <Input name="duration" type="text" placeholder="Enter No. of Days" value={tripData.duration || ''} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <Label fontSize="1rem" fontWeight="700">
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
              backgroundColor="#f2f2f2"
              border="2px solid #f2f2f2"
            />
          </InputGroup>
        </InputColumn>
        <InputColumn gap="10px">
          <InputGroup width="100%">
            <Label fontSize="1rem" fontWeight="700">
              Schedule Trip
            </Label>
            <InputDropdown
              options={[
                { value: 'Daily' },
                { value: 'Every 3 months' },
                { value: 'Every 6 months' },
                { value: 'Yearly' },
                { value: 'Until I turn this off' },
              ]}
              padding="2%"
              name="scheduleTrip"
              type="text"
              placeholder="Schedule Trip Duration"
              value={tripData.duration || ''}
              onChange={handleChange}
            />
          </InputGroup>
          <InputRow>
            <Label fontSize="1rem" fontWeight="700">
              Dates Preview
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
