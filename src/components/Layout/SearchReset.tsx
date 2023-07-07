import { memo } from 'react'
import { RiCloseFill } from 'react-icons/ri'

type ResetProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const SearchReset = ({ onClick }: ResetProps) => {

  return (
    <>
      <button
        onClick={onClick}
        className={`flex absolute inset-y-0 right-0 items-center pr-3 text-slate-400`}
      >
        <RiCloseFill/>
      </button>
    </>
  )
}
export default memo(SearchReset)