import { useState } from 'react'

import dayjs from 'dayjs'

import { createArray } from '../../utils'
import { ChevronButton } from '../button/ChevronButton'

import './datePicker.css'

const now = dayjs()

export const DatePicker = () => {
  const [date, setDate] = useState(now)
  const [days, setDays] = useState(now.daysInMonth())

  // const nextYear = () => {
  //   setDate((currentDate) => {
  //     const newDate = currentDate.add(1, 'year')
  //     setDays(newDate.daysInMonth())
  //     return newDate
  //   })
  // }

  // const prevYear = () => {
  //   setDate((currentDate) => {
  //     const newDate = currentDate.subtract(1, 'year')
  //     setDays(newDate.daysInMonth())
  //     return newDate
  //   })
  // }

  const handleChangeMonth = (day: number) => {
    setDate((currentDate) => {
      const newDate = currentDate.date(day)
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

  console.log(date.startOf('M'))
  return (
    <>
      <div>
        <div>{date.format('DD/MM/YYYY')}</div>
        <div>days: {days}</div>
        <div>days: {weekdaysShort[date.day()]}</div>
        <div>days: {}</div>
      </div>

      <div className='datePicker'>
        <div className='datePicker__header'>
          <div className='datePicker__header__month'>
            <ChevronButton
              left
              onClick={prevMonth}
            />
            <span>{`${monthsShort[date.month()]} ${date.year()}`}</span>
            <ChevronButton onClick={nextMonth} />
          </div>
        </div>

        <div className='datePicker__content'>
          <div className='datePicker__content__container'>
            {weekdaysShort.map((day) => (
              <Days
                key={day}
                day={day}
              />
            ))}
          </div>
          <div className='datePicker__content__container'>
            {createArray(days).map((day) => (
              <Days
                key={day}
                day={day}
                onClick={() => handleChangeMonth(day)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const Days = ({
  day,
  onClick
}: {
  day: string | number
  onClick?: () => void
}) => {
  return (
    <button
      onClick={onClick}
      key={day}
      className='datePicker__content__container__day'>
      {day}
    </button>
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
