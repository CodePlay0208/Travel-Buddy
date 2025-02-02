import React, { useState, useEffect, useRef } from 'react'
import {
  DatePickerWrapper,
  InputWrapper,
  Calendar,
  CalendarHeader,
  NavButton,
  DayNames,
  Days,
  TodayButton,
} from '../../styles/DatePicker.styled'

import { SVG } from '../../assets'
import { Input } from '../../styles/Global'

const DatePicker = (props) => {
  const { inputValues, setInputValues, onValue, placeholderValue } = props
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
    if (!dateString) return ''
    const [day, month, year] = dateString.split('-').map(Number)
    return new Date(year, month - 1, day)
  }

  const formatDate = (date) => {
    if (!date) return ''
    const options = { weekday: 'short', day: 'numeric', month: 'short' }
    const parts = date.toLocaleDateString('en-US', options).split(' ')
    return `${parts[0]} ${parts[2]} ${parts[1]}`
  }

  const dateToString = (dateString) => {
    if (!dateString || dateString === '') {
      return ''
    }
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)

    const dateValue = parseDatestring(dateString)

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
    setInputValues(dateString)
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
    setInputValues(dateToStringSimple(new Date()))
    setShowCalendar(false)
  }
  return (
    <DatePickerWrapper widthValue={props.width ? props.width : `100%`} heightValue={props.height ? props.height : `100%`}>
      <Input
        type="text"
        ref={dateInputRef}
        value={selectedDate}
        placeholder={placeholderValue}
        readOnly
        onClick={() => setShowCalendar(!showCalendar)}
        className="SearchBar-date"
        border={props?.border}
        backgroundColor={props?.backgroundColor}
        fontSize={props?.fontSize}
      />
      {/* <img src={SVG.CalendarIcon} alt="Calender Icon" /> */}

      {showCalendar && (
        <Calendar ref={calendarRef}>
          <CalendarHeader>
            <NavButton
              className={
                new Date(currentDate.getFullYear(), currentDate.getMonth() - 1) < new Date(today.getFullYear(), today.getMonth(), 1)
                  ? 'disabled'
                  : ''
              }
              onClick={handlePrevMonth}
            >
              <div className="svgIcon">&lt;</div>
            </NavButton>
            <span id="month-year">
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </span>
            <NavButton
              className={new Date(currentDate.getFullYear(), currentDate.getMonth() + 1) > oneYearLater ? 'disabled' : ''}
              onClick={handleNextMonth}
            >
              <div className="svgIcon">&gt;</div>
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
        </Calendar>
      )}
    </DatePickerWrapper>
  )
}

export default DatePicker
