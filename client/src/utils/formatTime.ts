//outputs 'January 23, 2023' date format instead of 'YYYY/MM/DD'
export default function formatTime(timeDate: string | number | Date): string {
  const date = new Date(timeDate);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}