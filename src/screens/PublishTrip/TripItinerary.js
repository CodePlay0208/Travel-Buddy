import React from 'react'
import { ButtonContainer, Container, DescriptionField, InputColumn, InputGroup, InputGroupDayName, InputGroupDesc, InputGroupList, InputRow } from './PublishTrip.styled'

import { Button, Input, Label } from '../../styles/Global'
import DatePicker from '../../components/DatePicker/DatePicker'
import DateRange from './dateRange'
import { FlexContainer } from '../../components/HeroSectionV2/HeroSection.styled'
import DayTitle from './dayTitle'

const TripItinerary = ({ tripData, handleChange, handleTripDataChange, handleDeleteDate }) => {
  const [curPoint, setCurPoint] = React.useState('')
  const [curDescription, setCurDescription] = React.useState('')
  const [editIdx, setEditIdx] = React.useState(null)
  const [isEdit, setIsEdit] = React.useState(false)

  const handleAddPoint = () => {
    if (curPoint) {
      const updatedDayPoints = [...(tripData.dayDescription || []), curPoint]
      handleChange('dayDescription', updatedDayPoints)
      setCurPoint('')
    } else {
      alert('Please enter a point')
    }
  }

  const handlSavePoint = () => {
    if (curPoint) {
      const updatedDayPoints = [...(tripData.dayDescription || [])]
      updatedDayPoints[editIdx] = curPoint
      handleChange('dayDescription', updatedDayPoints)
      setCurPoint('')
      setEditIdx(null)
      setIsEdit(false)
    } else {
      onDelete(editIdx)
      setCurPoint('')
      setEditIdx(null)
      setIsEdit(false)
    }
  }

  const onDelete = (index) => {
    const updatedDayPoints = [...(tripData.dayDescription || [])]
    updatedDayPoints.splice(index, 1)
    handleChange('dayDescription', updatedDayPoints)
  }

  const onEditClick = (index) => {
    const currentPoint = tripData.dayDescription[index]
    setEditIdx(index)
    setIsEdit(true)
    setCurPoint(currentPoint)
  }

  return (
    <>
      <InputRow>
        <InputColumn width="100%">
          <InputGroupDayName>
            {/* <Label fontSize="1rem" fontWeight="600">
              Day Title
            </Label> */}
            <Input
              width="60%"
              name="dayTitle"
              type="text"
              placeholder="Enter Day Name"
              value={tripData.dayTitle || ''}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </InputGroupDayName>
          <InputGroupDesc>
              <DescriptionField
                name="dayDescription"
                borderRadius="30px"
                value={curPoint}
                onChange={(e) => setCurPoint(e.target.value)}
                placeholder="Enter Day Description"
              />
              <ButtonContainer>
                {isEdit ? (
                  <Button padding="12.5%" onClick={handlSavePoint}>
                    Save
                  </Button>
                ) : (
                  <Button padding="12.5%" onClick={handleAddPoint}>
                    Add
                  </Button>
                )}
              </ButtonContainer>
          </InputGroupDesc>
          <InputGroupList >
            {/* <Label fontSize="1rem" fontWeight="600">
            Dates
          </Label> */}
            {tripData.dayDescription?.map((dayPoint, index) => (
              <DayTitle title={dayPoint} onDelete={onDelete} onEditClick={onEditClick} idx={index}></DayTitle>
            ))}
          </InputGroupList>
        </InputColumn>
        {/* <InputColumn>
        
      </InputColumn> */}
      </InputRow>
    </>
  )
}

export default TripItinerary
