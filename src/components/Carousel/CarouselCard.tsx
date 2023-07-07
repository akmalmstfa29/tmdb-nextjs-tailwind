import Image from 'next/image';
import { truncateString } from '@/utils/helpers';
import { IMAGE_BASE_URL, THUMB_SIZE } from '@/config'
import { SelectMovie } from '@/types/Movie'
import { memo } from 'react';

type TCardProps = {
  movie: SelectMovie,
  onClick?: () => void,
}

const CarouselCard = ({movie, onClick}: TCardProps) => {

  return (
    <div
      key={movie.id}
      className="flex flex-col items-center justify-center animate-fadeIn"
      onClick={onClick ? onClick : undefined}
    >
      <Image
        placeholder='blur'
        blurDataURL='/images/placeholder.png'
        width={342}
        height={513}
        src={movie.posterPath
          ? IMAGE_BASE_URL + THUMB_SIZE + movie.posterPath
          : '/images/missing-image.png' }
        alt='movie'
        priority={true}
        className='rounded-md bg-brand-900 cursor-pointer'
      />
      <div className='text-white text-xs py-2 font-semibold'>
        {truncateString(movie.title, 24)}
      </div>
    </div>
  )
}
export default memo(CarouselCard)