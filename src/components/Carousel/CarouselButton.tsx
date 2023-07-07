import { memo } from 'react'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'

type TProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  className: string,
  isPrev: boolean
}

const CarouselButton = ({ onClick, isPrev }: TProps) => {
  
  return (
    <button
      className={`absolute z-10 top-1/2 -translate-y-1/2 w-10 h-3/4 text-cyan-500 hover:text-cyan-300 bg-transparent hover:neon-shadow-soft duration-200 ${isPrev ? 'left-0 rounded-r-lg' : 'right-0 rounded-l-lg'}`}
      onClick={onClick}
    >
      <div className='flex items-center justify-center text-7xl'>
        {isPrev ? <RiArrowLeftSLine /> : <RiArrowRightSLine />}
      </div>
    </button>
  )
}
export default memo(CarouselButton)