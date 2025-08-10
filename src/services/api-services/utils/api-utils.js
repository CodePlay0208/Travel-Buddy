export const getQueryString = (params) => {
  let queryString = ''
  if (Array.isArray(params)) {
    params?.forEach((input) => {
      const { key = '', value = '' } = input
      if (value||value === 0) {
        queryString += key + '=' + value + '&'
      }
    })
  } else {
    Object.keys(params).forEach((key) => {
      if (params[key]) {
        queryString += key + '=' + params[key] + '&'
      }
    })
  }
  return queryString.slice(0, -1)
}
