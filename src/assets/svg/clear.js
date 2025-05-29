import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`
  cursor: pointer;
  transition: stroke 0.5s;
`;

const ClearIcon = ({ color = 'black', hoverColor = 'red', ...props }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const strokeColor = isHovered ? hoverColor : color;

  return (
    <StyledSVG
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <path d="M11 1L1 11" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 1L11 11" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </StyledSVG>
  );
};

export default ClearIcon;
