type Spot = { x: number; y: number; antenna: string }
export function partOne(input: string) {
  const rows = input
    .split('\n')
    .filter(r => r.length)
    .map(r => r.split(''))

  const spots: Spot[] = []
  for (let [y, row] of Object.entries(rows)) {
    for (let [x, antenna] of Object.entries(row)) {
      if (antenna !== '.') {
        spots.push({
          x: parseInt(x),
          y: parseInt(y),
          antenna
        })
      }
    }
  }

  const antinodeMap = [...rows]
  const uniqueAntennas = new Set()
  for (const spot of spots) {
    uniqueAntennas.add(spot.antenna)
  }
  const antiNodeSet = new Set()
  for (const antennaSymbol of uniqueAntennas) {
    const antennasOfSort = spots.filter(s => s.antenna === antennaSymbol)
    for (const antennaA of antennasOfSort) {
      for (const antennaB of antennasOfSort) {
        if (antennaA.x === antennaB.x && antennaA.y === antennaB.y) {
          continue
        }
        const deltaX = Math.abs(antennaA.x - antennaB.x)
        const deltaY = Math.abs(antennaA.y - antennaB.y)
        const x1 = antennaA.x - deltaX
        const x2 = antennaA.x + deltaX
        const x3 = antennaB.x - deltaX
        const x4 = antennaB.x + deltaX
        const y1 = antennaA.y - deltaY
        const y2 = antennaA.y + deltaY
        const y3 = antennaB.y - deltaY
        const y4 = antennaB.y + deltaY
        const potentialAntiNodes = [
          [x1, y1],
          [x1, y2],
          [x1, y3],
          [x1, y4],
          [x2, y1],
          [x2, y2],
          [x2, y3],
          [x2, y4],
          [x3, y1],
          [x3, y2],
          [x3, y3],
          [x3, y4],
          [x4, y1],
          [x4, y2],
          [x4, y3],
          [x4, y4]
        ]
        const antinodes = potentialAntiNodes.filter(([x, y]) => {
          return (
            x &&
            x >= 0 &&
            x < rows[0]!.length &&
            y &&
            y >= 0 &&
            y < rows.length &&
            x !== antennaA.x &&
            y !== antennaA.y &&
            x !== antennaB.x &&
            y !== antennaB.y
          )
        })
        for (const antinode of antinodes) {
          const [x, y] = antinode
          // console.log(antinode)
          // @ts-ignore
          antinodeMap[y][x] = '#'
          antiNodeSet.add(`${y}${x}`)
        }
      }
    }
  }

  for (let [y, row] of Object.entries(antinodeMap)) {
    // console.log(row.join(''))
    for (let [x, antenna] of Object.entries(row)) {
    }
  }

  return antiNodeSet.size
}

export function partTwo(input: string) {
  return 'UNIMPLEMENTED'
}
