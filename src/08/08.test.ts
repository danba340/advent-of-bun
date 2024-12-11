import { describe, expect, test } from 'bun:test'
import fs from 'fs'
import { partOne, partTwo } from './08'

describe('Day 8', () => {
  test('Example', () => {
    const input = fs.readFileSync('src/08/example.txt').toString()
    const result = partOne(input)
    const expected = 14
    expect(result).toBe(expected)
  })

  test('Example 2', () => {
    const input = fs.readFileSync('src/08/example.txt').toString()
    const result = partTwo(input)
    const expected = 34
    expect(result).toBe(expected)
  })
})
