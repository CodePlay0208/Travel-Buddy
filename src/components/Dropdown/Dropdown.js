import React from 'react'
import { DropdownContainer, DropdownItem } from './Dropdown.styled.js'
import { useNavigate } from 'react-router-dom'
import { FlexContainer } from '../HeroSectionV2/HeroSection.styled.js'
import LineBorder from '../../styles/Line.styled.js'

const Dropdown = ({ data, selectSuggestion }) => {
  const navigate = useNavigate()

  return (
    <DropdownContainer>
      {data.map((data, index) => (
        <>
          <DropdownItem key={index} onClick={() => selectSuggestion(data)}>
            <FlexContainer fontSize="inherit" color="#7c7878" alignItems="start" gap="10px" direction="column" width="100%">
              {data.value}
            </FlexContainer>
          </DropdownItem>
          <LineBorder></LineBorder>
        </>
      ))}
    </DropdownContainer>
  )
}

export default Dropdown
