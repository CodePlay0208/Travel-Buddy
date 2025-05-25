import React from 'react'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  --color-primary: #8dd3bb;
  cursor: pointer;
  .big-circle {
    fill: black;
    stroke: #000000;
    transition: fill 0.2s, stroke 0.2s;
  }
  .small-circle {
    fill: transparent;
    stroke: #8dd3bb;
    stroke-width: 2;
    transition: fill 0.2s, stroke 0.2s;
  }
  .search-path {
    stroke: #8dd3bb;
    stroke-width: 2;
    stroke-linecap: round;
    transition: stroke 0.2s;
  }
  &:hover .big-circle {
    fill: var(--color-primary);
    stroke: var(--color-primary);
  }
  &:hover .small-circle {
    fill: var(--color-primary);
    stroke: black;
  }
  &:hover .search-path {
    stroke: black;
  }
`

const SearchIcon = (props) => (
  <StyledSVG viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle className="big-circle" cx="31" cy="31" r="30.5" />
    <circle className="small-circle" cx="29.625" cy="29.625" r="9.625" />
    <path className="search-path" d="M42 42L37.875 37.875" />
  </StyledSVG>
)

export default SearchIcon
