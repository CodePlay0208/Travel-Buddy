import React from 'react'
import styled from 'styled-components'

const StyledSVG = styled.svg`
  cursor: pointer;
  transition: fill 0.5s;
`

const InfoIcon = ({ color = 'black', hoverColor = 'black', ...props }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const fillColor = isHovered ? hoverColor : color

  return (
    <StyledSVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <path
        d="M9.16602 5.83268H10.8327V7.49935H9.16602V5.83268ZM9.16602 9.16602H10.8327V14.166H9.16602V9.16602ZM9.99935 1.66602C5.39935 1.66602 1.66602 5.39935 1.66602 9.99935C1.66602 14.5993 5.39935 18.3327 9.99935 18.3327C14.5993 18.3327 18.3327 14.5993 18.3327 9.99935C18.3327 5.39935 14.5993 1.66602 9.99935 1.66602ZM9.99935 16.666C6.32435 16.666 3.33268 13.6743 3.33268 9.99935C3.33268 6.32435 6.32435 3.33268 9.99935 3.33268C13.6743 3.33268 16.666 6.32435 16.666 9.99935C16.666 13.6743 13.6743 16.666 9.99935 16.666Z"
        fill={fillColor}
      />
    </StyledSVG>
  )
}

export default InfoIcon
