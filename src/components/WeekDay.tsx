type Props = { weekDay: string }

export const WeekDay: React.FC<Props> = ({ weekDay }) => {
  return (
    <div className='flex items-center justify-center h-6 w-6 text-stone-600'>
      {weekDay}
    </div>
  )
}
