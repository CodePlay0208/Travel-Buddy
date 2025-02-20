import React, { useEffect, useRef } from 'react'
import { City, DropdownContainer, DropdownItem } from './Dropdown.styled.js'
import { useNavigate } from 'react-router-dom'
import { FlexContainer } from '../HeroSectionV2/HeroSection.styled.js'
import LineBorder from '../../styles/Line.styled.js'

const Dropdown = ({ data, selectSuggestion, setShowDropdown, renderItem }) => {
  const navigate = useNavigate()
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setShowDropdown])

  return (
    <DropdownContainer ref={wrapperRef}>
      {data.map((item, index) => (
        <DropdownItem key={index} onClick={() => selectSuggestion(item)}>
          <FlexContainer direction="column" alignItems="start" gap="1%" width="100%" fontSize="min(1.5vw,24px)">
            {renderItem ? renderItem(item) : <City>{item.value}</City>}
            <LineBorder />
          </FlexContainer>
        </DropdownItem>
      ))}
    </DropdownContainer>
  )
}

export default Dropdown
