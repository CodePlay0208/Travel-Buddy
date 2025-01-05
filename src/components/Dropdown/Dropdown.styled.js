import styled from 'styled-components'

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
  padding: 2% 0px;
  @media (max-width: ${breakpoints.tablet}) {
    border-radius: 15px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 5px;
  }
`

export const DropdownItem = styled.div`
  padding: 1%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: start;
  height: max(100%, 60px);
  font-size: inherit;
  color: #afafaf;
  background-color: #ffffff;
  border-radius: 7px;
  margin: 1% 5%;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
  @media (max-width: ${breakpoints.tablet}) {
    border-radius: 5px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 1px;
  }
`
