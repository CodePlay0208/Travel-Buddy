export const computeDateAndTimeUntilNowInString = (dateString) => {
    const now = new Date()
    const past = new Date(dateString)
    const diffInMs = now - past
  
    const diffInSeconds = Math.floor(diffInMs / 1000)
    const diffInMinutes = Math.floor(diffInSeconds / 60)
    const diffInHours = Math.floor(diffInMinutes / 60)
    const diffInDays = Math.floor(diffInHours / 24)
    const diffInWeeks = Math.floor(diffInDays / 7)
    const diffInMonths = Math.floor(diffInDays / 30)
    const diffInYears = Math.floor(diffInDays / 365)
  
    if (diffInSeconds < 60) {
      return diffInSeconds === 1 ? '1 second' : `${diffInSeconds} seconds`
    } else if (diffInMinutes < 60) {
      return diffInMinutes === 1 ? '1 minute' : `${diffInMinutes} minutes`
    } else if (diffInHours < 24) {
      return diffInHours === 1 ? '1 hour' : `${diffInHours} hours`
    } else if (diffInDays < 7) {
      return diffInDays === 1 ? '1 day' : `${diffInDays} days`
    } else if (diffInWeeks < 5) {
      return diffInWeeks === 1 ? '1 week' : `${diffInWeeks} weeks`
    } else if (diffInMonths < 12) {
      return diffInMonths === 1 ? '1 month' : `${diffInMonths} months`
    } else {
      return diffInYears === 1 ? '1 year' : `${diffInYears} years`
    }
  }
  
  export const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.getUTCDate()
    const month = date.toLocaleString('default', { month: 'long' })
  
    return `${day} ${month}`
  }
  