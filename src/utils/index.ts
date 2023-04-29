export const leftPadArray = (arr: any[], pad: number): any[] => {
  const paddedArr = new Array(pad).fill('').concat(arr)
  return paddedArr
}

// Create an array of x length
// since this is used to render days we do index +1
export const createArray = (length: number) =>
  Array.from({ length }, (_, index) => index + 1)
