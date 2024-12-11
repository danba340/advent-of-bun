import { describe, expect, test } from 'bun:test'
import { partOne, partTwo } from './11'

describe('Day 11', () => {
  test('Example', () => {
    const input = "125 17"
    const result = partOne(input)
    const expected = 55312
    expect(result).toBe(expected)
  })
  test('Example 2', () => {
    const input = "125 17"
    const result = partTwo(input, 25)
    const expected = 55312
    expect(result).toBe(expected)
  })
})
