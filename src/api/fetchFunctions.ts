import { Movies } from "@/types/Movie"

export const basicFetch = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(endpoint)
  
  if (response.status !== 200) {
    const error = await response.json()
    throw {message: error.message, status: error.code}
  }
  const data = await response.json()
  
  return data
}

export const getGenres = async (genre = '', page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?genre=${genre}&page=${page}`)
}

export const searchMovies = async (search = '', page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/search?search=${search}&page=${page}`)
}
