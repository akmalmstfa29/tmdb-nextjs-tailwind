import { basicFetch } from '@/api/fetchFunctions'
import { GridCard, GridContainer, MovieDetails } from '@/components'
import {
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  creditsUrl,
  movieUrl
} from '@/config'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

// types
import { Cast, Credits, Crew, Movie } from '../../types/Movie'

type TProps = {
  movie: Movie
  directors: Crew[]
  cast: Cast[]
};

const Movie: NextPage<TProps> = ({ movie, cast, directors }) => {

  return (
    <main className='grow'>
      <MovieDetails
        rating={movie.vote_average}
        year={movie.release_date.split('-')[0]}
        genres={movie.genres}
        backgroundImgUrl={movie.backdrop_path
          ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path
          : movie.poster_path
            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
            : '/assets/images/missing-image.png'}

        title={movie.original_title}
        tagline={movie.tagline}
        summary={movie.overview}
        directors={directors}
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      <GridContainer title='Cast'>
        {cast.map(actor => (
            <GridCard
              key={actor.id}
              itemId={actor.id}
              imgUrl={actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : '/assets/images/missing-image.png'}
              title={actor.name}
              subtitle={actor.character}
            />
        ))}
      </GridContainer>

    </main>
  )
}

export default Movie

// to create static pages on client side
export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id as string

  const movieEndpoint: string = movieUrl(id)
  const creditsEndpoint: string = creditsUrl(id)

  const movie = await basicFetch<Movie>(movieEndpoint)
  const credits = await basicFetch<Credits>(creditsEndpoint)

  const directors = credits.crew.filter(member => member.job === 'Director')

  return {
    props: {
      movie,
      directors,
      cast: credits.cast
    },
    revalidate: 60 * 60 * 24 // Re-build page every 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};