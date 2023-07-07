// Truncate text 
export const truncateString = (text: string, characterLength: number) => {
  if (text?.length >  characterLength) {
    return text.slice(0, characterLength) + '...'
  } else {
    return text
  }
}

// humanize date string
export const humanizeDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}