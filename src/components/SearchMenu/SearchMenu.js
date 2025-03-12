import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Searchbar from '../Searchbar/Searchbar'
import DatePicker from '../DatePicker/DatePicker'
import { SearchBarContainer, SearchButtonContainer, SearchButton, SearchBarWrapper } from '../../styles/SearchMenu.styled'
import { setSearchForm } from '../../actions/trips.action'
import { SVG } from '../../assets'
import { Label, VerticalDivider } from '../../styles/Global'
import { FlexContainer } from '../HeroSectionV2/HeroSection.styled'

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
        <FlexContainer direction="column" width="100%" gap="0px" alignItems="start">
          <FlexContainer direction="column" width="100%" gap="0px" margin="3.5% 0 0" alignItems="start">
            <Label margin="0 2.5%">Where</Label>
            <Searchbar
              inputValues={searchForm.destination}
              setInputValues={(value) => handleInputChange('destination', value)}
              onValue={'destination'}
              placeholderValue={'Your Destination'}
              fontSize={`1.75rem`}
              fontWeight={`600`}
              dropDownFontSize={'100%'}
              border={'1px solid #ffffff'}
              backgroundColor={'#ffffff'}
              padding={`2.5% 2.5% 2.5%`}
            />
          </FlexContainer>
        </FlexContainer>
        <VerticalDivider />
        <FlexContainer direction="column" width="100%" gap="0px" alignItems="start">
          <FlexContainer direction="column" width="100%" gap="0px" margin="3.5% 0 0" alignItems="start">
            <Label margin="0 2.5%">When</Label>
            <DatePicker
              inputValues={searchForm.startDate}
              setInputValues={(value) => handleInputChange('startDate', value)}
              onValue={'startDate'}
              placeholderValue={'Your Arrival & Departure'}
              fontSize={`1.75rem`}
              fontWeight={`600`}
              border={'1px solid #ffffff'}
              backgroundColor={'#ffffff'}
              padding={`2.5% 2.5% 2.5%`}
            />
          </FlexContainer>
        </FlexContainer>
      </SearchBarWrapper>
      <SearchButtonContainer onClick={onSearchButton} role="button">
        <img src={SVG.searchIcon} alt="searchIcon" />
      </SearchButtonContainer>
    </SearchBarContainer>
  )
}

export default connect(mapStateToProps, { setSearchForm })(memo(SearchMenu))
