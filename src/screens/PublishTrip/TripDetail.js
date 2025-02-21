import React from 'react'
import { DescriptionField, InputGroup, InputRow } from './PublishTrip.styled'
import { Input, Label } from '../../styles/Global'
import Searchbar from '../../components/Searchbar/Searchbar'

const TripDetail = ({ tripData, handleChange, handleTripDataChange }) => {
  return (
    <>
      <InputRow>
        <InputGroup>
          <Label fontSize="1vw">Start Location</Label>
          <Searchbar
            inputValues={tripData.startLocation}
            setInputValues={(value) => handleTripDataChange('startLocation', value)}
            onValue="startLocation"
            placeholderValue="Enter Start Location"
            style={{ width: '100%' }}
            fontSize="1vw"
            fontWeight="500"
            borderColor="#0b87ac"
            dropDownFontSize="75%"
          />
        </InputGroup>
        <InputGroup>
          <Label fontSize="1vw">Destination</Label>
          <Searchbar
            inputValues={tripData.destination}
            setInputValues={(value) => handleTripDataChange('destination', value)}
            onValue="destination"
            placeholderValue="Enter Destination"
            style={{ width: '100%' }}
            fontSize="1vw"
            fontWeight="500"
            borderColor="#0b87ac"
            dropDownFontSize="75%"
          />
        </InputGroup>
      </InputRow>
      <InputRow>
        <InputGroup>
          <Label fontSize="1vw">Minimum Budget</Label>
          <Input
            type="text"
            name="minBudget"
            autoComplete="off"
            value={tripData.minBudget || ''}
            onChange={handleChange}
            placeholder="Enter Minimum Budget"
          />
        </InputGroup>
        <InputGroup>
          <Label fontSize="1vw">Maximum Budget</Label>
          <Input
            type="text"
            name="maxBudget"
            autoComplete="off"
            value={tripData.maxBudget || ''}
            onChange={handleChange}
            placeholder="Enter Maximum Budget"
          />
        </InputGroup>
      </InputRow>
      <InputRow>
        <InputGroup>
          <Label fontSize="1vw">Description</Label>
          <DescriptionField name="description" value={tripData.description} onChange={handleChange} placeholder="Enter Trip Description" />
        </InputGroup>
      </InputRow>
    </>
  )
}

export default TripDetail
