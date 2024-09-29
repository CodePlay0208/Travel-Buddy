import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Searchbar from '../Searchbar/Searchbar'
import DatePicker from '../DatePicker/DatePicker'
import { getTrips } from '../../actions/trips.action'
import { SearchBarContainer, SearchButtonContainer, SearchButton } from '../../Styles/SearchMenu.styled'

const DEFAULT_SEARCH_FORM = {
  destination: '',
  startDate: '',
}

const mapStateToProps = (state) => ({
  trips: state.trip.trips,
})

const SearchMenu = (props) => {
  const { getTrips } = props
  const [searchForm, setSearchForm] = useState(DEFAULT_SEARCH_FORM)
  const navigate = useNavigate()

  const onSearchButton = async () => {
    const searchSuccess = await getTrips(searchForm)
    if (searchSuccess) {
      navigate('/search-results-page')
    }
  }

  return (
    <SearchBarContainer>
      <Searchbar
        inputValues={searchForm.destination}
        setInputValues={setSearchForm}
        onValue={'destination'}
        placeholderValue={'Enter Destination'}
        width={`30%`}
      />
      <DatePicker
        inputValues={searchForm.startDate}
        setInputValues={setSearchForm}
        onValue={'startDate'}
        placeholderValue={'Select Travel date'}
        width={`30%`}
      />
      <SearchButtonContainer onClick={onSearchButton} role="button">
        <SearchButton>Search</SearchButton>
      </SearchButtonContainer>
    </SearchBarContainer>
  )
}

export default connect(mapStateToProps, { getTrips })(memo(SearchMenu))
