import { add, sub, RangeError } from ".";


describe('four arithmetic operations', () => {
  describe('add', () => {
    test('throws error when value is not between 0 and 100', () => {
      const message = 'value must be between 0 and 100';

      expect(() => add(-10, 110)).toThrow(message);
      expect(() => add(0, 110)).toThrow(message);
      expect(() => add(-10, 100)).toThrow(message);
      expect(() => add(-10, 110)).toThrow(RangeError);
    })
  })

  describe('sub', () => {
    test('throws error when value is not between 0 and 100', () => {
      const message = 'value must be between 0 and 100';

      expect(() => sub(-10, 110)).toThrow(message);
      expect(() => sub(0, 110)).toThrow(message);
      expect(() => sub(-10, 100)).toThrow(message);
      expect(() => add(-10, 110)).toThrow(RangeError);
    })
  })
})

