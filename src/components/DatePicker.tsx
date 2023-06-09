import { useState } from 'react'

import dayjs from 'dayjs'

import { createArray, leftPadArray } from '../utils'
import { ChevronButton } from './ChevronButton'
import { WeekDay } from './WeekDay'
import { Day } from './Day'

const now = dayjs()

export const DatePicker = () => {
  const [date, setDate] = useState(now)
  const [days, setDays] = useState(now.daysInMonth())
  const [show, setShow] = useState(false)

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

  const firstDay = date.startOf('month').day()
  return (
    <>
      <div className='relative mb-3 w-fit'>
        <input
          type='text'
          className='border text-xs border-stone-300 rounded-md bg-stone-50 placeholder:text-stone-700 py-1 px-2 flex justify-center items-center w-full peer'
          placeholder='Select date'
          onClick={() => setShow((curr) => !curr)}
          value={date.format('DD/MM/YYYY')}
        />
        <div
          className={`bg-stone-100 text-stone-950 rounded-md p-2 text-xs font-medium border border-stone-200 shadow-md h-fit w-fit overflow-hidden absolute ${
            show ? 'block' : 'hidden'
          }`}>
          <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center gap-2'>
              <ChevronButton
                left
                onClick={prevMonth}
              />
              <span>{`${monthsShort[date.month()]} ${date.year()}`}</span>
              <ChevronButton onClick={nextMonth} />
            </div>
          </div>
          <div className='h-[calc(1.5rem*7)] w-full'>
            <div className='grid grid-cols-week'>
              {weekdaysShort.map((weekDay, index) => (
                <WeekDay
                  key={`${weekDay}${index}`}
                  weekDay={weekDay}
                />
              ))}
            </div>
            <div className='grid grid-cols-week'>
              {leftPadArray(createArray(days), firstDay).map((day, index) => (
                <Day
                  key={`${day}${index}`}
                  day={day}
                  isActive={date.date() === day}
                  onClick={() => handleChangeMonth(day)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>{date.format('DD/MM/YYYY')}</div>
        <div>days: {days}</div>
        <div>days: {weekdaysShort[date.day()]}</div>
        <div>days: {firstDay}</div>
      </div>
    </>
  )
}

const weekdaysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

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
