import { describe, expect, test } from 'bun:test'
import fs from "fs"
import { partOne, partTwo } from './10'

describe('Day 10', () => {
  test('Example', () => {
    const input = fs.readFileSync("src/10/example.txt").toString()
    const result = partOne(input)
    const expected = 36
    expect(result).toBe(expected)
  })
  test('Example 2', () => {
    const input = fs.readFileSync("src/10/example.txt").toString()
    const result = partTwo(input)
    const expected = 81
    expect(result).toBe(expected)
  })
})
