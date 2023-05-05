import * as Fetchers from '../fetchers';
import { httpError } from "../fetchers";
import { getMyArticlesData } from "../fetchers/fixtures";
import { getMyArticleLinksByCategory } from "./index";

jest.mock('../fetchers');

function mockGetMyArticles(status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, 'getMyArticles')
      .mockRejectedValueOnce(httpError);
  }

  return jest
    .spyOn(Fetchers, 'getMyArticles')
    .mockResolvedValueOnce(getMyArticlesData);
}

test('returns null when article with specify tag is not found', async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory('playwright');
  expect(data).toBeNull();
})

test('returns links when article with specify tag is found', async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory('testing');
  expect(data).toMatchObject([
    {
      link: '/articles/howto-testing-with-typescript',
      title: 'TypeScriptを使ったテストの書き方'
    },
    {
      link: '/articles/react-component-testing-with-jest',
      title: 'JestではじめるReactコンポーネントのテスト'
    }
  ])
})

test('rejects when failed to fetch data', async () => {
  mockGetMyArticles(500);
  await getMyArticleLinksByCategory('testing').catch((err) => {
    expect(err).toMatchObject(httpError);
  })
})