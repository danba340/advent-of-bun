import { describe, expect, test } from 'bun:test'
import fs from 'fs'
import { partOne, partTwo } from './03'

describe('Day 3', () => {
  test('Example', () => {
    const input = fs.readFileSync('src/03/example.txt').toString()
    const result = partOne(input)
    const expected = 161
    expect(result).toBe(expected)
  })
  test('Example 2', () => {
    const input =
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
    const result = partTwo(input)
    const expected = 48
    expect(result).toBe(expected)
  })
})
