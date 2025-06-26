import React from 'react'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  cursor: pointer;
  transition: stroke 0.5s;
`

const PhoneCircleIcon = ({ color = 'black', hoverColor = 'red', ...props }) => {
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
          d="M75.8322 65.0702V71.8202C75.8348 72.4468 75.7064 73.0671 75.4554 73.6413C75.2044 74.2154 74.8362 74.7308 74.3744 75.1544C73.9127 75.578 73.3675 75.9006 72.7739 76.1013C72.1803 76.3021 71.5513 76.3766 70.9272 76.3202C64.0036 75.5679 57.353 73.202 51.5097 69.4127C46.0734 65.9582 41.4643 61.3491 38.0097 55.9127C34.2072 50.0429 31.8408 43.36 31.1022 36.4052C31.046 35.783 31.12 35.1559 31.3194 34.5639C31.5188 33.9718 31.8393 33.4278 32.2605 32.9664C32.6817 32.505 33.1943 32.1363 33.7658 31.8839C34.3372 31.6315 34.955 31.5008 35.5797 31.5002H42.3297C43.4217 31.4895 44.4803 31.8761 45.3082 32.5882C46.1361 33.3002 46.6769 34.289 46.8297 35.3702C47.1146 37.5304 47.643 39.6514 48.4047 41.6927C48.7075 42.498 48.773 43.3733 48.5935 44.2147C48.4141 45.0561 47.9972 45.8285 47.3922 46.4402L44.5347 49.2977C47.7377 54.9307 52.4018 59.5947 58.0347 62.7977L60.8922 59.9402C61.504 59.3353 62.2763 58.9184 63.1178 58.7389C63.9592 58.5595 64.8344 58.625 65.6397 58.9277C67.6811 59.6895 69.8021 60.2178 71.9622 60.5027C73.0552 60.6569 74.0534 61.2074 74.7669 62.0496C75.4805 62.8917 75.8596 63.9668 75.8322 65.0702Z"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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

export default PhoneCircleIcon
