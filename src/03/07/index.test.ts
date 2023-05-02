import { timeout, wait } from "."

describe('async', () => {
  test('wait specific duration, then resolve with duration', () => {
    return wait(50).then((duration) => {
      expect(duration).toBe(50);
    })
  })

  test('wait specific duration, then resolve with duration', () => {
    return expect(wait(50)).resolves.toBe(50);
  })

  test('wait specific duration, then resolve with duration',async () => {
    await expect(wait(50)).resolves.toBe(50);
  })

  test('wait specific duration, then resolve with duration', async () => {
    expect(await wait(50)).toBe(50);
  })

  test('wait specifig duration, then reject with duration', () => {
    return timeout(50).catch((duration) => {
      expect(duration).toBe(50);
    })
  })

  test('wait specifig duration, then reject with duration', () => {
    return expect(timeout(50)).rejects.toBe(50);
  })

  test('wait specifig duration, then reject with duration', async () => {
    await expect(timeout(50)).rejects.toBe(50);
  })

  test('wait specifig duration, then reject with duration', async () => {
    expect.assertions(1);
    try {
      await timeout(50);
    } catch (err) {
      expect(err).toBe(50);
    }
  })

  test("does not return Promise, test suite will finish before resolve Promise", async () => {
    await expect(wait(2000)).resolves.not.toBe(3000);
  })
})