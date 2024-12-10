import { describe, expect, test } from 'bun:test'
import fs from "fs"
import { partOne, partTwo } from './06'

describe('Day 6', () => {
  test('Example 1', () => {
    const input = fs.readFileSync("src/06/example.txt").toString()
    const result = partOne(input)
    const expected = 41
    expect(result).toBe(expected)
  })
  test('Example 2', () => {
    const input = fs.readFileSync("src/06/example.txt").toString()
    const result = partTwo(input)
    const expected = 6
    expect(result).toBe(expected)
  })
})
