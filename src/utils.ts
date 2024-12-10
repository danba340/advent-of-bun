export function swap(arr: any[], from: number, to: number) {
  const tmpEl = arr[from]
  const tmp = arr.splice(to, 1, tmpEl!)[0]
  arr.splice(from, 1, tmp!)
}
