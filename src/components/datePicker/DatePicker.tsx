import { useState } from 'react'

import dayjs from 'dayjs'

import { createArray } from '../../utils'

const now = dayjs()

const weekdaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

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
    <div>
      <div>
        <button onClick={() => prevYear()}>back</button>
        <span>Year: {date.year()}</span>
        <button onClick={() => nextYear()}>forward</button>
      </div>
      <div>
        <button onClick={() => prevMonth()}>back</button>
        <span>Month: {date.month()}</span>
        <button onClick={() => nextMonth()}>forward</button>
      </div>
      <div>days: {days}</div>
      <div>days: {weekdaysShort[date.day()]}</div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, minmax(2rem, 2rem))'
        }}>
        {createArray(days).map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
    </div>
  )
}
