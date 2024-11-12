import React, { useState, memo } from 'react'
import { SVG } from '../../assets'
import { getLocationSuggestions } from '../../actions/location.action'
import { connect } from 'react-redux'
import { SearchBarContainer, SearchBarInput, LocationIcon, Dropdown, DropdownItem } from '../../styles/Searchbar.styled'

const mapStateToProps = (state) => ({
  suggestions: state.locationReducer.suggestions,
})

const Searchbar = (props) => {
  const { suggestions, getLocationSuggestions, inputValues, setInputValues, onValue, placeholderValue } = props
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  const searchBarChangeHandler = (event) => {
    const value = event.target.value
    setInputValues(value)

    // Clear the previous timeout if the user is still typing
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    // Set a new timeout
    const newTimeoutId = setTimeout(async () => {
      if (value.length > 2 && value.length < 25) {
        try {
          await getLocationSuggestions(value)
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

  const selectSuggestion = (suggestion) => {
    setInputValues(`${suggestion.city}, ${suggestion.state}`)
    setTimeout(() => setDropdownVisible(false), 0)
  }

  const customId = `searchbar-input-${onValue}`

  return (
    <SearchBarContainer
      widthValue={props.width ? props.width : `100%`}
      heightValue={props.height ? props.height : `100%`}
      borderColor={props.borderColor ? props.borderColor : `grey`}
      onClick={() => {
        document.getElementById(customId).focus()
      }}
    >
      <SearchBarInput
        type="text"
        placeholder={placeholderValue}
        id={customId}
        value={inputValues}
        onChange={searchBarChangeHandler}
        autoComplete="off"
        fontSize={props.fontSize ? props.fontSize : `inherit`}
        fontWeight={props.fontWeight ? props.fontWeight : `600`}
      />
      <LocationIcon src={SVG.LocationIcon} alt="Location Icon" />
      <Dropdown isVisible={isDropdownVisible}>
          {suggestions.map((suggestion, index) => (
            <DropdownItem key={index} dropDownFontSize={props.dropDownFontSize} onClick={() => selectSuggestion(suggestion)}>
              {suggestion.city}, {suggestion.state}
            </DropdownItem>
          ))}
        </Dropdown>
    </SearchBarContainer>
  )
}

export default connect(mapStateToProps, { getLocationSuggestions })(memo(Searchbar))
