import React, { useState, memo, useMemo } from 'react'
import LandingPageImage from '../../data/Images/searchResult/header.png'
import SearchMenu from '../SearchMenu/SearchMenu'
import Navbar from '../Navbar/Navbar'
import { InputValuesContext } from '../../Utils/Context/InputValuesContext'

import {
  HeaderContainer,
  LandingHeader,
  LandingImage,
  HeaderSearchBar,
  HeaderDescription,
  HeaderDesHeading,
  HeaderDesPara,
} from '../../Styles/SearchResultHeader.styles'

const SearchResultHeader = (props) => {
  const [inputValues, setInputValues] = useState({
    destination: '',
    startDate: '',
  })

  const memocontext = useMemo(() => ({ inputValues, setInputValues }), [inputValues])

  return (
    <HeaderContainer>
      {props.isImageNavbar && <Navbar isImageNavbar={props.isImageNavbar} />}

      <LandingHeader>
        <LandingImage src={LandingPageImage} alt="Landing Page" />
      </LandingHeader>

      <HeaderDescription>
        <HeaderDesHeading>Travmigoz</HeaderDesHeading>
        <HeaderDesPara>Find Your Travel Amigos!</HeaderDesPara>
      </HeaderDescription>

      <InputValuesContext.Provider value={memocontext}>
        <HeaderSearchBar>
          <SearchMenu />
        </HeaderSearchBar>
      </InputValuesContext.Provider>
    </HeaderContainer>
  )
}

export default memo(SearchResultHeader)
