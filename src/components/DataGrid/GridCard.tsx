import Image from 'next/image'
import Link from 'next/link'

type Props = {
  itemId: number
  imgUrl: string
  title: string
  subtitle?: string
  routeUrl: string
};

const GridCard = ({ imgUrl, title, subtitle, itemId, routeUrl }: Props) => {
  
  return (
    <div
      className='rounded p-2 bg-black border border-slate-400 cursor-pointer hover:neon-shadow hover:opacity-80 duration-300 hover:scale-105'
    >
        <Image
          placeholder='blur'
          blurDataURL='/images/placeholder.png'
          width={375}
          height={563}
          className='rounded opacity-70'
          src={imgUrl}
          alt='thumbnail'
          priority={true}
          layout="responsive"
        />
      
      <h1 className='text-white font-bold text-center text-md truncate text-shadow-md'>{title}</h1>
      {subtitle ? <p className='text-white font-semibold text-center text-xs truncate text-shadow-md'>{subtitle}</p> : null}
    </div>
  )
}
export default GridCard