import React, { useState, useEffect, useRef } from 'react';
import './DatePicker.css';

const DatePicker = ({ inputValues, setInputValues, onValue }) => {
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
      [onValue]: formattedDate,
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

        <svg className="calendar-icon" viewBox="0 0 24 24" ><g color="neutralIconDefault"><g color="currentColor"><path fill="currentColor" fill-rule="evenodd" d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2.5h10A2.5 2.5 0 0 1 19.5 7v.75h-15V7A2.5 2.5 0 0 1 7 4.5m12.5 4.75V17a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 17V9.25z" clip-rule="evenodd"></path><path fill="currentColor" d="M8.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8.5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path></g></g></svg>
      </div>
      {showCalendar && (
        <div className="calendar" ref={calendarRef}>
          <div className="calendar-header">
            <span className={`nav-button ${new Date(currentDate.getFullYear(), currentDate.getMonth() - 1) < new Date(today.getFullYear(), today.getMonth(), 1) ? 'disabled' : ''}`} onClick={handlePrevMonth}>
              <div className='svgIcon' style={{position:"absolute",left:'18px'}}>
                <svg viewBox="0 0 24 24" ><g color="currentColor"><g color="currentColor"><path fill="currentColor" fill-rule="evenodd" d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0" clip-rule="evenodd"></path></g></g></svg>
              </div>
            </span>
            <span id="month-year">
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}

            </span>
            <span className={`nav-button ${new Date(currentDate.getFullYear(), currentDate.getMonth() + 1) > oneYearLater ? 'disabled' : ''}`} onClick={handleNextMonth}>
              <div className='svgIcon' style={{position:"absolute",right:'0'}}>

                <svg viewBox="0 0 24 24" ><g color="currentColor"><g color="currentColor"><path fill="currentColor" fill-rule="evenodd" d="M13.293 18.293a1 1 0 0 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 1 0-1.414 1.414L18.586 11H3a1 1 0 1 0 0 2h15.586z" clip-rule="evenodd"></path></g></g></svg>
              </div>
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
