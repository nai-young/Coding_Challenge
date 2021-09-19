class Grouped {
  constructor(array, number) {
    this.array = array,
    this.number = number
  }
  groupArrayElements(array, number) {
    const arr = [...array]

    // Check if number is positive
    if (Math.sign(number) < 0) return console.error('Please, enter a positive number.')

    // Check if array is greater or iqual than 0
    if (array.length < 0 || array === undefined) return console.error('Array length not valid or undefined.')
    let grouped = []
    for (let i = number; i > 0; i--) {
      // Divide original array length / parts to divide (1/2) and 
      // move each element into separate indexes (Math.ceil)
      grouped.push(arr.splice(0, Math.ceil(arr.length / i)))
    } 
    return grouped
  }
}

const three = new Grouped()
three.groupArrayElements([1, 2, 3, 4, 5], 3)

// console.log(three instanceof Grouped)

// - TEST -
// three.groupArrayElements([​1​, ​2​, ​3​, ​4,​ ​5​], ​-3)
// three.groupArrayElements([], ​3​)
// three.groupArrayElements([​1​, ​2​, ​3​, ​4,​ ​5​], ​9)