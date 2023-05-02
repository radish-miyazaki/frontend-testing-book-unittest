import { add, sub } from ".";

test('it returns sum of two arguments', () => {
  expect(add(50, 50)).toBe(100);
})

test("it's max value is 100", () => {
  expect(add(70, 80)).toBe(100);
})

test('it returns subtraction of two arguments', () => {
  expect(sub(51, 50)).toBe(1);
})

test("it's min value is 0", () => {
  expect(sub(50, 51)).toBe(0);
})
