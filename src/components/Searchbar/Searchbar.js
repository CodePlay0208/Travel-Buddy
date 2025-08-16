import React, { useState, memo, useEffect } from 'react'
import { SVG } from '../../assets'
import { SearchBarContainer } from '../../styles/Searchbar.styled'
import { Input } from '../../styles/Global'
import Dropdown from '../Dropdown/Dropdown'
import { City, State } from '../../styles/Searchbar.styled'
import { useSelector, useDispatch } from 'react-redux'
import { getLocationSuggestions } from '../../store/slices/location-slice'

const Searchbar = (props) => {
  const {
    inputValues,
    setInputValues,
    onValue,
    placeholderValue,
    isReadOnly,
    width,
    height,
    borderColor,
    padding,
    fontSize,
    fontWeight,
    border,
    backgroundColor,
    isMultiSelect = false,
  } = props

  const { suggestions } = useSelector((state) => state.locationReducer) 
  const dispatch = useDispatch()

  const [inputText, setInputText] = useState({ city: '', state: '' })
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  const [formattedValue, setFormattedValue] = useState(inputValues || '')

  useEffect(() => {
    if (!isMultiSelect) {
      setFormattedValue(inputValues || '')
    }
  }, [inputValues, isMultiSelect])

  const handleInputChange = (event) => {
    const value = event.target.value
    setFormattedValue(value)
    if (!isMultiSelect) {
      setInputValues(value)
    }

    if (timeoutId) clearTimeout(timeoutId)

    const newTimeoutId = setTimeout(async () => {
      if (value.length > 2 && value.length < 25) {
        try {
          await dispatch(getLocationSuggestions(value)).unwrap()
          setDropdownVisible(true)
        } catch (error) {
          console.error('Error fetching location suggestions:', error)
        }
      } else {
        setDropdownVisible(false)
      }
    }, 300)
    setTimeoutId(newTimeoutId)
  }

  const addToList = () => {
    if (Array.isArray(inputValues) && !inputValues.includes(inputText)) {
      setInputValues([...inputValues, inputText])
    }
    setInputText({ city: '', state: '' })
    setFormattedValue('')
    setDropdownVisible(false)
  }

  const selectSuggestion = (suggestion) => {
    setInputText({ city: suggestion.city, state: suggestion.state })
    setFormattedValue(`${suggestion.city},${suggestion.state}`)
    if (!isMultiSelect) {
      setInputValues(`${suggestion.city},${suggestion.state}`)
    }
    setTimeout(() => setDropdownVisible(false), 0)
  }

  const handleClear = () => {
    if (!isMultiSelect) {
      setInputValues('')
    }
    setInputText({ city: '', state: '' })
    setFormattedValue('')
  }

  const customId = `searchbar-input-${onValue}`

  return (
    <SearchBarContainer
      widthvalue={width || `100%`}
      heightvalue={height || `100%`}
      borderColor={borderColor || `grey`}
      onClick={() => document.getElementById(customId)?.focus()}
    >
      <Input
        readOnly={isReadOnly}
        type="text"
        placeholder={placeholderValue}
        id={customId}
        value={isReadOnly ? '' : formattedValue}
        onChange={handleInputChange}
        autoComplete="off"
        padding={padding}
        fontSize={fontSize || `inherit`}
        fontWeight={fontWeight || `600`}
        border={border}
        backgroundColor={backgroundColor}
      />

      <>
        {!isReadOnly && (inputText.city || inputText.state) && isMultiSelect && (
          <div
            className="add-button"
            type="button"
            style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
            onClick={addToList}
            title="Add"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="24" height="24" rx="12" fill="#8DD3BB" />
              <path d="M12 7.49805V17.498" stroke="white" stroke-width="2.85714" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7 12.498H17" stroke="white" stroke-width="2.85714" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        )}

        {!isReadOnly && inputValues && !isMultiSelect && (
          <img className="clear" src={SVG.clear} alt="Clear" onClick={handleClear} style={{ marginLeft: '0.3rem', cursor: 'pointer' }} />
        )}
      </>
      {/* <LocationIcon src={SVG.LocationIcon} alt="Location Icon" /> */}
      {isDropdownVisible && (
        <Dropdown
          data={suggestions}
          selectSuggestion={selectSuggestion}
          setShowDropdown={setDropdownVisible}
          renderItem={(item) => (
            <>
              <City>{item.city}</City>
              <State>{item.state}</State>
            </>
          )}
        />
      )}
    </SearchBarContainer>
  )
}

export default memo(Searchbar)
