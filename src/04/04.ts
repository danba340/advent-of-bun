export function partOne(input: string) {
  const rowStrings = input.split('\n').filter(r => r.length)
  const rowChars = rowStrings.map(r => r.split(""))
  const transposed = rowChars[0]!.map((_, colIndex) => rowChars.map(row => row[colIndex]));
  const transposedStrings = transposed.map(r => r.join(""))
  let count = 0
  for (const rowString of [...rowStrings, ...transposedStrings]) {
    let xmases = (rowString.match(/XMAS/g) || []).length;
    let samxes = (rowString.match(/SAMX/g) || []).length;
    count += (xmases + samxes)
  }
  for (const isUp of [true, false]) {
    for (const isRight of [true, false]) {
      for (const [_y, row] of Object.entries(rowChars)) {
        const y = parseInt(_y)
        for (const [_x, char] of Object.entries(row)) {
          const x = parseInt(_x)
          if (isUp && isRight) {
            try {
              const wordArray = [char, rowChars[y - 1]![x + 1], rowChars[y - 2]![x + 2], rowChars[y - 3]![x + 3]]
              const word = wordArray.join("")
              if (word === "XMAS" || word === "SAMX") {
                count += 1
              }
            } catch { }
          }
          else if (!isUp && isRight) {
            try {
              const wordArray = [char, rowChars[y + 1]![x + 1], rowChars[y + 2]![x + 2], rowChars[y + 3]![x + 3]]
              const word = wordArray.join("")
              if (word === "XMAS" || word === "SAMX") {
                count += 1
              }
            } catch { }
          }
        }
      }
    }
  }

  return count
}

export function partTwo(input: string) {
  const rowStrings = input.split('\n').filter(r => r.length)
  const rowChars = rowStrings.map(r => r.split(""))
  let mases = []
  for (const isUp of [true, false]) {
    for (const isRight of [true, false]) {
      for (const [_y, row] of Object.entries(rowChars)) {
        const y = parseInt(_y)
        for (const [_x, char] of Object.entries(row)) {
          const x = parseInt(_x)
          if (isUp && isRight) {
            try {
              const wordArray = [char, rowChars[y - 1]![x + 1], rowChars[y - 2]![x + 2]]
              const word = wordArray.join("")
              if (word === "MAS" || word === "SAM") {
                mases.push({ key: `${y}${x}${y - 1}${x + 1}${y - 2}${x + 2}`, mid: { x: x + 1, y: y - 1 } })
              }
            } catch { }
          }
          else if (!isUp && isRight) {
            try {
              const wordArray = [char, rowChars[y + 1]![x + 1], rowChars[y + 2]![x + 2]]
              const word = wordArray.join("")
              if (word === "MAS" || word === "SAM") {
                mases.push({ key: `${y}${x}${y + 1}${x + 1}${y + 2}${x + 2}`, mid: { x: x + 1, y: y + 1 } })
              }
            } catch { }
          }
        }
      }
    }
  }
  const xes = new Set()
  for (const { mid: { x: x1, y: y1 }, key: key1 } of mases) {
    for (const { mid: { x: x2, y: y2 }, key: key2 } of mases) {
      if (x1 === x2 && y1 === y2 && key1 !== key2) {
        xes.add([key1, key2].sort().join(""))
      }
    }
  }

  return xes.size
}
