import { describe, test, assert } from 'vitest'
import { sum, increment } from './helpers'

describe('sum', function () {
  test('add 1+2 to equal 3', function () {
    assert.equal(sum(1, 2), 3)
  })
})

describe('increment', function () {
  test('increment the current number by 1', function () {
    assert.equal(increment(0, 10), 1)
  })

  test('does not increment the current number over the max', function () {
    assert.equal(increment(10, 10), 10)
  })

  test('has a default max of 10', function () {
    assert.equal(increment(10), 10)
  })
})