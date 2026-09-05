function formatBreakDateTime (date = new Date()) {
  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  })
  const calendarDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return `Current time: ${time} · ${calendarDate}`
}

export default formatBreakDateTime
