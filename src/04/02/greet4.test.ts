import { greet, sayGoodBye } from './greet';

jest.mock('./greet', () => ({
  ...jest.requireActual('./greet'),
  sayGoodBye: (name: string) => `Good bye ${name}!`
}))

test('returns greeting message', () => {
  expect(greet('Taro')).toBe('Hello Taro!');
})

test('returns good bye message', () => {
  const message = `${sayGoodBye('Taro')} See you.`;
  expect(message).toBe('Good bye Taro! See you.');
})