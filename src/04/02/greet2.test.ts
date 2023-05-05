import { greet } from "./greet"

jest.mock('./greet')

test('does not return greeting message', () => {
  expect(greet('Taro')).toBeUndefined();
})