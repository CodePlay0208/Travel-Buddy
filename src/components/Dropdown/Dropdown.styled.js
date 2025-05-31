import styled from 'styled-components'
import { FlexContainer } from '../HeroSectionV2/HeroSection.styled'

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
}
export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px 0px #00000026;

  border-radius: 20px;
  z-index: 10;
`
DropdownContainer.displayName = 'DropdownContainer'

export const FlexContainerCust = styled(FlexContainer)`
  @media (max-width: ${breakpoints.tablet}) {
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 4rem;
  }
`
FlexContainerCust.displayName = 'FlexContainerCust'

export const DropdownItem = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: start;
  height: max(100%, 60px);
  font-size: inherit;
  color: #afafaf;
  background-color: #ffffff;
  border-radius: 7px;
  margin: 4% 10%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selectable ? '#f1f1f1' : '#ffffff')};
  }
`
DropdownItem.displayName = 'DropdownItem'

export const City = styled.div`
  margin: 1% 0;
  font-size: 1.25rem;
  color: #009965;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 4rem;
  }
`
City.displayName = 'City'
