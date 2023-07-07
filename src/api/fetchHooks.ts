import { useInfiniteQuery } from '@tanstack/react-query'
import { getGenres } from './fetchFunctions'
import { Movies } from '../types/Movie'

export const useFetchGenres = (genre: string) => {
  return useInfiniteQuery(
    ['movies', genre],
    ({ pageParam = 1 }) => getGenres(genre, pageParam), {
      getNextPageParam: (lastPage: Movies) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1
        }

        return undefined
      },
      refetchOnWindowFocus: false
    }
  )
}