let adjustedTestCode = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 9, 1, 19, 1, 19, 5, 23, 1, 23, 5, 27, 2, 27, 10, 31, 1, 31, 9, 35, 1, 35, 5, 39, 1, 6, 39, 43, 2, 9, 43, 47, 1, 5, 47, 51, 2, 6, 51, 55, 1, 5, 55, 59, 2, 10, 59, 63, 1, 63, 6, 67, 2, 67, 6, 71, 2, 10, 71, 75, 1, 6, 75, 79, 2, 79, 9, 83, 1, 83, 5, 87, 1, 87, 9, 91, 1, 91, 9, 95, 1, 10, 95, 99, 1, 99, 13, 103, 2, 6, 103, 107, 1, 107, 5, 111, 1, 6, 111, 115, 1, 9, 115, 119, 1, 119, 9, 123, 2, 123, 10, 127, 1, 6, 127, 131, 2, 131, 13, 135, 1, 13, 135, 139, 1, 9, 139, 143, 1, 9, 143, 147, 1, 147, 13, 151, 1, 151, 9, 155, 1, 155, 13, 159, 1, 6, 159, 163, 1, 13, 163, 167, 1, 2, 167, 171, 1, 171, 13, 0, 99, 2, 0, 14, 0]

function part2(array, input) {
  for(let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      let newArr = array.slice()
      newArr[1] = i
      newArr[2] = j
      if (computer(newArr) === input) {
        return (newArr[1] * 100) + newArr[2]
      }
    }
  }
}

function computer(array) {
  for (let i = 0; i < array.length; i += 4) {
    let num1 = array[i]
    let num2 = array[i + 1]
    let num3 = array[i + 2]
    let num4 = array[i + 3]
    if (num1 === 1) {
      array[num4] = array[num2] + array[num3]
    } else if (num1 === 2) {
      array[num4] = array[num2] * array[num3]
    } else if (num1 === 99) {
      break
    }
  }
  return array[0]
}

// function computer(newArr) {
//   let newArr = array.slice()
//   for (let i = 0; i < newArr.length; i += 4) {
//     let num1 = newArr[i]
//     let num2 = newArr[i + 1]
//     let num3 = newArr[i + 2]
//     let num4 = newArr[i + 3]
//     if (num1 === 1) {
//       newArr[num4] = newArr[num2] + newArr[num3]
//     } else if (num1 === 2) {
//       newArr[num4] = newArr[num2] * newArr[num3]
//     } else if (num1 === 99) {
//       break
//     }
//   }
//   return newArr[0]
// }

console.log(part2(adjustedTestCode, 19690720))
