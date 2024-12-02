import { describe, expect, test } from 'bun:test'
import fs from 'fs'
import { partOne, partTwo } from './02'

describe('Day 2', () => {
  test('Example', () => {
    const input = fs.readFileSync('src/02/example.txt').toString()
    const result = partOne(input)
    const expected = 2
    expect(result).toBe(expected)
  })
  test('Example 2', () => {
    const input = fs.readFileSync('src/02/example.txt').toString()
    const result = partTwo(input)
    const expected = 4
    expect(result).toBe(expected)
  })
})
