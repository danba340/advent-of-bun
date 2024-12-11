import { splitAtIndex } from "@/utils"

export function partOne(input: string) {
  let curr = input.split(" ").map(num => parseInt(num))
  let next: number[] = []
  for (let i = 0; i < 25; i++) {
    for (const stone of curr) {
      let str = `${stone}`
      if (stone === 0) {
        next.push(1)
      } else if (str.length % 2 === 0) {
        const splitIndex = (str.length / 2)
        const [before, after] = splitAtIndex(str, splitIndex)
        // console.log("SPLIT", str, parseInt(before!), parseInt(after!))
        next.push(parseInt(before!))
        next.push(parseInt(after!))
      } else {
        next.push(stone * 2024)
      }
    }
    curr = [...next]
    next = []
  }
  return curr.length
}

export function partTwo(input: string, loops = 75) {
  let init = input.split(" ").map(num => parseInt(num))
  let curr = new Map<number, number>()
  let next = new Map<number, number>()
  for (const stone of init) {
    const prevCount = curr.get(stone) || 0
    curr.set(stone, prevCount + 1)
  }
  for (let i = 0; i < loops; i++) {
    for (const [stone, count] of curr) {
      let str = `${stone}`
      if (stone === 0) {
        const tmp = next.get(1) || 0
        next.set(1, count + tmp)
      } else if (str.length % 2 === 0) {
        const splitIndex = (str.length / 2)
        const [before, after] = splitAtIndex(str, splitIndex)
        const prevBeforeCount = next.get(parseInt(before!)) || 0
        next.set(parseInt(before!), prevBeforeCount + count)
        const prevAfterCount = next.get(parseInt(after!)) || 0
        next.set(parseInt(after!), prevAfterCount + count)
      } else {
        next.set(stone * 2024, count)
      }
    }
    curr = next
    next = new Map<number, number>()
  }
  let sum = 0
  for (const [stone, count] of curr) {
    sum += count
  }
  return sum
}
