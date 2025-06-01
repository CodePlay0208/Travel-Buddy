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
  HeaderContainer,
} from '../../styles/DatePicker.styled'
import { Input } from '../../styles/Global'
import { SVG } from '../../assets'

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
  const {
    inputValues,
    setInputValues,
    selectedWeekdays,
    setSelectedWeekdays,
    placeholderValue,
    pickerType = 'default',
    maxDates,
    showOnlyCalendar,
    weekdaySelectionWeeks = 12,
  } = props

  const multiSelect = maxDates && maxDates > 1

  const today = new Date()
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const oneYearLater = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
  const hundredYearsAgo = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate())

  const minDate = pickerType === 'dob' ? hundredYearsAgo : todayMidnight
  const maxDate = pickerType === 'dob' ? todayMidnight : oneYearLater

  const [currentDate, setCurrentDate] = useState(new Date())

  const [selectedDates, setSelectedDates] = useState(multiSelect && Array.isArray(inputValues) ? inputValues : [])
  const [selectedDate, setSelectedDate] = useState(multiSelect ? '' : inputValues)

  const [showCalendar, setShowCalendar] = useState(showOnlyCalendar || false)
  const [currentView, setCurrentView] = useState('days')

  const wrapperRef = useRef(null)
  const dateInputRef = useRef(null)
  const calendarRef = useRef(null)

  useEffect(() => {
    if (multiSelect) {
      setSelectedDates(Array.isArray(inputValues) ? inputValues : [])
    } else {
      setSelectedDate(dateToDisplayString(inputValues))
    }
  }, [inputValues, multiSelect])

  const parseDateString = (dateString) => {
    if (!dateString) return null
    if (typeof dateString === 'object' && dateString instanceof Date) {
      return dateString
    }
    const [day, month, year] = dateString.split('-').map(Number)
    return new Date(year, month - 1, day)
  }

  const sortDateStrings = (arr) => {
    return arr
      .map((s) => parseDateString(s))
      .sort((d1, d2) => d1 - d2)
      .map((d) => dateToSimpleString(d))
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (!showOnlyCalendar) {
          setShowCalendar(false)
          if (!selectedDate && !multiSelect && showCalendar && event.target.tagName !== 'INPUT') {
            handleTodayClick()
          }
        }
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [selectedDate, showCalendar, multiSelect, showOnlyCalendar])

  const generateDatesForWeekday = (weekdayIndex) => {
    const dates = []
    const start = new Date(todayMidnight)
    const end = new Date(todayMidnight)
    end.setDate(end.getDate() + weekdaySelectionWeeks * 7)

    const cursor = new Date(start)
    while (cursor <= end) {
      if (cursor.getDay() === weekdayIndex) {
        dates.push(new Date(cursor))
      }
      cursor.setDate(cursor.getDate() + 1)
    }
    return dates
  }

  const handleWeekdayClick = (weekdayIndex) => {
    if (!showOnlyCalendar) return

    let newSelectedWeekdays
    let newDates = [...selectedDates]

    if (selectedWeekdays.includes(weekdayIndex)) {
      newSelectedWeekdays = selectedWeekdays.filter((w) => w !== weekdayIndex)

      const toRemove = generateDatesForWeekday(weekdayIndex).map((d) => dateToSimpleString(d))

      newDates = newDates.filter((s) => !toRemove.includes(s))

      newDates = sortDateStrings(newDates)
    } else {
      newSelectedWeekdays = [...selectedWeekdays, weekdayIndex]

      const toAdd = generateDatesForWeekday(weekdayIndex).map((d) => dateToSimpleString(d))

      toAdd.forEach((s) => {
        if (!newDates.includes(s)) {
          newDates.push(s)
        }
      })

      newDates = sortDateStrings(newDates)
    }

    setSelectedWeekdays(newSelectedWeekdays)

    setSelectedDates(newDates)

    setInputValues(newDates)
  }

  const populateDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate()
    const days = []
    const prevMonthLastDate = new Date(year, month, 0).getDate()

    for (let i = 0; i < firstDayOfMonth; i++) {
      const dayNum = prevMonthLastDate - firstDayOfMonth + i + 1
      days.push(
        <span key={`prev-${dayNum}`} className="disabled" style={{ color: 'lightgray' }}>
          {dayNum}
        </span>,
      )
    }

    for (let dayNum = 1; dayNum <= lastDateOfMonth; dayNum++) {
      const date = new Date(year, month, dayNum)
      const simple = dateToSimpleString(date)
      const isDisabled = date < minDate || date > maxDate
      const isSelected = multiSelect ? selectedDates.includes(simple) : selectedDate === simple

      days.push(
        <span
          key={dayNum}
          className={`day ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
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
    if (multiSelect) {
      let newDates
      if (selectedDates.includes(simpleDate)) {
        newDates = selectedDates.filter((d) => d !== simpleDate)
      } else {
        if (maxDates && selectedDates.length >= maxDates) {
          return
        }
        newDates = [...selectedDates, simpleDate]
      }
      newDates = sortDateStrings(newDates)
      setSelectedDates(newDates)
      setInputValues(newDates)
    } else {
      setInputValues(simpleDate)
      setSelectedDate(dateToDisplayString(simpleDate))
      if (!showOnlyCalendar) {
        setShowCalendar(false)
      }
      setCurrentView('days')
    }
  }

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
                  e.stopPropagation()
                  setCurrentDate(new Date(currentDate.getFullYear(), idx, 1))
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
                  e.stopPropagation()
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
      if (multiSelect) {
        let newDates = [...selectedDates]
        if (!newDates.includes(simpleDate)) {
          if (!maxDates || newDates.length < maxDates) {
            newDates.push(simpleDate)
          }
        }
        newDates = sortDateStrings(newDates)
        setSelectedDates(newDates)
        setInputValues(newDates)
      } else {
        setInputValues(simpleDate)
        setSelectedDate(dateToDisplayString(simpleDate))
        setCurrentDate(todayMidnight)
        if (!showOnlyCalendar) {
          setShowCalendar(false)
        }
        setCurrentView('days')
      }
    }
  }

  const handleClear = () => {
    if (multiSelect) {
      setSelectedDates([])
      setInputValues([])
    } else {
      setSelectedDate('')
      setInputValues('')
    }
  }

  const displayValue = multiSelect ? selectedDates.map((d) => dateToDisplayString(d)).join(', ') : selectedDate

  return (
    <DatePickerWrapper ref={wrapperRef} widthvalue={props.width || '100%'} heightvalue={props.height || '100%'}>
      {!showOnlyCalendar && (
        <>
          <Input
            type="text"
            ref={dateInputRef}
            value={displayValue}
            placeholder={placeholderValue}
            readOnly
            onClick={() => setShowCalendar((prev) => !prev)}
            className="SearchBar-date"
            border={props?.border}
            backgroundColor={props?.backgroundColor}
            fontSize={props?.fontSize}
            padding={props.padding}
          />
          {displayValue && <img className="clear" src={SVG.clear} alt="Clear" onClick={handleClear} />}
        </>
      )}

      {(showOnlyCalendar || showCalendar) && (
        <Calendar ref={calendarRef} className={showOnlyCalendar ? 'showOnlyCalendar' : ''}>
          <CalendarHeader>
            <NavButton onClick={handlePrev}>
              <img className="svgIcon" src={SVG.leftArrow} alt="" />
            </NavButton>
            <HeaderContainer className="header-label" onClick={handleHeaderClick}>
              {currentView === 'days' && `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
              {currentView === 'months' && `${currentDate.getFullYear()}`}
              {currentView === 'years' &&
                `${Math.floor(currentDate.getFullYear() / 10) * 10} - ${Math.floor(currentDate.getFullYear() / 10) * 10 + 9}`}
              <img className="svgIcon" src={SVG.downArrow} alt="" />
            </HeaderContainer>
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
                      {['Su', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                        <span
                          key={day}
                          onClick={() => handleWeekdayClick(idx)}
                          style={{
                            cursor: showOnlyCalendar ? 'pointer' : 'default',
                            backgroundColor: selectedWeekdays?.includes(idx) ? '#8DD3BB' : 'black',
                            color: selectedWeekdays?.includes(idx) ? 'black' : '#8DD3BB',
                          }}
                        >
                          {day}
                        </span>
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
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                    <span
                      key={day}
                      onClick={() => handleWeekdayClick(idx)}
                      style={{
                        cursor: showOnlyCalendar ? 'pointer' : 'default',
                        backgroundColor: selectedWeekdays.includes(idx) ? '#D3E3FC' : 'transparent',
                      }}
                    >
                      {day}
                    </span>
                  ))}
                </DayNames>
                <Days>{populateDays()}</Days>
              </>
            )}
          </div>
        </Calendar>
      )}
    </DatePickerWrapper>
  )
}

export default DatePicker
DatePicker.displayName = 'DatePicker'
