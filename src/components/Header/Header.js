import React, { memo } from 'react'
import LandingPageImage from '../../data/Images/searchResult/header.png'
import SearchMenu from '../SearchMenu/SearchMenu'
import Navbar from '../Navbar/Navbar'

import {
  HeaderContainer,
  LandingHeader,
  LandingImage,
  HeaderSearchBar,
  HeaderDescription,
  HeaderDesHeading,
  HeaderDesPara,
} from '../../styles/SearchResultHeader.styles'

const SearchResultHeader = (props) => {
  return (
    <>
      <Navbar />
      <HeaderContainer>
        <LandingHeader>
          <HeaderDescription>
            <HeaderDesHeading>Travmigoz</HeaderDesHeading>
            <HeaderDesPara>Find Your Travel Amigos!</HeaderDesPara>
          </HeaderDescription>

          <HeaderSearchBar>
            <SearchMenu />
          </HeaderSearchBar>
        </LandingHeader>
      </HeaderContainer>
    </>
  )
}

export default memo(SearchResultHeader)
