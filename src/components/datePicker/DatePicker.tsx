import { useState } from 'react'

import { createArray, getDaysInMonth } from '../../utils'
import { Button } from '../button/Button'

export const DatePicker = () => {
  const [date, setDate] = useState(new Date())
  const [days, setDays] = useState(
    getDaysInMonth(date.getFullYear(), date.getMonth())
  )

  const nextYear = () => {
    setDate((currentDate) => {
      const newDate = currentDate
      newDate.setFullYear(currentDate.getFullYear() + 1)
      setDays(getDaysInMonth(newDate.getFullYear(), newDate.getMonth()))
      return newDate
    })
  }

  return (
    <div>
      <div>
        <Button label={'back'}></Button>
        <span>Year: {date.getFullYear()}</span>
        <Button
          onClick={nextYear}
          label='forward'
        />
      </div>
      <div>days: {days}</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, minmax(2rem, 2rem))'
        }}>
        {createArray(days).map((day) => (
          <>
            <div>{day}</div>
          </>
        ))}
      </div>
    </div>
  )
}
