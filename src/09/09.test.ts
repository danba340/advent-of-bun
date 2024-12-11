import { describe, expect, test } from 'bun:test'
import fs from 'fs'
import { partOne, partTwo } from './09'

describe('Day 9', () => {
  test('Example', () => {
    const input = '2333133121414131402'
    const result = partOne(input)
    const expected = 1928
    expect(result).toBe(expected)
  })
  test('Example 2', () => {
    const input = '2333133121414131402'
    const result = partTwo(input)
    const expected = 2858
    expect(result).toBe(expected)
  })
})
