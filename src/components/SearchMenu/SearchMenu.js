import React, { memo, useState } from 'react'
import './SearchMenu.css'
import Searchbar from '../Searchbar/Searchbar'
import DatePicker from '../DatePicker/DatePicker'
import { connect } from 'react-redux'
import { getTrips } from '../../actions/trips.action'
import { useNavigate } from 'react-router-dom'

const DEFAULT_SEARCH_FORM = {
  destination: '',
  startDate: ''
}

const mapStateToProps = (state) => ({
  trips: state.trip.trips
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
    <div className="SearchBar-Container">
      <Searchbar
        inputValues={searchForm.destination}
        setInputValues={setSearchForm}
        onValue={'destination'}
        placeholderValue={'Enter Destination'}
      />
      <DatePicker
        inputValues={searchForm.startDate}
        setInputValues={setSearchForm}
        onValue={'startDate'}
        placeholderValue={'Select Travel date'}
      />
      <div className="SearchBar-Searchbutton" role='button' onClick={onSearchButton}>
        <div className="SearchBar-button">Search</div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, { getTrips })(memo(SearchMenu))
