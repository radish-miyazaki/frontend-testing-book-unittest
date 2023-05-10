import { greetByTime } from "./greetByTime";

describe('greetByTime', () => {
  beforeEach(() => jest.useFakeTimers())
  afterEach(() => jest.useRealTimers())

  test('returns "Good morning" before 12:00', () => {
    jest.setSystemTime(new Date('2021-01-01T11:59:59'))
    expect(greetByTime()).toBe('Good morning')
  });

  test('returns "Good afternoon" before 18:00', () => {
    jest.setSystemTime(new Date('2021-01-01T17:59:59'))
    expect(greetByTime()).toBe('Good afternoon')
  })

  test('returns "Good evening" after 18:00', () => {
    jest.setSystemTime(new Date('2021-01-01T18:00:00'))
    expect(greetByTime()).toBe('Good evening')
  })
})