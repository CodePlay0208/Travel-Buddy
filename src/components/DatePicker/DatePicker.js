import React, { useState, useEffect, useRef } from 'react'
import {
  DatePickerWrapper,
  Calendar,
  CalendarHeader,
  NavButton,
  DayNames,
  Days,
  TodayButton,
  Months,
  Years,
} from '../../styles/DatePicker.styled'
import { Input } from '../../styles/Global'
import { SVG } from '../../assets'

// Abbreviated and full month names
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const fullMonthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const DatePicker = (props) => {
  const { inputValues, setInputValues, placeholderValue, pickerType = 'default' } = props

  const today = new Date()
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const oneYearLater = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
  const hundredYearsAgo = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate())

  // For DOB: allow selection from 100 years ago up to today.
  // For default: allow from today to one year later.
  const minDate = pickerType === 'dob' ? hundredYearsAgo : todayMidnight
  const maxDate = pickerType === 'dob' ? todayMidnight : oneYearLater

  // currentDate controls what month/year is shown.
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(inputValues)
  const [showCalendar, setShowCalendar] = useState(false)
  // For DOB mode we use view states: "days", "months", "years"
  const [currentView, setCurrentView] = useState(pickerType === 'dob' ? 'days' : 'days')

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

  // Helpers to parse and format dates
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

  // ------------------- DAYS VIEW (Date Grid) -------------------
  const populateDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate()
    const days = []

    // Empty slots before the first day
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<span key={`empty-${i}`} className="empty-day" />)
    }
    // Actual days of the month
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
    // Reset view for the next time the calendar opens
    setCurrentView('days')
  }

  // ------------------- MONTHS VIEW -------------------
  const populateMonths = () => {
    return fullMonthNames.map((month, idx) => {
      const testDate = new Date(currentDate.getFullYear(), idx, 1)
      const isDisabled = testDate < minDate || testDate > maxDate
      return (
        <span
          key={month}
          className={`month ${currentDate.getMonth() === idx ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
          onClick={
            !isDisabled
              ? (e) => {
                  e.stopPropagation() // Prevent the click from closing the calendar
                  setCurrentDate(new Date(currentDate.getFullYear(), idx, 1))
                  // After choosing a month, switch to days view.
                  setCurrentView('days')
                }
              : null
          }
        >
          {month.substring(0, 3)}
        </span>
      )
    })
  }

  // ------------------- YEARS VIEW -------------------
  const populateYears = () => {
    const currentYear = currentDate.getFullYear()
    const startYear = Math.floor(currentYear / 10) * 10
    const years = []
    for (let y = startYear; y < startYear + 10; y++) {
      const testDateStart = new Date(y, 0, 1)
      const testDateEnd = new Date(y, 11, 31)
      const isDisabled = testDateEnd < minDate || testDateStart > maxDate
      years.push(
        <span
          key={y}
          className={`year ${currentYear === y ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
          onClick={
            !isDisabled
              ? (e) => {
                  e.stopPropagation() // Prevent the click from collapsing the calendar
                  // After choosing a year, update currentDate and switch to month view.
                  setCurrentDate(new Date(y, currentDate.getMonth(), 1))
                  setCurrentView('months')
                }
              : null
          }
        >
          {y}
        </span>,
      )
    }
    return years
  }

  // ------------------- NAVIGATION BUTTONS -------------------
  const handlePrev = () => {
    if (pickerType === 'dob') {
      if (currentView === 'days') {
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        const minMonthDate = new Date(minDate.getFullYear(), minDate.getMonth(), 1)
        if (prevMonth >= minMonthDate) setCurrentDate(prevMonth)
      } else if (currentView === 'months') {
        const prevYear = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1)
        const minYearDate = new Date(minDate.getFullYear(), 0, 1)
        if (prevYear >= minYearDate) setCurrentDate(prevYear)
      } else if (currentView === 'years') {
        const newYear = currentDate.getFullYear() - 10
        if (newYear >= minDate.getFullYear()) setCurrentDate(new Date(newYear, currentDate.getMonth(), 1))
      }
    } else {
      const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
      const minMonthDate = new Date(minDate.getFullYear(), minDate.getMonth(), 1)
      if (prevMonth >= minMonthDate) setCurrentDate(prevMonth)
    }
  }

  const handleNext = () => {
    if (pickerType === 'dob') {
      if (currentView === 'days') {
        const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        const maxMonthDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1)
        if (nextMonth <= maxMonthDate) setCurrentDate(nextMonth)
      } else if (currentView === 'months') {
        const nextYear = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1)
        const maxYearDate = new Date(maxDate.getFullYear(), 11, 31)
        if (nextYear <= maxYearDate) setCurrentDate(nextYear)
      } else if (currentView === 'years') {
        const newYear = currentDate.getFullYear() + 10
        if (newYear <= maxDate.getFullYear()) setCurrentDate(new Date(newYear, currentDate.getMonth(), 1))
      }
    } else {
      const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
      const maxMonthDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1)
      if (nextMonth <= maxMonthDate) setCurrentDate(nextMonth)
    }
  }

  const handleHeaderClick = (e) => {
    e.stopPropagation()

    if (currentView === 'days') {
      setCurrentView('months')
    } else if (currentView === 'months') {
      setCurrentView('years')
    } else if (currentView === 'years') {
      setCurrentView('months')
    }
  }

  const handleTodayClick = () => {
    if (todayMidnight >= minDate && todayMidnight <= maxDate) {
      const simpleDate = dateToSimpleString(todayMidnight)
      setInputValues(simpleDate)
      setSelectedDate(dateToDisplayString(simpleDate))
      setCurrentDate(todayMidnight)
      setShowCalendar(false)
      setCurrentView('days')
    }
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
        padding={props.padding}
      />
      {showCalendar && (
        <Calendar ref={calendarRef}>
          <CalendarHeader>
            <NavButton onClick={handlePrev}>
              <img className="svgIcon" src={SVG.leftArrow} alt="" />
            </NavButton>
            <div className="header-label" onClick={handleHeaderClick} style={{ cursor: 'pointer', fontSize: '0.65vw' }}>
              {currentView === 'days' && `${fullMonthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}

              {currentView === 'months' && `${currentDate.getFullYear()}`}
              {currentView === 'years' &&
                `${Math.floor(currentDate.getFullYear() / 10) * 10} - ${Math.floor(currentDate.getFullYear() / 10) * 10 + 9}`}
              <img className="svgIcon" src={SVG.downArrow} alt="" />
            </div>
            <NavButton onClick={handleNext}>
              <img className="svgIcon" src={SVG.rightArrow} alt="" />
            </NavButton>
          </CalendarHeader>
          <div className="calendar-body">
            {pickerType ? (
              <>
                {currentView === 'days' && (
                  <>
                    <DayNames>
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </DayNames>
                    <Days>{populateDays()}</Days>
                  </>
                )}
                {currentView === 'months' && <Months className="month-grid">{populateMonths()}</Months>}
                {currentView === 'years' && <Years className="year-grid">{populateYears()}</Years>}
              </>
            ) : (
              <>
                <DayNames>
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </DayNames>
                <Days>{populateDays()}</Days>
              </>
            )}
          </div>
          {/* {pickerType !== 'dob' && (
            <TodayButton onClick={handleTodayClick}>
              <button>Today</button>
            </TodayButton>
          )} */}
        </Calendar>
      )}
    </DatePickerWrapper>
  )
}

export default DatePicker
