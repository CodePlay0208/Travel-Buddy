import React, { useState, useEffect, useRef } from 'react'
import { DatePickerWrapper, Calendar, CalendarHeader, NavButton, DayNames, Days, TodayButton } from '../../styles/DatePicker.styled'
import { Input } from '../../styles/Global'

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const DatePicker = (props) => {
  const { inputValues, setInputValues, placeholderValue, pickerType = 'default' } = props

  const today = new Date()
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const oneYearLater = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
  const hundredYearsAgo = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate())

  const minDate = pickerType === 'dob' ? hundredYearsAgo : todayMidnight
  const maxDate = pickerType === 'dob' ? todayMidnight : oneYearLater

  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(inputValues)
  const [showCalendar, setShowCalendar] = useState(false)

  const wrapperRef = useRef(null)
  const dateInputRef = useRef(null)
  const calendarRef = useRef(null)

  useEffect(() => {
    setSelectedDate(dateToDisplayString(inputValues))
  }, [inputValues])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowCalendar(false)

        if (!selectedDate && showCalendar && event.target.tagName !== 'INPUT') {
          handleTodayClick()
        }
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [selectedDate, showCalendar])

  const parseDateString = (dateString) => {
    if (!dateString) return null
    const [day, month, year] = dateString.split('-').map(Number)
    return new Date(year, month - 1, day)
  }

  const dateToSimpleString = (date) => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
  }

  const dateToDisplayString = (dateString) => {
    if (!dateString) return ''
    const dateValue = parseDateString(dateString)
    if (!dateValue) return ''

    if (pickerType === 'default') {
      const tomorrow = new Date(todayMidnight)
      tomorrow.setDate(tomorrow.getDate() + 1)

      if (dateValue.toDateString() === todayMidnight.toDateString()) {
        return 'Today'
      } else if (dateValue.toDateString() === tomorrow.toDateString()) {
        return 'Tomorrow'
      }
    }
    return formatFullDate(dateValue)
  }

  const formatFullDate = (date) => {
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  const populateDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate()

    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<span key={`empty-${i}`} className="empty-day" />)
    }
    for (let dayNum = 1; dayNum <= lastDateOfMonth; dayNum++) {
      const date = new Date(year, month, dayNum)
      const isDisabled = date < minDate || date > maxDate
      days.push(
        <span
          key={dayNum}
          className={`day ${selectedDate === dateToSimpleString(date) ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
          onClick={!isDisabled ? () => handleDateSelect(date) : null}
        >
          {dayNum}
        </span>,
      )
    }
    return days
  }

  const handleDateSelect = (date) => {
    const simpleDate = dateToSimpleString(date)
    setInputValues(simpleDate)
    setSelectedDate(dateToDisplayString(simpleDate))
    setShowCalendar(false)
  }

  const handlePrevMonth = () => {
    const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    const minMonthDate = new Date(minDate.getFullYear(), minDate.getMonth(), 1)
    if (prevMonthDate >= minMonthDate) {
      setCurrentDate(prevMonthDate)
    }
  }

  const handleNextMonth = () => {
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    const maxMonthDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1)
    if (nextMonthDate <= maxMonthDate) {
      setCurrentDate(nextMonthDate)
    }
  }

  const handleTodayClick = () => {
    if (todayMidnight >= minDate && todayMidnight <= maxDate) {
      const simpleDate = dateToSimpleString(todayMidnight)
      setInputValues(simpleDate)
      setSelectedDate(dateToDisplayString(simpleDate))
      setCurrentDate(todayMidnight)
      setShowCalendar(false)
    }
  }

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value, 10)
    const newDate = new Date(currentDate.getFullYear(), newMonth, 1)
    if (newDate >= minDate && newDate <= maxDate) {
      setCurrentDate(newDate)
    } else {
      if (newDate < minDate) setCurrentDate(minDate)
      if (newDate > maxDate) setCurrentDate(maxDate)
    }
  }

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value, 10)
    const newDate = new Date(newYear, currentDate.getMonth(), 1)
    if (newDate >= minDate && newDate <= maxDate) {
      setCurrentDate(newDate)
    } else {
      if (newDate < minDate) setCurrentDate(minDate)
      if (newDate > maxDate) setCurrentDate(maxDate)
    }
  }

  const getDobYearOptions = () => {
    const startYear = minDate.getFullYear()
    const endYear = maxDate.getFullYear()
    const years = []
    for (let y = endYear; y >= startYear; y--) {
      years.push(y)
    }
    return years
  }

  return (
    <DatePickerWrapper ref={wrapperRef} widthValue={props.width || '100%'} heightValue={props.height || '100%'}>
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

      {showCalendar && (
        <Calendar ref={calendarRef}>
          {pickerType === 'dob' ? (
            <CalendarHeader>
              <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-around' }}>
                <select
                  value={currentDate.getMonth()}
                  onChange={handleMonthChange}
                  style={{
                    backgroundColor: '#8dd3bb',
                    border: 'none',
                    color: 'black',
                    padding: '2% 10%',
                    borderRadius: '4px',
                    fontSize: 'min(2.5vw, 16px)',
                  }}
                >
                  {monthNames.map((mn, idx) => (
                    <option key={mn} value={idx}>
                      {mn}
                    </option>
                  ))}
                </select>

                <select
                  value={currentDate.getFullYear()}
                  onChange={handleYearChange}
                  style={{
                    backgroundColor: '#8dd3bb',
                    border: 'none',
                    color: 'black',
                    padding: '2% 10%',
                    borderRadius: '4px',
                    fontSize: 'min(2.5vw, 16px)',
                  }}
                >
                  {getDobYearOptions().map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </CalendarHeader>
          ) : (
            <CalendarHeader>
              <NavButton
                className={
                  new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1) <
                  new Date(minDate.getFullYear(), minDate.getMonth(), 1)
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
                className={
                  new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1) >
                  new Date(maxDate.getFullYear(), maxDate.getMonth(), 1)
                    ? 'disabled'
                    : ''
                }
                onClick={handleNextMonth}
              >
                <div className="svgIcon">&gt;</div>
              </NavButton>
            </CalendarHeader>
          )}

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
