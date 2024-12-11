function calculateMirroredPoints(pointA: number[], pointB: number[]) {
  // Extract coordinates
  const [x1, y1] = pointA;
  const [x2, y2] = pointB;

  // Calculate the mirrored points
  const mirroredA = [2 * x2! - x1!, 2 * y2! - y1!];
  const mirroredB = [2 * x1! - x2!, 2 * y1! - y2!];

  // Return the results
  return [mirroredA, mirroredB];
}

// Function to repeat the mirroring process
function repeatMirroring(pointA: number[], pointB: number[], iterations: number) {
  let results = [];
  let currentA = pointA;
  let currentB = pointB;

  for (let i = 0; i < iterations; i++) {
    const [mirroredA, mirroredB] = calculateMirroredPoints(currentA, currentB);
    results.push(mirroredA);
    results.push(mirroredB);
    currentA = mirroredA!;
    currentB = mirroredB!;
  }

  return results as number[][];
}

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
  for (const antennaSymbol of uniqueAntennas) {
    const antennasOfSort = spots.filter(s => s.antenna === antennaSymbol)
    for (const antennaA of antennasOfSort) {
      for (const antennaB of antennasOfSort) {
        if (antennaA.x === antennaB.x && antennaA.y === antennaB.y) {
          continue
        }
        const mirroredA = [2 * antennaB.x - antennaA.x, 2 * antennaB.y - antennaA.y];
        const mirroredB = [2 * antennaA.x - antennaB.x, 2 * antennaA.y - antennaB.y];
        for (const [x, y] of [mirroredA, mirroredB]) {
          if (x! >= 0 && y! >= 0 && x! < antinodeMap[0]!.length && y! < antinodeMap.length) {
            antinodeMap[y!]![x!] = '#'
          }
        }
      }
    }
  }

  let count = 0
  for (let [_, row] of Object.entries(antinodeMap)) {
    // console.log(row.join(''))
    for (let [_, c] of Object.entries(row)) {
      if (c === "#") {
        count++
      }
    }
  }

  return count
}

export function partTwo(input: string) {
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
  for (const antennaSymbol of uniqueAntennas) {
    const antennasOfSort = spots.filter(s => s.antenna === antennaSymbol)
    for (const antennaA of antennasOfSort) {
      for (const antennaB of antennasOfSort) {
        if (antennaA.x === antennaB.x && antennaA.y === antennaB.y) {
          continue
        }
        const mirrored: number[][] = repeatMirroring([antennaA.x, antennaA.y], [antennaB.x, antennaB.y], 50);
        const filteredMirrored = mirrored.filter(([x, y]) => {
          if (x! >= 0 && y! >= 0 && x! < antinodeMap[0]!.length && y! < antinodeMap.length) {
            antinodeMap[y!]![x!] = '#'
            return true
          }
          return false
        })
      }
    }
  }

  let count = 0
  for (let [_, row] of Object.entries(antinodeMap)) {
    console.log(row.join(''))
    for (let [_, c] of Object.entries(row)) {
      if (c === "#") {
        count++
      }
    }
  }

  return count
}
