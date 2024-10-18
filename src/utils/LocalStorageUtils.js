export const getItemFromLocalStorage = (key) => {
  try {
    const value = localStorage.getItem(key)
    if (value === null) {
      return undefined
    }
    return JSON.parse(value)
  } catch (e) {
    console.error(`Error while fetching ${key} from localStorage: ${e}`)
    return undefined
  }
}

export const setItemInLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error(`Error while setting ${key} to localStorage: ${e}`)
  }
}
