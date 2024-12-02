import { describe, expect, test } from 'bun:test'
import fs from 'fs'
import { partOne, partTwo } from './01'

describe('Day 1', () => {
  test('Part 1 Example', () => {
    const input = fs.readFileSync('src/01/example.txt').toString()
    const result = partOne(input)
    const expected = 11
    expect(result).toBe(expected)
  })

  test('Part 2 Example', () => {
    const input = fs.readFileSync('src/01/example.txt').toString()
    const result = partTwo(input)
    const expected = 31
    expect(result).toBe(expected)
  })
})
