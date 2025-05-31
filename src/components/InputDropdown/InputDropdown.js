import React, { useState, useRef, useEffect } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { Input } from '../../styles/Global'

const InputDropdown = ({
  options = [],
  value,
  onChange,
  placeholder = '',
  filterKey = 'value',
  useSuggestions = false,
  suggestions = [],
  getSuggestions = null,
  ...inputProps
}) => {
  const [inputValue, setInputValue] = useState(value || '')
  const [showDropdown, setShowDropdown] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState(options)
  const inputRef = useRef(null)

  useEffect(() => {
    setInputValue(value || '')
  }, [value])

  useEffect(() => {
    if (useSuggestions && getSuggestions && inputValue.length > 2) {
      getSuggestions(inputValue)
    } else {
      setFilteredOptions(options.filter((opt) => opt[filterKey].toLowerCase().includes(inputValue.toLowerCase())))
    }
  }, [inputValue, options, useSuggestions, getSuggestions, filterKey])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    onChange && onChange(e.target.value)
    setShowDropdown(true)
  }

  const handleSelect = (item) => {
    setInputValue(item[filterKey])
    onChange && onChange(item[filterKey])
    setShowDropdown(false)
  }

  const dropdownData = useSuggestions ? suggestions : filteredOptions

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        onFocus={() => setShowDropdown(true)}
        autoComplete="off"
        {...inputProps}
      />
      {showDropdown && <Dropdown data={dropdownData} selectSuggestion={handleSelect} setShowDropdown={setShowDropdown} />}
    </div>
  )
}

InputDropdown.displayName = 'InputDropdown'

export default InputDropdown
