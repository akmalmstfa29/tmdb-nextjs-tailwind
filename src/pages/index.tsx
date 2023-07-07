import { basicFetch } from '@/api';
import { Carousel, CarouselCard, Modal } from '@/components';
import Hero from '@/components/Hero/Hero';
import { BACKDROP_SIZE, IMAGE_BASE_URL, genreUrl, movieUrl } from '@/config';
import { useModal } from '@/hooks';
import { Featured, Movie, Movies, SelectMovie } from '@/types/Movie';
import { GetStaticProps, NextPage } from 'next';

type HomeProps = {
  featuredMovie: Featured
  actionGenre: SelectMovie[]
}

const CarouselProps = {
  maxVisibleSlides: 7,
}

const Home: NextPage<HomeProps> = ({ featuredMovie, actionGenre }) => {
  const { handleToggle, isVisible, setIsVisible, activeMovie } = useModal();

  return (
    <>
      <Hero
        imgUrl={featuredMovie.backdropPath
          ? IMAGE_BASE_URL + BACKDROP_SIZE + featuredMovie.backdropPath
          : "/images/baby-yoda-32.png"}
        title={featuredMovie.title}
        text={featuredMovie.overview}
        tagline={featuredMovie.tagline}
        releaseDate={featuredMovie.releaseDate}
        id={featuredMovie.id}
        rating={featuredMovie.rating}
      />
      <div className='relative pt-10 bg-brand-900 z-30'>
        <Carousel {...CarouselProps} title='Action Movies' href="/movies/genre/28" hasLink={true}> 
          {actionGenre.map((actionMovie) => (
            <CarouselCard key={actionMovie.id} movie={actionMovie} onClick={() => handleToggle(actionMovie)} />
          ))}
        </Carousel>

        {isVisible && (
          <Modal
            isVisible={isVisible}
            onClose={() => setIsVisible(!isVisible)}
            movie={activeMovie}
          />
        )}
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  // Featured Movie
  const featuredMovies = ['453395', '299537', '181808', '181812', '122', '78', '264660']
  const movieEndpoint: string = movieUrl(featuredMovies[Math.floor(Math.random()*featuredMovies.length)]);
  const movieResp = await basicFetch<Movie>(movieEndpoint);

  const featuredMovie = {
    id: movieResp.id,
    backdropPath: movieResp.backdrop_path,
    title: movieResp.title,
    overview: movieResp.overview,
    tagline: movieResp.tagline,
    releaseDate: movieResp.release_date,
    rating: movieResp.vote_average
  }
  
  // Action Genre
  const actionGenreEndpoint: string = genreUrl('28')
  const actionGenreResp = await basicFetch<Movies>(actionGenreEndpoint)

  const actionGenre = actionGenreResp.results.map(
    (actionMovie) => {
      return {
        id: actionMovie.id,
        posterPath: actionMovie.poster_path,
        backdropPath: actionMovie.backdrop_path,
        title: actionMovie.title || actionMovie.original_title,
        releaseDate: actionMovie.release_date,
        rating: actionMovie.vote_average || null,
        synopsis: actionMovie.overview,
      }
    }
  )
  
  return {
    props: {
      featuredMovie,
      actionGenre,
    },
    revalidate: 60 * 60 * 24 // Re-build page every 24 hours
  };
};
