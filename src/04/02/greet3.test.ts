import { sayGoodBye } from "./greet";

jest.mock('./greet', () => ({
  sayGoodBye: (name: string) => `Good bye ${name}!`
}))

test('returns good bye message', () => {
  const message = `${sayGoodBye('Taro')} See you.`;
  expect(message).toBe('Good bye Taro! See you.')
})