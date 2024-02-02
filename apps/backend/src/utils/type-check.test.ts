import { assertIsNonNullable } from './type-check.js'

describe('type-check', () => {
  test('与えられた値がnullの場合、エラーを投げるか', () => {
    expect(() => {
      assertIsNonNullable(null)
    }).toThrow()
  })

  test('与えられた値がundefinedの場合、エラーを投げるか', () => {
    expect(() => {
      assertIsNonNullable(undefined)
    }).toThrow()
  })

  test('与えられた値がnullでもundefinedでもない場合、何もしないか', () => {
    expect(() => {
      assertIsNonNullable(1)
    }).not.toThrow()
  })
})
