import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Searchbar from '../Searchbar/Searchbar'
import DatePicker from '../DatePicker/DatePicker'
import { SearchBarContainer, SearchButtonContainer, SearchButton } from '../../styles/SearchMenu.styled'
import { setSearchForm } from '../../actions/trips.action'
import { SVG } from '../../assets'

const mapStateToProps = (state) => ({
  searchForm: state.tripReducer.searchForm
})

const SearchMenu = (props) => {
  const { searchForm, setSearchForm } = props
  const navigate = useNavigate()

  const handleInputChange = (field, value) => {
    setSearchForm({ 
      ...searchForm,
      [field]: value 
    })
  }

  const onSearchButton = async () => {
    navigate('/search-results-page')
  }

  return (
    <SearchBarContainer>
      <Searchbar
        inputValues={searchForm.destination}
        setInputValues={(value) => handleInputChange('destination', value)}
        onValue={'destination'}
        placeholderValue={'Enter Destination'}
        fontSize={`1.7vw`}
        fontWeight={`600`}
        dropDownFontSize={'45%'}
      />
      <DatePicker
        inputValues={searchForm.startDate}
        setInputValues={(value) => handleInputChange('startDate', value)}
        onValue={'startDate'}
        placeholderValue={'Select Travel date'}
        fontSize={`1.7vw`}
        fontWeight={`600`}
      />
      <SearchButtonContainer onClick={onSearchButton} role="button">
        <img src={SVG.searchIcon} alt="searchIcon" />
      </SearchButtonContainer>
    </SearchBarContainer>
  )
}

export default connect(mapStateToProps, { setSearchForm })(memo(SearchMenu))
