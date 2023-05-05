import { greet } from "./greet";

test('return greeting message', () => {
  expect(greet('Taro')).toBe('Hello Taro!');
})