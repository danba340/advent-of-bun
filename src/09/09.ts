import { swap } from '@/utils'

function dotsAtEnd(str: string[]) {
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

function lastIndexOfCharNot(str: string[], not: string) {
  // Loop through the string from the end
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== not) {
      return i
    }
  }
  // Return -1 if no such character is found
  return -1
}

function indexWhereBlockFits(arr: string[], blockSize: number) {
  const str = arr.join("")
  const matchStr = new Array(blockSize).fill(".").join("")
  const i = str.indexOf(matchStr)
  return i
}

function getLastBlock(arr: string[], blockedIds: string[]) {
  let id = ""
  let endIndex = -1
  let startIndex = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    if (id === "") {
      if (arr[i] !== "." && !blockedIds.includes(arr[i]!)) {
        id = arr[i]!
        endIndex = i + 1
      }
    } else if (arr[i] !== id) {
      startIndex = i + 1
      break
    }
  }
  return { id, size: endIndex - startIndex, startIndex, endIndex }
}

export function partOne(input: string) {
  let isFree = false
  const blocks = input.split('').map(c => parseInt(c))
  let result: string[] = []
  let index = 0
  for (const num of blocks) {
    if (num) {
      if (isFree) {
        const toAdd = new Array(num).fill('.')
        result = result.concat(toAdd)
      } else {
        const toAdd = new Array(num).fill(`${index}`)
        result = result.concat(toAdd)
        index++
      }
    }
    isFree = !isFree
  }

  while (!dotsAtEnd(result)) {
    const indexOfFirstDot = result.indexOf('.')
    if (indexOfFirstDot === -1) {
      break
    }
    const indexOfLastNonDot = lastIndexOfCharNot(result, '.')
    if (indexOfLastNonDot === -1) {
      break
    }
    swap(result, indexOfFirstDot, indexOfLastNonDot)
  }

  let sum = 0
  for (const [i, char] of Object.entries(result)) {
    if (char === '.') break
    let num = parseInt(char)
    sum += parseInt(i) * num
  }
  return sum
}

export function partTwo(input: string) {
  let isFree = false
  const blocks = input.split('').map(c => parseInt(c))
  let result: string[] = []
  let index = 0
  for (const num of blocks) {
    if (num) {
      if (isFree) {
        const toAdd = new Array(num).fill('.')
        result = result.concat(toAdd)
      } else {
        const toAdd = new Array(num).fill(`${index}`)
        result = result.concat(toAdd)
        index++
      }
    }
    isFree = !isFree
  }

  const blockedIds: string[] = []
  for (let i = 0; i < 10000; i++) {
    const { id, size, startIndex, endIndex } = getLastBlock(result, blockedIds)
    const fitIndex = indexWhereBlockFits(result, size)
    if (fitIndex === -1 || fitIndex >= startIndex) {
      blockedIds.push(id)
      continue
    }
    for (let i = 0; i < size; i++) {
      swap(result, fitIndex + i, startIndex + i)
    }
  }

  let sum = 0
  for (const [i, char] of Object.entries(result)) {
    if (!char || char === '.') continue
    let num = parseInt(char)
    if (isNaN(num)) console.log("BAD", char)
    sum += parseInt(i) * num
  }
  return sum
}
