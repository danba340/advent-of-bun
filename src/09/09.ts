import { swap } from '@/utils'

function onceDotAllDots(str: string) {
  let hasSeen = false
  let result = true
  for (const char of str) {
    if (char !== '.' && hasSeen) {
      result = false
      break
    }
    if (char === '.') {
      hasSeen = true
    }
  }
  return result
}

function lastIndexOfCharNot(str: string, not: string) {
  // Loop through the string from the end
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== not) {
      return i
    }
  }
  // Return -1 if no such character is found
  return -1
}

export function partOne(input: string) {
  let isFree = false
  const blocks = input.split('').map(c => parseInt(c))
  let result: string[] = []
  let index = 0
  for (const num of blocks) {
    if (isFree) {
      const toAdd = new Array(num).fill('.')
      result.concat(toAdd)
    } else {
      const toAdd = new Array(num).fill(`${index}`).join('')
      result += toAdd
      index++
    }
    isFree = !isFree
  }
  while (!onceDotAllDots(result)) {
    const indexOfFirstDot = result.indexOf('.')
    if (indexOfFirstDot === -1) {
      break
    }
    const indexOfLastNonDot = lastIndexOfCharNot(result, '.')
    if (indexOfLastNonDot === -1) {
      break
    }
    const resultArray = result.split('')
    swap(resultArray, indexOfFirstDot, indexOfLastNonDot)
    result = resultArray.join('')
  }
  console.log('RESULT', result)

  let sum = 0
  for (const [i, char] of Object.entries(result)) {
    if (char === '.') break
    let num = parseInt(char)
    sum += parseInt(i) * num
  }
  console.log('SUM', sum)
  return sum
}

export function partTwo(input: string) {
  return 'UNIMPLEMENTED'
}
