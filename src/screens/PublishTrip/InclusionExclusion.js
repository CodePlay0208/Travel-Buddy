import React from 'react'
import {
  ButtonContainer,
  Container,
  DescriptionField,
  InputColumn,
  InputGroup,
  InputGroupDayName,
  InputGroupDesc,
  InputGroupList,
  InputRow,
} from './PublishTrip.styled'

import { Button, Input, Label } from '../../styles/Global'
import DayTitle from './dayTitle'

const InclusionExclusion = ({ tripData, handleChange, handleTripDataChange, handleDeleteDate }) => {
  const [curPoint, setCurPoint] = React.useState('')
  const [curDescription, setCurDescription] = React.useState('')
  const [editIdx, setEditIdx] = React.useState(null)
  const [isEdit, setIsEdit] = React.useState(false)

  const handleAddPoint = () => {
    if (curPoint) {
      const updatedDayPoints = [...(tripData.inc_excDescription || []), curPoint]
      handleChange('inc_excDescription', updatedDayPoints)
      setCurPoint('')
    } else {
      alert('Please enter a point')
    }
  }

  const handlSavePoint = () => {
    if (curPoint) {
      const updatedDayPoints = [...(tripData.inc_excDescription || [])]
      updatedDayPoints[editIdx] = curPoint
      handleChange('inc_excDescription', updatedDayPoints)
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
    const updatedDayPoints = [...(tripData.inc_excDescription || [])]
    updatedDayPoints.splice(index, 1)
    handleChange('inc_excDescription', updatedDayPoints)
  }

  const onEditClick = (index) => {
    const currentPoint = tripData.inc_excDescription[index]
    setEditIdx(index)
    setIsEdit(true)
    setCurPoint(currentPoint)
  }

  return (
    <>
      <InputRow margin="0 0" gap="32px">
        <InputColumn gap="16px">
          <InputGroupDesc>
            <InputColumn width="88%" margin='0'>
              <DescriptionField
                name="inc_excDescription"
                borderRadius="16px"
                value={curPoint}
                onChange={(e) => setCurPoint(e.target.value)}
                placeholder={`Trip ${tripData?.inc_excTitle?.toLowerCase().includes('inclusions') ? 'Inclusion' : 'Exclusion'}`}
              />
            </InputColumn>
            <InputColumn width="10%">
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
            </InputColumn>
          </InputGroupDesc>
          <InputGroupList>
            {/* <Label fontSize="1rem" fontWeight="600">
            Dates
          </Label> */}
            <InputColumn width="88%" gap="10px">
              {tripData?.inc_excDescription?.map((dayPoint, index) => (
                <DayTitle title={dayPoint} onDelete={onDelete} onEditClick={onEditClick} idx={index}></DayTitle>
              ))}
            </InputColumn>
          </InputGroupList>
        </InputColumn>
      </InputRow>
    </>
  )
}

InclusionExclusion.displayName = 'InclusionExclusion'

export default InclusionExclusion
