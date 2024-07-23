export function formatDateTime(dateStr: string) {
  const dateObj = new Date(dateStr)
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }
  return dateObj.toLocaleString('en-US', options as any)
}
