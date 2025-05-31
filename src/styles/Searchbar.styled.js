import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  border: none;
  border-radius: 10px;
  width: ${(props) => props.widthvalue};
  height: ${(props) => props.heightvalue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: visible;

  .clear {
    position: absolute;
    right: 0;
    padding: 2.5%;
    bottom: 50%;
    transform: translateY(50%);
  }
  @media (max-width: 786px) {
    border-radius: 3px;
  }
`

export const SearchBarInput = styled.input`
  position: relative;
  border-radius: inherit;
  font-style: normal;
  line-height: 2.5rem;
  height: 100%;
  color: #686868;
  padding-left: 5%;
  width: 90%;
  font-family: Arial, sans-serif;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border: none;
  outline: none;
`

export const LocationIcon = styled.img`
  width: min(100%, 34px);
  height: min(100%, 30px);
  cursor: pointer;
`

export const DropdownSC = styled.div`
  position: absolute;
  top: 100%;
  left: 5%;
  width: 90%;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px 0px #00000026;

  border-radius: 0px 0px 27px 27px;
  z-index: 10;
  padding: 2% 0px;
  overflow: visible;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(-10px)')};
  pointer-events: ${(props) => (props.isVisible ? 'auto' : 'none')};
  @media (max-width: 768px) {
    border-radius: 0px 0px 15x 15px;
  }
  @media (max-width: 480px) {
    border-radius: 0px 0px 5px 5px;
  }
`

export const DropdownItem = styled.div`
  padding: 1%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  height: max(100%, 60px);
  font-size: ${(props) => props.dropDownFontSize};
  color: #1b1717;
  background-color: #ffffff;
  border-radius: 7px;
  margin: 1% 5%;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
  @media (max-width: 768px) {
    border-radius: 7.5px;
  }
  @media (max-width: 480px) {
    border-radius: 2.5px;
  }
`

export const City = styled.div`
  width: 100%;
  color: #009965;
`
export const State = styled.div`
  color: #afafaf;
`
