import React, { useState, memo } from 'react'
import { SVG } from '../../assets'
import { getLocationSuggestions } from '../../actions/location.action'
import { connect } from 'react-redux'
import { SearchBarContainer, SearchBarInput, LocationIcon, DropdownSC, City, State } from '../../styles/Searchbar.styled'
import { Input } from '../../styles/Global'
import { FlexContainer } from '../HeroSectionV2/HeroSection.styled'
import LineBorder from '../../styles/Line.styled'
import { DropdownItem } from '../Dropdown/Dropdown.styled'
import Dropdown from '../Dropdown/Dropdown'

const mapStateToProps = (state) => ({
  suggestions: state.locationReducer.suggestions,
})

const Searchbar = (props) => {
  const { suggestions, getLocationSuggestions, inputValues, setInputValues, onValue, placeholderValue, isReadOnly } = props
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

  const handleClear = () => {
    setInputValues('')
  }
  return (
    <SearchBarContainer
      widthvalue={props.width ? props.width : `100%`}
      heightvalue={props.height ? props.height : `100%`}
      borderColor={props.borderColor ? props.borderColor : `grey`}
      onClick={() => {
        document.getElementById(customId).focus()
      }}
    >
      <Input
        readOnly={isReadOnly}
        type="text"
        placeholder={placeholderValue}
        id={customId}
        value={inputValues}
        onChange={searchBarChangeHandler}
        autoComplete="off"
        padding={props.padding}
        fontSize={props.fontSize ? props.fontSize : `inherit`}
        fontWeight={props.fontWeight ? props.fontWeight : `600`}
        border={props?.border}
        backgroundColor={props?.backgroundColor}
      />
      {!isReadOnly && inputValues && <img className="clear" src={SVG.clear} alt="Clear" onClick={handleClear} />}
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

export default connect(mapStateToProps, { getLocationSuggestions })(memo(Searchbar))
