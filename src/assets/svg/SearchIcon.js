import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`
  --color-primary: #8dd3bb;
  cursor: pointer;
  circle,
  line {
    stroke: #8dd3bb;
    transition: stroke 0.2s;
  }
  &:hover circle,
  &:hover line {
    stroke: var(--color-primary);
  }
`;

const SearchIcon = (props) => (
  <StyledSVG viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Replace below with your actual SVG markup for searchIcon.svg */}
    <circle cx="11" cy="11" r="7" strokeWidth="2" fill="none" />
    <line x1="16.5" y1="16.5" x2="22" y2="22" strokeWidth="2" strokeLinecap="round" />
  </StyledSVG>
);

export default SearchIcon;
