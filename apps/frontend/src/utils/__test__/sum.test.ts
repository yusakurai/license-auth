import { expect, test } from 'vitest'

import { sum } from '../sum'

test('adds 1 + 2 to equal 3', () => {
  // sum関数の引数に1,2を渡している
  // 1 + 2 が 3 になるので、3という値が返ってくることを期待している
  expect(sum(1, 2)).toBe(3)
})
