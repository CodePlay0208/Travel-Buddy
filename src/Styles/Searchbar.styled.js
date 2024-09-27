import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  border: grey 1.5px solid;
  border-radius: 10px;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const SearchBarInput = styled.input`
  font-style: normal;
  line-height: 2.5rem;
  color: #686868;
  padding-left: 5%;
  width: 70%;
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  outline: none;

  &::placeholder {
    font-family: Arial, sans-serif;
    font-weight: 600;
    color: #787878;
  }
`

export const LocationIcon = styled.img`
  width: 34px;
  height: 41px;
  cursor: pointer;
`

export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 10.74px 42.97px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 26.86px 26.86px;
  z-index: 10;
  overflow: hidden;
`

export const DropdownItem = styled.li`
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 23px;
  color: #1b1717;
  background-color: #b6f0dc;
  border-radius: 13.43px;
  margin: 5px 24px;
  cursor: pointer;

  &:hover {
    background-color: #a1a1a1;
  }
`
