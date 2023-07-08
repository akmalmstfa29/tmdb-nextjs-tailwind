import Image from 'next/image'
import { memo } from 'react'
import { RiGithubFill } from "react-icons/ri"

const Footer = () => {

  return (
    <div className="relative w-full flex items-center justify-between text-slate-500 font-bold pb-6 px-20 pt-6">
      <a className='text-4xl' href='https://github.com/akmalmstfa' target="_blank" rel="noreferrer">
        <RiGithubFill />
      </a>
      <a href='https://www.themoviedb.org/' target="_blank" rel="noreferrer">
        <Image width='100' height='20' src='/assets/images/tmdb.svg' alt='tmdb logo' />
      </a>
    </div>
  )
}
export default memo(Footer)