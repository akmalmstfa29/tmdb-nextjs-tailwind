import { useState, useEffect, useCallback, memo } from 'react'
import Link from 'next/link'
import SearchInput from './SearchInput'
import Image from 'next/image';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false)

  const scroll = useCallback(() => {
    if (window.scrollY > 200) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', scroll)
    }
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [scroll])

  return (
    <div className={`flex flex-col md:flex-row gap-2 items-center justify-between p-4 z-[100] w-full fixed duration-1000 top-0 ${hasScrolled ? 'bg-brand-900' : 'bg-transparent gradient-transparency'}`}>

      <Link href='/'>
        <Image width='100' height='20' src='/images/tmdb.svg' alt='tmdb logo' />
      </Link>
      <SearchInput />
        
    </div>

  )
};

export default memo(Header);