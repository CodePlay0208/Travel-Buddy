import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'
import DatePicker from '../DatePicker/DatePicker'
import { SearchBarContainer, SearchButtonContainer, SearchButton, SearchBarWrapper } from '../../styles/SearchMenu.styled'
import { SVG } from '../../assets'
import { Label, VerticalDivider } from '../../styles/Global'
import { FlexContainer } from '../HeroSectionV2/HeroSection.styled'
import SearchIcon from '../../assets/svg/SearchIcon'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchForm } from '../../store/slices/trips-slice'

const SearchMenu = () => {
  const { searchForm } = useSelector((state) => state.tripReducer)
  const dispatch = useDispatch()
  const [currForm, setCurrForm] = React.useState({
    destination: searchForm.destination || '',
    startDate: searchForm.startDate || '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    setCurrForm({
      destination: searchForm.destination || '',
      startDate: searchForm.startDate || '',
    })
  }, [searchForm])
  const handleInputChange = (field, value) => {
    setCurrForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }))
  }

  const onSearchButton = async (field, value) => {
    dispatch(setSearchForm(currForm))
    navigate('/trips')
  }

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <FlexContainer direction="column" width="100%" gap="0px" alignItems="start" style={{ overflowX: 'unset' }}>
          <FlexContainer direction="column" width="100%" gap="0px" margin="3.5% 0 0" alignItems="start" style={{ overflowX: 'unset' }}>
            <Label margin="0 2.5%" fontWeight="700">
              Where?
            </Label>
            <Searchbar
              inputValues={currForm.destination}
              setInputValues={(value) => handleInputChange('destination', value)}
              onValue={'destination'}
              placeholderValue={'Your Destination'}
              fontSize={`1.5rem`}
              fontWeight={`600`}
              dropDownFontSize={'100%'}
              border={'1px solid #ffffff'}
              backgroundColor={'#ffffff'}
              padding={`2.5% 2.5% 2.5%`}
            />
          </FlexContainer>
        </FlexContainer>
        <VerticalDivider />
        <FlexContainer direction="column" width="100%" gap="0px" alignItems="start" style={{ overflowX: 'unset' }}>
          <FlexContainer direction="column" width="100%" gap="0px" margin="3.5% 0 0" alignItems="start" style={{ overflowX: 'unset' }}>
            <Label margin="0 2.5%" fontWeight="700">
              When?
            </Label>
            <DatePicker
              inputValues={currForm.startDate}
              setInputValues={(value) => handleInputChange('startDate', value)}
              onValue={'startDate'}
              placeholderValue={'Your Departure Date'}
              fontSize={`1.5rem`}
              fontWeight={`600`}
              border={'1px solid #ffffff'}
              backgroundColor={'#ffffff'}
              padding={`2.5% 2.5% 2.5%`}
            />
          </FlexContainer>
        </FlexContainer>
      </SearchBarWrapper>
      <SearchButtonContainer onClick={onSearchButton} role="button">
        <SearchIcon />
      </SearchButtonContainer>
    </SearchBarContainer>
  )
}

SearchMenu.displayName = 'SearchMenu'

export default memo(SearchMenu)
