function canTraverseToPath(x: number, y: number, board: string[][], dir: string) {
  const xSize = board[0]!.length
  let could = false
  let maxLoops = 100_000
  let counter = 0
  while (counter < maxLoops && (!could || (x > -1 && x < xSize && y > -1 && y < board.length))) {
    counter++
    if (dir === "UP") {
      const nextY = y - 1
      if (nextY < 0) {
        break
      }
      const currPos = board[y]![x]!
      const nextPos = board[nextY]![x]!
      if (nextPos === "#") {
        dir = "RIGHT"
        continue
      } else {
        if (nextPos.includes("U")) {
          could = true
          break
        }
        y = nextY
      }
    }
    if (dir === "RIGHT") {
      const nextX = x + 1
      if (nextX > xSize - 1) {
        break
      }
      const currPos = board[y]![x]!
      const nextPos = board[y]![nextX]!
      if (nextPos === "#") {
        dir = "DOWN"
        continue
      } else {
        if (nextPos.includes("R")) {
          could = true
          break
        }
        x = nextX
      }
    }
    if (dir === "DOWN") {
      const nextY = y + 1
      if (nextY >= board.length) {
        break
      }
      const currPos = board[y]![x]!
      const nextPos = board[nextY]![x]!
      if (nextPos === "#") {
        dir = "LEFT"
        continue
      } else {
        if (nextPos.includes("D")) {
          could = true
          break
        }
        y = nextY
      }
    }
    if (dir === "LEFT") {
      const nextX = x - 1
      console.log("LEFT", nextX)
      if (nextX < 0) {
        break
      }
      const currPos = board[y]![x]!
      const nextPos = board[y]![nextX]!
      if (nextPos === "#") {
        dir = "UP"
        continue
      } else {
        if (nextPos.includes("L")) {
          could = true
          break
        }
        x = nextX
      }
    }
  }
  return could
}

function hasDirInDir(posX: number, posY: number, board: string[][], traverseDir: string) {
  let found = false

  if (traverseDir === "UP") {
    for (let y = posY - 1; y > 0; y--) {
      const searchPos = board[y]![posX]
      if (searchPos?.includes("#")) {
        break
      }
      if (searchPos?.includes("U")) {
        found = true
        break
      }
    }
  }
  if (traverseDir === "DOWN") {
    for (let y = posY + 1; y < board.length; y++) {
      const searchPos = board[y]![posX]
      if (searchPos?.includes("#")) {
        break
      }
      if (searchPos?.includes("D")) {
        found = true
        break
      }
    }
  }
  if (traverseDir === "LEFT") {
    for (let x = posX - 1; x > 0; x--) {
      const searchPos = board[posY]![x]
      if (searchPos?.includes("#")) {
        break
      }
      if (searchPos?.includes("L")) {
        found = true
        break
      }
    }
  }
  if (traverseDir === "RIGHT") {
    for (let x = posX + 1; x < board[0]!.length; x++) {
      const searchPos = board[posY]![x]
      if (searchPos?.includes("#")) {
        break
      }
      if (searchPos?.includes("R")) {
        found = true
        break
      }
    }
  }
  return found
}

export function partOne(input: string) {
  const rows = input.split('\n').filter(r => r.length)

  let y = rows.findIndex(r => r.includes("^"))
  const board = rows.map(r => r.split(""))
  let x = board[y]!.findIndex(c => c === "^")!
  let dir = "UP"
  const xSize = board[0]!.length

  console.log("START", x, y)

  board[y]![x] = "X"

  while (x > -1 && x < xSize && y > -1 && y < board.length) {
    if (dir === "UP") {
      const nextY = y - 1
      if (nextY < 0) {
        break
      }
      const nextPos = board[nextY]![x]
      if (nextPos === "#") {
        dir = "RIGHT"
        continue
      } else {
        board[nextY]![x] = "X"
        y = nextY
      }
    }
    if (dir === "RIGHT") {
      const nextX = x + 1
      if (nextX > xSize - 1) {
        break
      }
      const nextPos = board[y]![nextX]
      if (nextPos === "#") {
        dir = "DOWN"
        continue
      } else {
        board[y]![nextX] = "X"
        x = nextX
      }
    }
    if (dir === "DOWN") {
      const nextY = y + 1
      if (nextY >= board.length) {
        break
      }
      const nextPos = board[nextY]![x]
      if (nextPos === "#") {
        dir = "LEFT"
        continue
      } else {
        board[nextY]![x] = "X"
        y = nextY
      }
    }
    if (dir === "LEFT") {
      const nextX = x - 1
      if (nextX < 0) {
        break
      }
      const nextPos = board[y]![nextX]
      if (nextPos === "#") {
        dir = "UP"
        continue
      } else {
        board[y]![nextX] = "X"
        x = nextX
      }
    }
  }


  let visitedCount = 0
  for (const row of board) {
    for (const x of row) {
      if (x === "X") {
        visitedCount++
      }
    }
  }

  return visitedCount
}

