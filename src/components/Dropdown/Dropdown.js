import React, { useEffect, useRef } from 'react'
import { City, DropdownContainer, DropdownItem, FlexContainerCust } from './Dropdown.styled.js'
import { useNavigate } from 'react-router-dom'
import LineBorder from '../../styles/Line.styled.js'

const Dropdown = ({ data, selectSuggestion, setShowDropdown, renderItem, selectable = true, title = 'Data' }) => {
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
      {!!data.length ? (
        data.map((item, index) => (
          <DropdownItem key={index} selectable={selectable} onClick={() => selectSuggestion(item)}>
            <FlexContainerCust direction="column" alignItems="start" gap="1%" width="100%" fontSize="min(1.5vw,24px)">
              {renderItem ? renderItem(item) : <City>{item.value}</City>}
              <LineBorder />
            </FlexContainerCust>
          </DropdownItem>
        ))
      ) : (
        <DropdownItem selectable={false}>
          <FlexContainerCust direction="column" alignItems="center" gap="1%" width="100%" fontSize="min(1.5vw,24px)">
            <City>{`No ${title} Found`}</City>
          </FlexContainerCust>
        </DropdownItem>
      )}
    </DropdownContainer>
  )
}

export default Dropdown
