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
  scifiGenre: SelectMovie[]
  thrillerGenre: SelectMovie[]
  comedyGenre: SelectMovie[]
}

const CarouselProps = {
  maxVisibleSlides: 7,
}

const Home: NextPage<HomeProps> = ({ featuredMovie, actionGenre,comedyGenre,
  thrillerGenre,
  scifiGenre, }) => {
  const { handleToggle, isVisible, setIsVisible, activeMovie } = useModal();

  return (
    <>
      <Hero
        imgUrl={featuredMovie.backdropPath
          ? IMAGE_BASE_URL + BACKDROP_SIZE + featuredMovie.backdropPath
          : "/images/missing-image.png"}
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

        <Carousel {...CarouselProps} title='Comedy Movies' href="/movies/genre/35" hasLink={true}> 
          {comedyGenre.map((comedyMovie) => (
            <CarouselCard key={comedyMovie.id} movie={comedyMovie} onClick={() => handleToggle(comedyMovie)}/>
          ))}
        </Carousel>

        <Carousel {...CarouselProps} title='Thriller Movies' href="/movies/genre/53" hasLink={true}> 
          {thrillerGenre.map((thrillerMovie) => (
            <CarouselCard key={thrillerMovie.id} movie={thrillerMovie} onClick={() => handleToggle(thrillerMovie)}/>
          ))}
        </Carousel>

        <Carousel {...CarouselProps} title='Sci Fi Movies' href="/movies/genre/878" hasLink={true}> 
          {scifiGenre.map((scifiMovie) => (
            <CarouselCard key={scifiMovie.id} movie={scifiMovie} onClick={() => handleToggle(scifiMovie)}/>
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
  // Comedy Genre
  const comedyGenreEndpoint: string = genreUrl('35')
  const comedyGenreResp = await basicFetch<Movies>(comedyGenreEndpoint)

  const comedyGenre = comedyGenreResp.results.map(
    (comedyMovie) => {
      return {
        id: comedyMovie.id,
        posterPath: comedyMovie.poster_path,
        backdropPath: comedyMovie.backdrop_path,
        title: comedyMovie.title || comedyMovie.original_title,
        releaseDate: comedyMovie.release_date,
        rating: comedyMovie.vote_average  || null,
        synopsis: comedyMovie.overview,
      }
    }
  )

   // Thriller Genre
   const thrillerGenreEndpoint: string = genreUrl('53')
   const thrillerGenreResp = await basicFetch<Movies>(thrillerGenreEndpoint)
 
   const thrillerGenre = thrillerGenreResp.results.map(
     (thrillerMovie) => {
       return {
         id: thrillerMovie.id,
         posterPath: thrillerMovie.poster_path,
         backdropPath: thrillerMovie.backdrop_path,
         title: thrillerMovie.title || thrillerMovie.original_title,
         releaseDate: thrillerMovie.release_date,
         rating: thrillerMovie.vote_average,
         synopsis: thrillerMovie.overview,
       }
     }
   )
   
   // Scifi Genre
   const scifiGenreEndpoint: string = genreUrl('878')
   const scifiGenreResp = await basicFetch<Movies>(scifiGenreEndpoint)
 
   const scifiGenre = scifiGenreResp.results.map(
     (scifiMovie) => {
       return {
         id: scifiMovie.id,
         posterPath: scifiMovie.poster_path,
         backdropPath: scifiMovie.backdrop_path,
         title: scifiMovie.title || scifiMovie.original_title,
         releaseDate: scifiMovie.release_date,
         rating: scifiMovie.vote_average  || null,
         synopsis: scifiMovie.overview,
       }
     }
   )
  
  return {
    props: {
      featuredMovie,
      actionGenre,
      comedyGenre,
      thrillerGenre,
      scifiGenre,
    },
    revalidate: 60 * 60 * 24 // Re-build page every 24 hours
  };
};
