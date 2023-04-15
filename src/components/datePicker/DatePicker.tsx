import { useState } from 'react'

import dayjs from 'dayjs'

import { createArray } from '../../utils'
import { ChevronButton } from '../button/ChevronButton'

import './datePicker.css'

const now = dayjs()

export const DatePicker = () => {
  const [date, setDate] = useState(now)
  const [days, setDays] = useState(now.daysInMonth())

  const nextYear = () => {
    setDate((currentDate) => {
      const newDate = currentDate.add(1, 'year')
      setDays(newDate.daysInMonth())
      return newDate
    })
  }

  const prevYear = () => {
    setDate((currentDate) => {
      const newDate = currentDate.subtract(1, 'year')
      setDays(newDate.daysInMonth())
      return newDate
    })
  }

  const nextMonth = () => {
    setDate((currentDate) => {
      const newDate = currentDate.add(1, 'month')

      setDays(newDate.daysInMonth())
      return newDate
    })
  }

  const prevMonth = () => {
    setDate((currentDate) => {
      const newDate = currentDate.subtract(1, 'month')
      setDays(newDate.daysInMonth())
      return newDate
    })
  }

  return (
    <div className='datePicker'>
      <div className='datePicker__header'>
        <div className='datePicker__header__year'>
          <ChevronButton
            left
            onClick={prevYear}
          />
          <span>{date.year()}</span>
          <ChevronButton onClick={nextYear} />
        </div>
        <div className='datePicker__header__month'>
          <ChevronButton
            left
            onClick={prevMonth}
          />
          <span>{monthsShort[date.month()]}</span>
          <ChevronButton onClick={nextMonth} />
        </div>
      </div>

      <div>days: {days}</div>
      <div>days: {weekdaysShort[date.day()]}</div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, minmax(2rem, 2rem))',
          gap: '0.25rem'
        }}>
        {weekdaysShort.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div
        style={{
          display: 'grid',
          gap: '0.25rem',
          gridTemplateColumns: 'repeat(7, minmax(2rem, 2rem))'
        }}>
        {createArray(days).map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
    </div>
  )
}

const weekdaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const monthsShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
