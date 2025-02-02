import styled from 'styled-components'

export const DatePickerWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
  height: ${(props) => props.heightValue};
  width: ${(props) => props.widthValue};

  input {
    height: 100%;
    width: 100%;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : `white`)};
  border-color: ${(props) => props.borderColor};
  border: none;
  transition: border-color 0.2s;
  border-radius: ${(props) => props.borderRadius};
  @media (max-width: 786px) {
    border-radius: 3px;
  }
  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: ${(props) => props.padding};
    border-radius: inherit;
    cursor: pointer;
    border: none;
    font-family: Arial, sans-serif;
    color: #787878;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : `white`)};
    border-color: ${(props) => props.borderColor};
    border: ${(props) => (props.border ? props.border : `2px solid grey`)};
    line-height: 2.5rem;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
  }

  input:focus {
    outline: none;
  }
  input::placeholder {
    color: #787878;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
  }
  img {
    width: 1.75vw;
    height: 1.75vw;
    margin-right: 0.5rem;
    cursor: pointer;
    pointer-events: none;
  }
`

export const Calendar = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0px 4px 10px 0px #00000026;
  z-index: 1000;
  margin: 1% 0;
  animation: fadeIn 0.2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  background-color: #ffffff;
  border-radius: 25px 25px 0 0;
  span {
    color: #8dd3bb;
    font-weight: 600;
  }
`

export const NavButton = styled.span`
  position: relative;
  cursor: pointer;
  color: #797b86;
  font-weight: bold;
  transition: color 0.2s;
  display: flex;
  align-items: center;

  &.disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(.disabled) {
    color: #797b86;
  }

  .svgIcon {
    font-size: 2vw;
    color: #797b86;
  }
  .svgIcon:hover {
    color: #8dd3bb;
  }
`

export const DayNames = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2.5px;

  span {
    width: 14.28%;
    text-align: center;
    padding: 2.5px 0;
    font-weight: bold;
    color: #333;
  }
`

export const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2.5px;

  span {
    width: 14.28%;
    text-align: center;
    padding: 2.5px 0;
    cursor: pointer;
    border-radius: 4px;
    transition:
      background-color 0.2s,
      color 0.2s;

    &:hover:not(.disabled) {
      background-color: #8dd3bb;
    }

    &.selected {
      background-color: #8dd3bb;
      color: white;
    }

    &.disabled {
      color: #ccc;
      cursor: not-allowed;
    }
  }
`

export const TodayButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    padding: 2% 4%;
    border: none;
    background-color: #8dd3bb;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
      background-color: #7bc4aa;
    }
  }
`
