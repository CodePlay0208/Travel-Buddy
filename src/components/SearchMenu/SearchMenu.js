import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Searchbar from '../Searchbar/Searchbar'
import DatePicker from '../DatePicker/DatePicker'
import { SearchBarContainer, SearchButtonContainer, SearchButton, SearchBarWrapper } from '../../styles/SearchMenu.styled'
import { setSearchForm } from '../../actions/trips.action'
import { SVG } from '../../assets'
import { VerticalDivider } from '../../styles/Global'

const mapStateToProps = (state) => ({
  searchForm: state.tripReducer.searchForm,
})

const SearchMenu = (props) => {
  const { searchForm, setSearchForm } = props
  const navigate = useNavigate()

  const handleInputChange = (field, value) => {
    setSearchForm({
      ...searchForm,
      [field]: value,
    })
  }

  const onSearchButton = async () => {
    navigate('/search-results-page')
  }

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <Searchbar
          inputValues={searchForm.destination}
          setInputValues={(value) => handleInputChange('destination', value)}
          onValue={'destination'}
          placeholderValue={'Your Destination'}
          fontSize={`1.5vw`}
          fontWeight={`600`}
          dropDownFontSize={'100%'}
          border={'1px solid #ffffff'}
          backgroundColor={'#ffffff'}
        />
        <VerticalDivider />
        <DatePicker
          inputValues={searchForm.startDate}
          setInputValues={(value) => handleInputChange('startDate', value)}
          onValue={'startDate'}
          placeholderValue={'Your Arrival & Departure'}
          fontSize={`1.5vw`}
          fontWeight={`600`}
          border={'1px solid #ffffff'}
          backgroundColor={'#ffffff'}
        />
      </SearchBarWrapper>
      <SearchButtonContainer onClick={onSearchButton} role="button">
        <img src={SVG.searchIcon} alt="searchIcon" />
      </SearchButtonContainer>
    </SearchBarContainer>
  )
}

export default connect(mapStateToProps, { setSearchForm })(memo(SearchMenu))
