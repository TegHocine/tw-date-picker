import './button.css'

type Button = {
  onClick: () => void
  left?: boolean
}
export const ChevronButton = ({ onClick, left }: Button) => {
  return (
    <button
      onClick={onClick}
      className={`chevronButton ${left && 'left'}`}>
      <ChevronSvg />
    </button>
  )
}

const ChevronSvg = () => (
  <svg
    height={200}
    width={200}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 185.343 185.343'
    xmlSpace='preserve'
    fill='currentColor'>
    <g strokeWidth={0} />
    <g
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      fill='currentColor'
      d='M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z'
    />
  </svg>
)
