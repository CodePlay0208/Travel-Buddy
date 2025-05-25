import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`
  --color-primary: #8dd3bb;
  cursor: pointer;
  circle,
  ellipse {
    fill: #8dd3bb;
    stroke: black;
    transition: fill 0.2s, stroke 0.2s;
  }
  &:hover circle,
  &:hover ellipse {
    fill: var(--color-primary);
    stroke: var(--color-primary);
  }
`;

const ProfileIcon = (props) => (
  <StyledSVG viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Replace the content below with your actual SVG markup for ProfileIcon.svg */}
    <circle cx="30" cy="24" r="12" />
    <ellipse cx="30" cy="44" rx="18" ry="10" />
    <circle cx="30" cy="24" r="12" fill="none" strokeWidth="2" />
    <ellipse cx="30" cy="44" rx="18" ry="10" fill="none" strokeWidth="2" />
  </StyledSVG>
);

export default ProfileIcon;
