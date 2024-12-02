function allPositive(nums: number[]) {
  return nums.every(n => n > 0)
}
function allNegative(nums: number[]) {
  return nums.every(n => n < 0)
}
function allBelowAbsVal(nums: number[], val: number) {
  return nums.every(n => Math.abs(n) <= val)
}

export function partOne(input: string) {
  const rows = input.split('\n').filter(r => r.length)
  console.log(rows.length)
  const numsArray = rows.map(r => r.split(' ').map(num => parseInt(num)))

  const diffsArray = numsArray.map(nums => {
    let lastNum = 0
    return nums.reduce((acc: number[], num, index) => {
      if (index === 0) {
        lastNum = num
        return []
      }
      let diff = lastNum - num
      lastNum = num
      return [...acc, diff]
    }, [])
  })

  const validArrays = diffsArray.filter(a => {
    return (allPositive(a) || allNegative(a)) && allBelowAbsVal(a, 3)
  })

  return validArrays.length
}

export function partTwo(input: string) {
  const rows = input.split('\n').filter(r => r.length)
  const numsArray = rows.map(r => r.split(' ').map(num => parseInt(num)))

  const permutations = numsArray.map(a => {
    return new Array(a.length).fill(null).map((_, i) => {
      const copy = [...a]
      copy.splice(i, 1)
      return copy
    })
  })

  new Array(numsArray.length).fill(null).map((_, i) => {
    const copy = [...numsArray]
    copy.splice(i, 1)
    return copy
  })
  console.log(permutations)

  const diffsArrayList = permutations.map(p => {
    return p.map(nums => {
      let lastNum = 0
      return nums.reduce((acc: number[], num, index) => {
        if (index === 0) {
          lastNum = num
          return []
        }
        let diff = lastNum - num
        lastNum = num
        return [...acc, diff]
      }, [])
    })
  })

  // console.log(diffsArrayList)

  const validArrays = diffsArrayList.filter(a => {
    const valid = a.some(p => {
      return (allPositive(p) || allNegative(p)) && allBelowAbsVal(p, 3)
    })
    return valid
  })

  return validArrays.length
}
