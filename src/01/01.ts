export function partOne(input: string) {
  const rows = input.split('\n')
  const leftList = []
  const rightList = []
  for (const row of rows) {
    const [leftStr, rightStr] = row.split('   ')
    const left = parseInt(leftStr || '0')
    const right = parseInt(rightStr || '0')
    leftList.push(left)
    rightList.push(right)
  }
  leftList.sort()
  rightList.sort()
  let sum = 0
  for (let i = 0; i < leftList.length; i++) {
    const left = leftList[i] as number
    const right = rightList[i] as number
    const diff = Math.abs(left - right)
    sum += diff
  }

  return sum
}

export function partTwo(input: string) {
  const rows = input.split('\n')
  const leftList = []
  const rightList = []
  for (const row of rows) {
    const [leftStr, rightStr] = row.split('   ')
    const left = parseInt(leftStr || '0')
    const right = parseInt(rightStr || '0')
    leftList.push(left)
    rightList.push(right)
  }
  leftList.sort()
  rightList.sort()
  let sum = 0
  for (let i = 0; i < leftList.length; i++) {
    const left = leftList[i] as number
    const right = rightList[i] as number
    const leftInRight = rightList.filter(n => n === left)
    const sim = left * leftInRight.length
    sum += sim
  }

  return sum
}
