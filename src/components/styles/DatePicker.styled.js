import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 30%;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 20px;
  font-weight: 400;
  color: #787878;
  border: grey 1.5px solid;
  border-radius: 10px;
  line-height: 2.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s;
  &:focus {
    border-color: #007bff;
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
  animation: fadeIn 0.2s;
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
  color: #007bff;
  font-weight: bold;
  transition: color 0.2s;
  display: flex;
  align-items: center;

  &:hover:not(.disabled) {
    color: #0056b3;
  }

  &.disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const CalendarBody = styled.div`
  padding: 20px;
`;

export const DayNames = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  span {
    width: 40px;
    text-align: center;
    font-weight: 600;
    color: #6c757d;
  }
`;

export const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  grid-gap: 5px;
  justify-content: space-between;

  .day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    border-radius: 8px;

    &:hover:not(.disabled) {
      background-color: #e9ecef;
    }

    &.selected {
      background-color: #007bff;
      color: white;
    }

    &.disabled {
      cursor: not-allowed;
      color: #ccc;
    }
  }

  .empty-day {
    visibility: hidden;
  }
`;

export const TodayButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-top: 1px solid #ccc;

  button {
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-weight: 600;
    transition: color 0.2s;

    &:hover {
      color: #0056b3;
    }
  }
`;
