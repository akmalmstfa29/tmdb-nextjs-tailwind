export const basicFetch = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(endpoint)
  
  if (response.status !== 200) {
    const error = await response.json()
    throw {message: error.message, status: error.code}
  }
  const data = await response.json()
  
  return data
}
