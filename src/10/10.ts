import { sum } from "@/utils"

function traverseToTop(heightMap: number[][], x: number, y: number, topCount: number[]) {
  const currentHeight = heightMap[y]![x]!
  if (currentHeight === 9) {
    topCount.push(1)
  }
  if (y > 0) {
    const aboveHeight = heightMap[y - 1]![x]!
    if (aboveHeight === (currentHeight + 1)) {
      traverseToTop(heightMap, x, y - 1, topCount)
    }
  }
  if (y < heightMap.length - 1) {
    const belowHeight = heightMap[y + 1]![x]!
    if (belowHeight === (currentHeight + 1)) {
      traverseToTop(heightMap, x, y + 1, topCount)
    }
  }
  if (x > 0) {
    const leftHeight = heightMap[y]![x - 1]!
    if (leftHeight === (currentHeight + 1)) {
      traverseToTop(heightMap, x - 1, y, topCount)
    }
  }
  if (x < heightMap[0]!.length - 1) {
    const rightHeight = heightMap[y]![x + 1]!
    if (rightHeight === (currentHeight + 1)) {
      traverseToTop(heightMap, x + 1, y, topCount)
    }
  }
}

function traverseToTopVisited(heightMap: number[][], x: number, y: number, topCount: number[], visited: string[]) {
  const currentHeight = heightMap[y]![x]!
  let visitStr = `${x},${y}`
  if (visited.includes(visitStr)) return
  if (currentHeight === 9) {
    topCount.push(1)
  }
  if (y > 0) {
    const aboveHeight = heightMap[y - 1]![x]!
    if (aboveHeight === (currentHeight + 1)) {
      traverseToTopVisited(heightMap, x, y - 1, topCount, visited)
    }
  }
  if (y < heightMap.length - 1) {
    const belowHeight = heightMap[y + 1]![x]!
    if (belowHeight === (currentHeight + 1)) {
      traverseToTopVisited(heightMap, x, y + 1, topCount, visited)
    }
  }
  if (x > 0) {
    const leftHeight = heightMap[y]![x - 1]!
    if (leftHeight === (currentHeight + 1)) {
      traverseToTopVisited(heightMap, x - 1, y, topCount, visited)
    }
  }
  if (x < heightMap[0]!.length - 1) {
    const rightHeight = heightMap[y]![x + 1]!
    if (rightHeight === (currentHeight + 1)) {
      traverseToTopVisited(heightMap, x + 1, y, topCount, visited)
    }
  }
  visited.push(visitStr)
}

export function partOne(input: string) {
  const rows = input
    .split('\n')
    .filter(r => r.length)
    .map(r => r.split('').map(s => parseInt(s)))

  const trailHeads = []
  for (const [y, row] of Object.entries(rows)) {
    for (const [x, height] of Object.entries(row)) {
      if (height === 0) {
        trailHeads.push([parseInt(y), parseInt(x)])
      }
    }
  }

  let sums = []
  for (const [y, x] of trailHeads) {
    const paths: number[] = []
    traverseToTopVisited(rows, x!, y!, paths, [])
    sums.push(paths.length)
  }

  return sum(sums)
}

export function partTwo(input: string) {
  const rows = input
    .split('\n')
    .filter(r => r.length)
    .map(r => r.split('').map(s => parseInt(s)))

  const trailHeads = []
  for (const [y, row] of Object.entries(rows)) {
    for (const [x, height] of Object.entries(row)) {
      if (height === 0) {
        trailHeads.push([parseInt(y), parseInt(x)])
      }
    }
  }

  let sums = []
  for (const [y, x] of trailHeads) {
    const paths: number[] = []
    traverseToTop(rows, x!, y!, paths)
    sums.push(paths.length)
  }


  return sum(sums)
}
