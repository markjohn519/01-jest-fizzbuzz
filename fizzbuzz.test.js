import { describe, test, expect } from '@jest/globals'

import fizzbuzz from './fizzbuzz.js'

describe('fizzbuzz', () => {
  test('return "fizz" if the parameter is divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
  })

  test('return "buzz" if the parameter is divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
  })

  test('return "fizzbuzz" if the parameter is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
  })

  test('return "" if the parameter is not divisible by either 3or 5', () => {
    expect(fizzbuzz(1)).toBe('')
    expect(fizzbuzz(7)).toBe('')
  })
})
