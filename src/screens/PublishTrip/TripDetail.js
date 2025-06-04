import React from 'react'
import { Container, DescriptionField, InputGroup, InputRow } from './PublishTrip.styled'
import { Input, Label } from '../../styles/Global'
import Searchbar from '../../components/Searchbar/Searchbar'

const TripDetail = ({ tripData, handleChange, handleTripDataChange, isReadOnly }) => {
  return (
    <Container gap="20px" mobileGap="16px">
      <InputRow margin="0 0%">
        <InputGroup>
          <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
            Trip Title
          </Label>
          <Input
            type="text"
            name="title"
            autoComplete="off"
            value={tripData.title || ''}
            onChange={handleChange}
            placeholder="Trip Title"
            padding="1.25%"
          />
        </InputGroup>
      </InputRow>
      <InputRow margin="0 0%">
        <InputGroup>
          <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
            Pick Up Locations
          </Label>
          <Searchbar
            isReadOnly={isReadOnly}
            inputValues={tripData.startLocation} // array of strings
            setInputValues={(value) => handleTripDataChange('startLocation', value)}
            onValue="startLocation"
            placeholderValue="Enter Start Location"
            style={{ width: '100%' }}
            fontSize="1rem"
            fontWeight="500"
            borderColor="#0b87ac"
            dropDownFontSize="75%"
            isMultiSelect={true}
          />
        </InputGroup>
        <InputGroup>
          <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
            Destination
          </Label>
          <Searchbar
            isReadOnly={isReadOnly}
            inputValues={tripData.destination} // array of strings
            setInputValues={(value) => handleTripDataChange('destination', value)}
            onValue="destination"
            placeholderValue="Enter Destination"
            style={{ width: '100%' }}
            fontSize="1rem"
            fontWeight="500"
            borderColor="#0b87ac"
            dropDownFontSize="75%"
            isMultiSelect={true}
          />
        </InputGroup>
      </InputRow>
      <InputRow margin="0 0%">
        <InputGroup>
          <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
            Minimun Budget
          </Label>
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
          <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
            Maximum Budget
          </Label>
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
      <InputRow margin="0 0%">
        <InputGroup>
          <Label fontSize="1rem" fontWeight="500" margin="0% 0 1%">
            Description
          </Label>
          <DescriptionField name="description" value={tripData.description} onChange={handleChange} placeholder="Enter Trip Description" />
        </InputGroup>
      </InputRow>
    </Container>
  )
}

export default TripDetail
