import { describe, expect, test } from 'bun:test'
import fs from 'fs'
import { partOne, partTwo } from './05'

describe('Day 5', () => {
  test('Example', () => {
    const input = fs.readFileSync('src/05/example.txt').toString()
    const result = partOne(input)
    const expected = 143
    expect(result).toBe(expected)
  })
  test('Example 2', () => {
    const input = fs.readFileSync('src/05/example.txt').toString()
    const result = partTwo(input)
    const expected = 123
    expect(result).toBe(expected)
  })
})
