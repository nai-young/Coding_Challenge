function groupArrayElements (array, number) {
  const arr = [...array]

  // Check if given number is positive
  if (Math.sign(number) < 0) return console.error('Please, enter a positive number.')

  // Check if given array is greater or iqual than 0
  if (array.length < 0 || array === undefined) return console.error('Array length not valid or undefined.')
  
  let grouped = []
  for (let i = number; i > 0; i--) {
    // Divide original array length / parts to divide (1/3) and 
    // move each element of the array into separate indexes (Math.ceil)
    grouped.push(arr.splice(0, Math.ceil(arr.length / i)))
  } 
  return grouped
}

groupArrayElements([1, 2, 3, 4, 5], 3)

// - TEST -
// groupArrayElements([​1​, ​2​, ​3​, ​4,​ ​5​], ​-3)
// groupArrayElements([], ​3​)
// groupArrayElements([​1​, ​2​, ​3​, ​4,​ ​5​], ​9)