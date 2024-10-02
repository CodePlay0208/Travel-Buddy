import styled from 'styled-components'

export const DatePickerWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  height: ${(props) => props.heightValue};
  width: ${(props) => props.widthValue};

  input {
    height: 100%;
    width: 100%;
  }

  .SearchBar-date::-webkit-input-placeholder {
    color: #787878;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    font-family: Arial, sans-serif;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 1% 5%;
    cursor: pointer;
    transition: border-color 0.2s;
    border-radius: 10px;
    font-family: Arial, sans-serif;
    color: #787878;
    border: 2px solid ${(props) => props.borderColor};
    line-height: 2.5rem;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
  }

  input:focus {
    outline: none;
  }

  img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 34px;
    height: 30px;
    pointer-events: none;
  }
`

export const Calendar = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  width: 370px;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin: 20px 0;
  animation: fadeIn 0.2s;
  font-size: 16px;

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
  padding: 30px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ccc;
  border-radius: 25px 25px 0 0;
`

export const NavButton = styled.span`
  position: relative;
  cursor: pointer;
  color: #007bff;
  font-weight: bold;
  transition: color 0.2s;
  display: flex;
  align-items: center;

  &.disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(.disabled) {
    color: #0056b3;
  }

  .svgIcon {
    width: 35px;
    height: 30px;
  }
`

export const DayNames = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  span {
    width: 14.28%;
    text-align: center;
    padding: 10px 0;
    font-weight: bold;
    color: #333;
  }
`

export const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  span {
    width: 14.28%;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    border-radius: 4px;
    transition:
      background-color 0.2s,
      color 0.2s;

    &:hover:not(.disabled) {
      background-color: #f1f1f1;
    }

    &.selected {
      background-color: #53a2f6;
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
    padding: 13px 36px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
      background-color: #0056b3;
    }
  }
`
