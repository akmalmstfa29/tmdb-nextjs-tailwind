import Image from 'next/image';
import Link from 'next/link';
// Helpers
import { truncateString } from '@/utils/helpers';
import { RiStarFill } from 'react-icons/ri'
import { memo } from 'react';

type Props = {
  imgUrl: string;
  title: string
  text: string,
  tagline: string,
  releaseDate: string,
  id: number,
  rating: number
}


const Hero = ({ imgUrl, title, text, id, rating }: Props) => {
  return (
    <div className='relative'>

      <Image
        priority={true}
        objectFit='cover'
        objectPosition='center'
        layout='fill'
        src={imgUrl}
        alt={title}
        className='absolute inset-0 w-full h-full object-cover -z-10 animate-fadeIn'
        placeholder='blur'
        blurDataURL='/assets/images/placeholder.png'
      />
      
      {/* Overlay */}
      <div className='absolute w-full h-full bg-gradient-to-t from-[#010404] via-transparent to-transparent' />
      <div className='absolute overflow-hidden inset-0 m-0 p-0 w-full h-full bg-gradient-to-r from-[#010404] via-transparent to-transparent' />

      <div className="relative">
        <div className="px-4 pt-96 pb-56 mx-auto md:px-6 lg:px-8">
          <div className="flex items-center justify-between md:flex-row">

            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h1 className="max-w-lg text-2xl md:text-3xl lg:text-4xl font-bold text-white text-shadow-md">
                {title}
              </h1>
              <div className='my-4 flex items-center gap-4'>
                <div className='flex items-center gap-2 border font-bold rounded bg-white text-black py-2 px-5'>
                  <RiStarFill />{rating.toFixed(2)}
                </div>
                <Link href={`/movies/${id}`}>
                  <button
                    className='rounded text-white py-2 px-5 hover:text-neutral-300 bg-neutral-500/50 duration-200'
                  >
                    See Details
                  </button>
                </Link>
                </div>
                <p className='w-full text-gray-200 text-shadow-lg'>
                  {truncateString(text, 107)}
                </p>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(Hero)