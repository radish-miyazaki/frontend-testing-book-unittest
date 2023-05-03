import { greet } from "."

jest.mock('.')

test('does not return greeting message', () => {
  expect(greet('Taro')).toBeUndefined();
})