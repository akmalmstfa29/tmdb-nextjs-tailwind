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

// Convert time to hours and minutes
export const calcTime = (time: number): string => {
  const hours: number = Math.floor(time / 60);
  const mins: number = time % 60;
  return `${hours}h ${mins}m`;
};

// Convert a number to money formatting
export const convertMoney = (money: number): string => {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short'
  });
  return formatter.format(money);
};
