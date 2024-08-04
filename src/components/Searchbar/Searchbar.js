import React, { useState, memo } from 'react'
import './Searchbar.css'
import { SVG } from '../../assets'
import axios from 'axios'
import { getLocationSuggestions } from '../../actions/location.action'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  suggestions: state.location.suggestions
})

const Searchbar = (props) => {
  const { suggestions, getLocationSuggestions, inputValues, setInputValues, onValue, placeholderValue } = props
  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const searchBarChangeHandler = async (event) => {
    const value = event.target.value
    setInputValues((currentInputValues) => ({
      ...currentInputValues,
      [onValue]: value,
    }))

    if (value.length > 2) {
      try {
        const suggestionSuccess = await getLocationSuggestions(value)
        setDropdownVisible(true)
      } catch (error) {
        console.error('Error fetching location suggestions:', error)
      }
    } else {
      setDropdownVisible(false)
    }
  }
  const selectSuggestion = (suggestion) => {
    setInputValues((currentInputValues) => ({
      ...currentInputValues,
      [onValue]: `${suggestion.city}, ${suggestion.state}`,
    }))

    setTimeout(() => setDropdownVisible(false), 0)
  }

  const customId = `searchbar-input-${onValue}`

  return (
    <div
      className="SearchBar-DestinationContainer"
      onClick={() => {
        document.getElementById(`searchbar-input-${onValue}`).focus()
      }}
    >
      <input
        type="text"
        className="SearchBar-location"
        placeholder={placeholderValue}
        id={customId}
        value={inputValues}
        onChange={searchBarChangeHandler}
        autoComplete="off"
      />
      <div className="SearchBar-Image">
        <img src={SVG.LocationIcon} className="locationIcon" alt="Location Icon" />
      </div>
      {isDropdownVisible && suggestions.length > 0 && (
        <ul className="SearchBar-Dropdown">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="SearchBar-DropdownItem" onClick={() => selectSuggestion(suggestion)}>
              {suggestion.city}, {suggestion.state}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default connect(mapStateToProps, { getLocationSuggestions })(memo(Searchbar))
