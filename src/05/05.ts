function validRuleFilter(update: number[], rule: number[]) {
  const [before, after] = rule
  const iBefore = update.indexOf(before as number)
  const iAfter = update.indexOf(after as number)
  if (iBefore === -1 || iAfter === -1) {
    return true
  }
  if (iBefore < iAfter) {
    return true
  }
  return false
}

function swap(arr: number[], from: number, to: number) {
  const tmpEl = arr[from]
  const tmp = arr.splice(to, 1, tmpEl!)[0]
  arr.splice(from, 1, tmp!)
}

export function partOne(input: string) {
  const [ruleRows, updateRows] = input.split('\n\n')
  const rules = ruleRows!
    .split('\n')
    .filter(r => r.length)
    .map(r => r.split('|').map(n => parseInt(n)))
  const updates = updateRows!
    .split('\n')
    .filter(r => r.length)
    .map(r => r.split(',').map(n => parseInt(n)))

  const validUpdates = updates.filter(update => {
    return rules.every(rule => validRuleFilter(update, rule))
  })

  const middles = validUpdates.map(u => {
    const i = Math.floor(u.length / 2)
    return u[i]
  })

  const sum = middles.reduce((acc: number, n) => acc + n!, 0)

  return sum
}

export function partTwo(input: string) {
  const [ruleRows, updateRows] = input.split('\n\n')
  const rules = ruleRows!
    .split('\n')
    .filter(r => r.length)
    .map(r => r.split('|').map(n => parseInt(n)))
  const updates = updateRows!
    .split('\n')
    .filter(r => r.length)
    .map(r => r.split(',').map(n => parseInt(n)))

  console.log(rules)

  const invalidUpdates = updates.filter(update => {
    return rules.some(rule => {
      const [before, after] = rule
      const iBefore = update.indexOf(before as number)
      const iAfter = update.indexOf(after as number)
      if (iBefore === -1 || iAfter === -1) {
        return false
      }
      if (iBefore > iAfter) {
        return true
      }
      return false
    })
  })

  const fixed = invalidUpdates.map(u => {
    const update = [...u]
    while (!rules.every(rule => validRuleFilter(update, rule))) {
      for (const rule of rules) {
        const [before, after] = rule
        const iBefore = update.indexOf(before as number)
        const iAfter = update.indexOf(after as number)
        if (iBefore === -1 || iAfter === -1) {
          continue
        }
        if (iBefore > iAfter) {
          swap(update, iBefore, iAfter)
        }
      }
    }
    return update
  })

  const middles = fixed.map(u => {
    const i = Math.floor(u.length / 2)
    return u[i]
  })

  const sum = middles.reduce((acc: number, n) => acc + n!, 0)

  return sum
}
