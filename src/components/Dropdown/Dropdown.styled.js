import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  z-index: 10;
  padding: 2% 0px;
`

export const DropdownItem = styled.div`
  padding: 3%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: inherit;
  color: #1b1717;
  background-color: #b6f0dc;
  border-radius: 10px;
  margin: 2.5% 5%;
  cursor: pointer;

  &:hover {
    background-color: #a1a1a1;
  }
`
