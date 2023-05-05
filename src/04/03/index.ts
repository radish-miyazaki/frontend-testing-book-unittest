import * as fetchers from "../fetchers";
import { getGreet } from "./greet";
import { httpError } from "../fetchers";
jest.mock('./fetchers');

test('success to fetch data: without name', async () => {
  jest.spyOn(fetchers, 'getMyProfile').mockResolvedValueOnce({
    id: 'xxxxxx-123456',
    email: "taroyamada@myapi.testing.com",
    age: 30,
  });

  await expect(getGreet()).resolves.toBe('Hello, anonymous user!');
})

test('success to fetch data: with name', async () => {
  jest.spyOn(fetchers, 'getMyProfile').mockResolvedValueOnce({
    id: 'xxxxxx-123456',
    name: "Taro Yamada",
    email: "taroyamada@myapi.testing.com",
    age: 30,
  });

  await expect(getGreet()).resolves.toBe('Hello, Taro Yamada!')
});

test('failed to fetch data', async () => {
  jest.spyOn(fetchers, 'getMyProfile').mockRejectedValueOnce(httpError);
  await expect(getGreet()).rejects.toMatchObject({
    err: { message: 'internal server error'}
  });
})

test('failed to fetch data: throw error', async () => {
  expect.assertions(1);
  jest.spyOn(fetchers, 'getMyProfile').mockRejectedValueOnce(httpError);
  try {
    await getGreet();
  } catch(err) {
    expect(err).toMatchObject(httpError);
  }
})