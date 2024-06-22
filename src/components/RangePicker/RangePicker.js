import React, { useState } from 'react';
import DatePicker from '../DatePicker/DatePicker';
import './RangePicker.css';

const DateRangePicker = ({setInputValues , inputValues}) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (new Date(date) > new Date(endDate)) {
      setEndDate('');
    }
  };

  const handleEndDateChange = (date) => {
    if (new Date(date) >= new Date(startDate)) {
      setEndDate(date);
    }
  };

  return (
    <div className="date-range-picker">
      <div className="date-picker-wrapper">
        <label>Start Date:</label>
        <DatePicker inputValues={inputValues.startDate} setInputValues={setInputValues} onValue={'startDate'} placeholderValue={"Start Date"}/>
      </div>
      <div className="date-picker-wrapper">
        <label>End Date:</label>
        <DatePicker inputValues={inputValues.endDate} setInputValues={setInputValues} onValue={'endDate'} placeholderValue={"End Date"}/>
      </div>
    </div>
  );
};

export default DateRangePicker;
