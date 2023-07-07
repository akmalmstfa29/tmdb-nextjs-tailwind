// Truncate text 
export const truncateString = (text: string, characterLength: number) => {
  if (text?.length >  characterLength) {
    return text.slice(0, characterLength) + '...'
  } else {
    return text
  }
}
