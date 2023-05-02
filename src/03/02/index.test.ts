import { add, sub } from ".";

describe('four arithmetic operations', () => {
  describe('add', () => {
    test('1 + 1 = 2', () => {
      expect(add(1, 1)).toBe(2);
    })

    test('1 + 2 = 3', () => {
      expect(add(1, 2)).toBe(3);
    })
  })

  describe('sub', () => {
    test('1 - 1 = 0', () => {
      expect(sub(1, 1)).toBe(0);
    })

    test('2 - 1 = 1', () => {
      expect(sub(2, 1)).toBe(1);
    })
  })
})

