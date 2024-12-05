export function partOne(input: string) {
  const regex = /mul\((\d+),(\d+)\)/g
  const matches = input.match(regex)

  const digits = []
  if (!matches) return 0
  for (const matchStr of matches) {
    const regex = /mul\((\d+),(\d+)\)/g
    const match = regex.exec(matchStr)
    if (!match) continue
    // Check if both captured numbers are two digits
    const [num1, num2] = [match[1], match[2]]
    if (!num1 || !num2) continue
    digits.push([parseInt(num1), parseInt(num2)])
  }

  let result = 0
  for (const pair of digits) {
    result += (pair[0] as number) * (pair[1] as number)
  }

  return result
}

export function partTwo(input: string) {
  const regex = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g
  const matches = input.match(regex)

  const digits = []
  let shouldMult = true
  if (!matches) return 0
  for (const matchStr of matches) {
    if (matchStr === 'do()') {
      shouldMult = true
      continue
    }
    if (matchStr === "don't()") {
      shouldMult = false
      continue
    }
    if (!shouldMult) continue
    const regex = /mul\((\d+),(\d+)\)/g
    const match = regex.exec(matchStr)
    if (!match) continue
    // Check if both captured numbers are two digits
    const [num1, num2] = [match[1], match[2]]
    if (!num1 || !num2) continue
    digits.push([parseInt(num1), parseInt(num2)])
  }

  let result = 0
  for (const pair of digits) {
    result += (pair[0] as number) * (pair[1] as number)
  }

  return result
}
