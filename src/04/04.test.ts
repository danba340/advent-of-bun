import { describe, expect, test } from 'bun:test'
import fs from "fs"
import { partOne, partTwo } from './04'

describe('Day 4', () => {
  test('Example', () => {
    const input = fs.readFileSync("src/04/example.txt").toString()
    const result = partOne(input)
    const expected = 18
    expect(result).toBe(expected)
  })

  test('Example 2', () => {
    const input = fs.readFileSync("src/04/example.txt").toString()
    const result = partTwo(input)
    const expected = 9
    expect(result).toBe(expected)
  })
})
