import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  border: ${(props) => props.borderColor} 2px solid;
  border-radius: 10px;
  width: ${(props) => props.widthValue};
  height: ${(props) => props.heightValue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const SearchBarInput = styled.input`
  border-radius: inherit;
  font-style: normal;
  line-height: 2.5rem;
  color: #686868;
  padding-left: 5%;
  width: 90%;
  font-family: Arial, sans-serif;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border: none;
  outline: none;

  &::placeholder {
    font-family: Arial, sans-serif;
    font-weight: ${(props) => props.fontWeight};
    color: #787878;
  }
`

export const LocationIcon = styled.img`
  width: 34px;
  height: 30px;
  cursor: pointer;
`

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 10.74px 42.97px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 26.86px 26.86px;
  z-index: 10;
  padding: 2% 0px;
  overflow: hidden;
`

export const DropdownItem = styled.div`
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 60px;
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
