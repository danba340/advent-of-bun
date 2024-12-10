function generatePermutations<T>(inputArray: T[], length: number): T[][] {
  if (length <= 0) {
    return []
  }

  const result: T[][] = []

  function backtrack(current: T[]) {
    if (current.length === length) {
      result.push([...current])
      return
    }

    for (const element of inputArray) {
      current.push(element)
      backtrack(current)
      current.pop()
    }
  }

  backtrack([])
  return result
}

export function partOne(input: string) {
  const rows = input.split('\n').filter(r => r.length)
  const parsedRows = rows.map(r => {
    const [sum, vals] = r.split(':')
    const values = vals!
      .trim()
      .split(' ')
      .map(v => parseInt(v))
    return [parseInt(sum!), values] as [number, number[]]
  })

  let total = 0
  const operators = ['*', '+']
  loop: for (const [sum, values] of parsedRows) {
    const permutations = generatePermutations(operators, values.length)
    for (const permutation of permutations) {
      const result = permutation.reduce(
        (acc: number, operator: string, i: number) => {
          const value = values[i]!
          if (i === 0) return value
          if (operator === '*') return acc * value
          if (operator === '+') return acc + value
          return acc
        },
        0
      )
      if (sum === result) {
        total += sum
        continue loop
      }
    }
  }

  return total
}

export function partTwo(input: string) {
  const rows = input.split('\n').filter(r => r.length)
  const parsedRows = rows.map(r => {
    const [sum, vals] = r.split(':')
    const values = vals!
      .trim()
      .split(' ')
      .map(v => parseInt(v))
    return [parseInt(sum!), values] as [number, number[]]
  })

  let total = 0
  const operators = ['*', '+', '||']
  loop: for (const [i, [sum, values]] of Object.entries(parsedRows)) {
    const permutations = generatePermutations(operators, values.length)
    for (const permutation of permutations) {
      const result = permutation.reduce(
        (acc: number, operator: string, i: number) => {
          const value = values[i]!
          if (i === 0) return value
          if (operator === '*') return acc * value
          if (operator === '+') return acc + value
          if (operator === '||') return parseInt(`${acc}${value}`)
          return acc
        },
        0
      )
      if (sum === result) {
        total += sum
        continue loop
      }
    }
  }

  return total
}