export function partTwo(input: string) {
  const rows = input.split('\n').filter(r => r.length)

  let y = rows.findIndex(r => r.includes("^"))
  const board = rows.map(r => r.split(""))
  let x = board[y]!.findIndex(c => c === "^")!
  let dir = "UP"
  const xSize = board[0]!.length

  board[y]![x] = "U"

  while (x > -1 && x < xSize && y > -1 && y < board.length) {
    console.log(dir, x, y)
    if (dir === "UP") {
      const nextY = y - 1
      if (nextY < 0) {
        break
      }
      board[y]![x] += "U"
      const currPos = board[y]![x]!
      const nextPos = board[nextY]![x]
      if (nextPos === "#") {
        dir = "RIGHT"
        continue
      } else {
        if (currPos.includes("R") || canTraverseToPath(x, y, board, "RIGHT")) {
          board[nextY]![x] += "O"
          console.log("O", dir, x, nextY)
        }
        y = nextY
      }
    }
    if (dir === "RIGHT") {
      const nextX = x + 1
      if (nextX > xSize - 1) {
        break
      }
      board[y]![x] += "R"
      const currPos = board[y]![x]!
      const nextPos = board[y]![nextX]
      if (nextPos === "#") {
        dir = "DOWN"
        continue
      } else {
        if (currPos.includes("D") || canTraverseToPath(x, y, board, "DOWN")) {
          console.log("O", dir, nextX, y)
          board[y]![nextX] += "O"
        }
        x = nextX
      }
    }
    if (dir === "DOWN") {
      const nextY = y + 1
      if (nextY >= board.length) {
        break
      }
      board[y]![x] += "D"
      const currPos = board[y]![x]!
      const nextPos = board[nextY]![x]
      if (nextPos === "#") {
        dir = "LEFT"
        continue
      } else {
        if (currPos.includes("L") || canTraverseToPath(x, y, board, "LEFT")) {
          console.log("O", dir, x, nextY)
          board[nextY]![x] += "O"
        }
        board[nextY]![x] += "D"
        y = nextY
      }
    }
    if (dir === "LEFT") {
      const nextX = x - 1
      if (nextX < 0) {
        break
      }
      board[y]![x] += "L"
      const currPos = board[y]![x]!
      const nextPos = board[y]![nextX]
      if (nextPos === "#") {
        dir = "UP"
        continue
      } else {
        if (currPos.includes("U") || canTraverseToPath(x, y, board, "UP")) {
          console.log("O", dir, nextX, y)
          board[y]![nextX] += "O"
        }
        x = nextX
      }
    }
  }

  console.log("AFTER")

  let visitedCount = 0
  for (const row of board) {
    console.log(row.map(c => {
      if (c.includes("#")) {
        return "#"
      }
      if (c.includes("O")) {
        return "O"
      }
      if (
        (c.includes("U") || c.includes("D")) &&
        (c.includes("L") || c.includes("R"))
      ) {
        return "+"
      }
      if (c.includes("U") || c.includes("D")) {
        return "|"
      }
      if (c.includes("L") || c.includes("R")) {
        return "-"
      }
      return " "
    }).join(""))
    for (const x of row) {
      if (x.includes("O")) {
        visitedCount++
      }
    }
  }

  return visitedCount
}
