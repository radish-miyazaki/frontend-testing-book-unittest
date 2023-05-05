import { greetByTime } from './index';

/*
  beforeAll(() => console.log('1 - beforeAll'));
  afterAll(() => console.log('1 - afterAll'));
  beforeEach(() => console.log('1 - beforeEach'));
  afterEach(() => console.log('1 - afterEach'));

  test('', () => console.log('1 - test'))

  describe('Scoped / Nested block', () => {
    beforeAll(() => console.log('2 - beforeAll'));
    afterAll(() => console.log('2 - afterAll'));
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));

    test('', () => console.log('2 - test'))
  })
 */

describe('greetByTime', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  test('returns "Good morning" before 12', () => {
    jest.setSystemTime(new Date(2023, 5, 5, 11, 59, 59));
    expect(greetByTime()).toBe('Good morning');
  })

  test('returns "Good afternoon" between 12 and 18', () => {
    jest.setSystemTime(new Date(2023, 5, 5, 12, 0, 0));
    expect(greetByTime()).toBe('Good afternoon');
  })

  test('returns "Good evening" after 18', () => {
    jest.setSystemTime(new Date(2023, 5, 5, 18, 0, 0));
    expect(greetByTime()).toBe('Good evening');
  })
})