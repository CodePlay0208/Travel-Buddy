import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const DatePickerWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 30%;

  input {
    height: 100%;
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const DatePickerInput = styled.input`
  width: 100%;
  padding: 20px;
  cursor: pointer;
  transition: border-color 0.2s;
  border-radius: 10px;
  font-weight: 600;
  font-family: Arial, sans-serif;
  color: #787878;
  border: 1.5px solid grey;
  line-height: 2.5rem;
  font-size: 1.5rem;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

export const CalendarIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  width: 34px;
  height: 41px;
  cursor: pointer;
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  width: 370px;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: ${fadeIn} 0.2s;
  font-size: 16px;
  margin: 20px 0;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ccc;
  border-radius: 25px 25px 0 0;
`;

export const NavButton = styled.span`
  position: relative;
  cursor: pointer;
  color: ${props => (props.disabled ? '#ccc' : '#007BFF')};
  font-weight: bold;
  transition: color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover:not(.disabled) {
    color: #0056b3;
  }
`;

export const MonthYear = styled.span`
  font-weight: bold;
  font-size: 1.1em;
`;

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
`;

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
    transition: background-color 0.2s, color 0.2s;

    &.selected {
      background-color: #53a2f6;
      color: white;
    }

    &.disabled {
      color: #ccc;
      cursor: not-allowed;
    }

    &:hover:not(.disabled) {
      background-color: #f1f1f1;
    }
  }
`;

export const TodayButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 13px 36px;
    border: none;
    background-color: #007BFF;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const SvgIcon = styled.div`
  width: 35px;
  height: 30px;
`;
