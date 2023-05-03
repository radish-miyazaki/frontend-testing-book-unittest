import { greet } from ".";

test('return greeting message', () => {
  expect(greet('Taro')).toBe('Hello Taro!');
})