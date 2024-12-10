import { describe, expect, test } from 'bun:test'
import fs from 'fs'
import { partOne } from './09'

describe('Day 9', () => {
  test('Example', () => {
    const input = '2333133121414131402'
    const result = partOne(input)
    const expected = 1928
    expect(result).toBe(expected)
  })
})
