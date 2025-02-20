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
  .clear{
    position: absolute;
    right: 0;
    padding:2.5%;
    bottom: 25%;
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
  max-width: 300px;
  aspect-ratio: 1;
  padding: 16px;
  left: 0;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0px 4px 10px 0px #00000026;
  z-index: 1000;
  margin: 1% 0;
  animation: fadeIn 0.2s;

  width: 100%;
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
  padding: 0 2% 4%;
  background-color: #ffffff;
  border-radius: 25px 25px 0 0;
  color: #8dd3bb;
  font-weight: 600;

  span {
    color: #8dd3bb;
    font-weight: 600;
  }
  .svgIcon {
    padding: 2px;
    font-size: min(3vw, 32px);
    color: #797b86;
  }
  .svgIcon:hover {
    color: #8dd3bb;
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
`

export const DayNames = styled.div`
  display: flex;
  padding: 2%;
  font-size: min(2vw, 11px);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14.28%;
    aspect-ratio: 1;
    text-align: center;
    padding: 2%;
    font-weight: bold;
    color: #333;
  }
`

export const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2.5px;
  font-size: min(2.5vw, 16px);
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14.28%;
    aspect-ratio: 1;
    text-align: center;
    padding: 2%;
    cursor: pointer;
    border-radius: 8px;
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

export const Months = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: min(2.5vw, 16px);
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    aspect-ratio: 8/5;
    text-align: center;
    padding: 2%;
    cursor: pointer;
    border-radius: 8px;
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
export const Years = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: min(2.5vw, 16px);
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    aspect-ratio: 8/5;
    text-align: center;
    padding: 2%;
    cursor: pointer;
    border-radius: 8px;
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
