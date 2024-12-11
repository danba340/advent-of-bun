export function swap(arr: any[], from: number, to: number) {
  const tmpEl = arr[from]
  const tmp = arr.splice(to, 1, tmpEl!)[0]
  arr.splice(from, 1, tmp!)
}

export function sum(nums: number[]) {
  return nums.reduce((partialSum, a) => partialSum + a, 0);
}

export function splitAtIndex(str: string, index: number) {
  return [str.substring(0, index), str.substring(index)]
}
