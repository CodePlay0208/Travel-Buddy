import React from 'react'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  cursor: pointer;
  transition: stroke 0.5s;
`

const MailCircleIcon = ({ color = 'black', hoverColor = 'red', ...props }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const strokeColor = isHovered ? hoverColor : color

  return (
    <StyledSVG
      width="44"
      height="44"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <rect width="86" height="86" rx="43" transform="matrix(1 0 0 -1 10 97)" fill="#FAFAFA" />
        <path
          d="M35.332 36H71.332C73.807 36 75.832 38.025 75.832 40.5V67.5C75.832 69.975 73.807 72 71.332 72H35.332C32.857 72 30.832 69.975 30.832 67.5V40.5C30.832 38.025 32.857 36 35.332 36Z"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M75.832 40.5L53.332 56.25L30.832 40.5" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="2" dy="1" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </StyledSVG>
  )
}

export default MailCircleIcon
