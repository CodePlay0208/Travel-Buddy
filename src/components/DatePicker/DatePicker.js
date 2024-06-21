import React, { useState, useEffect, useRef } from 'react';
import './DatePicker.css';

const DatePicker = ({ inputValues, setInputValues }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(inputValues);
  const [showCalendar, setShowCalendar] = useState(false);
  const dateInputRef = useRef(null);
  const calendarRef = useRef(null);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const oneYearLater = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
  useEffect(() => {

    setSelectedDate(inputValues);
  }, [inputValues])
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        dateInputRef.current &&
        !dateInputRef.current.contains(event.target)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const populateDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<span key={`empty-${i}`} className="empty-day" />);
    }

    for (let i = 1; i <= lastDate; i++) {
      const date = new Date(year, month, i);
      const isPastDate = date < today.setHours(0, 0, 0, 0);
      const isFutureDate = date > oneYearLater;

      days.push(
        <span
          key={i}
          className={`day ${selectedDate === dateToString(date) ? 'selected' : ''} ${isPastDate || isFutureDate ? 'disabled' : ''}`}
          onClick={!isPastDate && !isFutureDate ? () => handleDateSelect(date) : null}
        >
          {i}
        </span>
      );
    }

    return days;
  };
  const dateToString = (date) => {
    console.log(date.toLocaleDateString('en-IN'));
    const dateValue = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    let formattedDate = dateValue.toISOString().split('T')[0];
    console.log(formattedDate);
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return formattedDate;
    }
  };
  const handleDateSelect = (date) => {
    const dateString = dateToString(date);
    setSelectedDate(dateString);
    const dateValue = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    let formattedDate = dateValue.toISOString().split('T')[0];
    setInputValues((currentInputValues) => ({
      ...currentInputValues,
      startDate: formattedDate,
    }));
    setShowCalendar(false);
  };

  const handlePrevMonth = () => {
    const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    if (prevMonthDate >= new Date(today.getFullYear(), today.getMonth(), 1)) {
      setCurrentDate(prevMonthDate);
    }
  };

  const handleNextMonth = () => {
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    if (nextMonthDate <= oneYearLater) {
      setCurrentDate(nextMonthDate);
    }
  };

  const handleTodayClick = () => {
    setSelectedDate('Today');
    setCurrentDate(new Date());
    setShowCalendar(false);
  };

  return (
    <div className="date-picker">
      <div className="input-wrapper">
        <input
          type="text"
          ref={dateInputRef}
          
          value={selectedDate}
          placeholder="Select date"
          readOnly
          onClick={() => setShowCalendar(!showCalendar)}
        />
        <svg className="calendar-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"></path>
        </svg>
      </div>
      {showCalendar && (
        <div className="calendar" ref={calendarRef}>
          <div className="calendar-header">
            <span className={`nav-button ${new Date(currentDate.getFullYear(), currentDate.getMonth() - 1) < new Date(today.getFullYear(), today.getMonth(), 1) ? 'disabled' : ''}`} onClick={handlePrevMonth}>
              &lt;
            </span>
            <span id="month-year">
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </span>
            <span className={`nav-button ${new Date(currentDate.getFullYear(), currentDate.getMonth() + 1) > oneYearLater ? 'disabled' : ''}`} onClick={handleNextMonth}>
              &gt;
            </span>
          </div>
          <div className="calendar-body">
            <div className="day-names">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>
            <div className="days">{populateDays()}</div>
          </div>
          <div className="calendar-footer">
            <button className="today-button" onClick={handleTodayClick}>Today</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
