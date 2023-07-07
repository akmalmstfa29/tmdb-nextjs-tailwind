import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GetStaticProps, NextPage } from 'next';
import { BACKDROP_SIZE, IMAGE_BASE_URL, movieUrl } from '@/config';
import { basicFetch } from '@/api';
import { Featured, Movie, SelectMovie } from '@/types/Movie';
import Hero from '@/components/Hero/Hero';

type HomeProps = {
  featuredMovie: Featured
}

const Home: NextPage<HomeProps> = ({ featuredMovie }) => {
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
  
  return {
    props: {
      featuredMovie,
    },
    revalidate: 60 * 60 * 24 // Re-build page every 24 hours
  };
};
