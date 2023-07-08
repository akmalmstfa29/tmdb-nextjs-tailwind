import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useFetchMovies } from '../../../api/fetchHooks'
import { IMAGE_BASE_URL, THUMB_SIZE } from '@/config'
import { GridCard, GridContainer } from '@/components'
import { useIntersectionObserver } from '@/hooks'


const Search = () => {
  const [query, setQuery] = useState<any | null>(null)
  // @tanstack/react-query to cache movies via useFetchMovies()
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isSuccess, isLoading } = useFetchMovies(query)

  // Is user intersecting w/ end of Page? If so, then fetch next page
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    isIntersecting && fetchNextPage()
  }

  // set an intercept target to observe
  const { setTarget } = useIntersectionObserver({
    onIntersect,
    enabled: !!hasNextPage,
  })

  const router = useRouter()
  const id = router.query.name

  useEffect(() => {
    // may need this for initial render
    if (router.isReady) {
      setQuery(id)
    }
  }, [router.isReady, id])

  return (

    <div className='grow py-20 mb-10 text-white'>
      <GridContainer title={query ? data?.pages[0].total_results ? `Search Results: ${data?.pages[0].total_results}` : '' : 'Top Rated Movies by TMDB Member Votes'}>
        {isSuccess && data && data.pages
            ? data.pages.map(page =>
                page.results.map(movie => (
                  <GridCard
                    key={movie.id}
                    itemId={movie.id}
                    imgUrl={movie.poster_path
                      ? IMAGE_BASE_URL + THUMB_SIZE + movie.poster_path : '/assets/images/missing-image.png'}
                    title={movie.original_title}
                    subtitle={movie.tagline}
                    routeUrl={'/'}
                  />
                ))
              )
            : null}
      </GridContainer>
      <div ref={setTarget} className='text-white flex items-center justify-center my-11'>{isFetchingNextPage ? "Loading more..." : ""}</div>
      {isLoading && <div className='text-white flex items-center justify-center my-11'>Loading ! ❤️</div>}
      {!hasNextPage && !isLoading && (
        <div className='text-white flex justify-center items-center my-11 mx-auto'>
          Congrats! You scrolled to the end of your search. You rock! 🤘
        </div>
      )}

    </div>
  )
}
export default Search