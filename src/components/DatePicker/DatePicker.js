import React, { useState, useEffect, useRef } from 'react'
import './DatePicker.css'
import { SVG } from '../../assets'
import {
  DatePickerWrapper,
  InputWrapper,
  DatePickerInput,
  CalendarIcon,
  CalendarWrapper,
  CalendarHeader,
  NavButton,
  MonthYear,
  DayNames,
  Days,
  TodayButton,
  SvgIcon,
} from '../styles/DatePicker.styled'

const DatePicker = ({ inputValues, setInputValues, onValue, placeholderValue }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(inputValues)
  const [showCalendar, setShowCalendar] = useState(false)
  const dateInputRef = useRef(null)
  const calendarRef = useRef(null)

  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const oneYearLater = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())

  useEffect(() => {
    console.log(inputValues)
    setSelectedDate(dateToString(inputValues))
  }, [inputValues])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        dateInputRef.current &&
        !dateInputRef.current.contains(event.target)
      ) {
        setShowCalendar(false)
        if (!selectedDate) {
          handleTodayClick()
        }
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [selectedDate])

  const populateDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const lastDate = new Date(year, month + 1, 0).getDate()

    const days = []
    for (let i = 0; i < firstDay; i++) {
      days.push(<span key={`empty-${i}`} className="empty-day" />)
    }

    for (let i = 1; i <= lastDate; i++) {
      const date = new Date(year, month, i)
      const isPastDate = date < new Date(today.setHours(0, 0, 0, 0))
      const isFutureDate = date > oneYearLater

      days.push(
        <span
          key={i}
          className={`day ${selectedDate === dateToStringSimple(date) ? 'selected' : ''} ${isPastDate || isFutureDate ? 'disabled' : ''}`}
          onClick={!isPastDate && !isFutureDate ? () => handleDateSelect(date) : null}
        >
          {i}
        </span>,
      )
    }

    return days
  }

  const parseDatestring = (dateString) => {
    const [day, month, year] = dateString.split('-').map(Number)
    return new Date(year, month - 1, day) // Months are zero-indexed
  }

  const dateToString = (dateString) => {
    if (dateString === '') {
      return ''
    }
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)

    const dateValue = parseDatestring(dateString)
    console.log(dateString)
    console.log(dateValue)

    const formatDate = (date) => {
      const options = { weekday: 'short', day: 'numeric', month: 'short' }
      const parts = date.toLocaleDateString('en-US', options).split(' ')
      console.log(parts)
      return `${parts[0]} ${parts[2]} ${parts[1]}`
    }
    if (dateValue.toDateString() === today.toDateString()) {
      return 'Today'
    } else if (dateValue.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow'
    } else {
      const dayName = dateValue.toLocaleDateString('en-US', { weekday: 'long' }) // Get the day name
      const formattedDate = dateToStringSimple(dateValue)
      return formatDate(dateValue)
    }
  }

  const dateToStringSimple = (date) => {
    const dateValue = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const day = String(dateValue.getDate()).padStart(2, '0')
    const month = String(dateValue.getMonth() + 1).padStart(2, '0') // Months are zero-indexed
    const year = dateValue.getFullYear()

    return `${day}-${month}-${year}`
  }

  const handleDateSelect = (date) => {
    const dateString = dateToStringSimple(date)

    setInputValues((currentInputValues) => ({
      ...currentInputValues,
      [onValue]: dateString,
    }))
    setShowCalendar(false)
  }

  const handlePrevMonth = () => {
    const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    if (prevMonthDate >= new Date(today.getFullYear(), today.getMonth(), 1)) {
      setCurrentDate(prevMonthDate)
    }
  }

  const handleNextMonth = () => {
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    if (nextMonthDate <= oneYearLater) {
      setCurrentDate(nextMonthDate)
    }
  }

  const handleTodayClick = () => {
    setSelectedDate('Today')
    setCurrentDate(new Date())
    setInputValues((currentInputValues) => ({
      ...currentInputValues,
      [onValue]: dateToStringSimple(new Date()),
    }))
    setShowCalendar(false)
  }
  return (
    <DatePickerWrapper>
      <InputWrapper>
        <DatePickerInput
          type="text"
          ref={dateInputRef}
          value={selectedDate}
          placeholder={placeholderValue}
          readOnly
          onClick={() => setShowCalendar(!showCalendar)}
          className="SearchBar-date"
        />
        <CalendarIcon src={SVG.CalenderIcon} alt="Calender Icon" />
      </InputWrapper>
      {showCalendar && (
        <CalendarWrapper ref={calendarRef}>
          <CalendarHeader>
            <NavButton
              disabled={
                new Date(currentDate.getFullYear(), currentDate.getMonth() - 1) < new Date(today.getFullYear(), today.getMonth(), 1)
              }
              onClick={handlePrevMonth}
            >
              <SvgIcon>
                <svg viewBox="0 0 24 24">
                  <g color="currentColor">
                    <path
                      fill="currentColor"
                      d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0"
                    />
                  </g>
                </svg>
              </SvgIcon>
            </NavButton>
            <MonthYear>
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </MonthYear>
            <NavButton disabled={new Date(currentDate.getFullYear(), currentDate.getMonth() + 1) > oneYearLater} onClick={handleNextMonth}>
              <SvgIcon>
                <svg viewBox="0 0 24 24">
                  <g color="currentColor">
                    <path
                      fill="currentColor"
                      d="M13.293 18.293a1 1 0 0 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 1 0-1.414 1.414L18.586 11H3a1 1 0 1 0 0 2h15.586z"
                    />
                  </g>
                </svg>
              </SvgIcon>
            </NavButton>
          </CalendarHeader>
          <div className="calendar-body">
            <DayNames>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </DayNames>
            <Days>{populateDays()}</Days>
          </div>
          <TodayButton onClick={handleTodayClick}>
            <button>Today</button>
          </TodayButton>
        </CalendarWrapper>
      )}
    </DatePickerWrapper>
  )
}

export default DatePicker
