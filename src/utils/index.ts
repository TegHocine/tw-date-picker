// Get number of days in a month
export const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate()

// Create an array of x length
// since this is used to render days we do index +1
export const createArray = (length: number) =>
  Array.from({ length }, (_, index) => index + 1)
