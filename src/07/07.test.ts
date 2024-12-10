import { describe, expect, test } from 'bun:test'
import fs from 'fs'
import { partOne, partTwo } from './07'

describe('Day 7', () => {
  test('Example', () => {
    const input = fs.readFileSync('src/07/example.txt').toString()
    const result = partOne(input)
    const expected = 3749
    expect(result).toBe(expected)
  })
  test('Example 2', () => {
    const input = fs.readFileSync('src/07/example.txt').toString()
    const result = partTwo(input)
    const expected = 11387
    expect(result).toBe(expected)
  })
})
