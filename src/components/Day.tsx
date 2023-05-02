type Props = {
  day: number | string
  onClick?: () => void
  isActive?: boolean
}

export const Day: React.FC<Props> = ({ day, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      key={day}
      className={`flex items-center justify-center h-6 w-6 transition-all duration-150 rounded-full 0 hover:rounded-full ${
        isActive ? 'bg-sky-700 text-sky-100' : 'hover:bg-sky-200'
      }`}>
      {day}
    </button>
  )
}
