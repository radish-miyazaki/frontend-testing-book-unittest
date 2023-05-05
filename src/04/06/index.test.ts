import * as Fetchers from "../fetchers";
import { ArticleInput } from "../fetchers/type";
import { httpError, postMyArticle } from "../fetchers";
import { checkLength } from "./index";
import { postMyArticleData } from "../fetchers/fixtures";

jest.mock('../fetchers');

function mockPostMyArticle(input: ArticleInput, status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, 'postMyArticle')
      .mockRejectedValueOnce(httpError);
  }

  try {
    checkLength(input.title);
    checkLength(input.body);
    return jest
      .spyOn(Fetchers, 'postMyArticle')
      .mockResolvedValueOnce({...postMyArticleData, ...input });
  } catch(err) {
    return jest
      .spyOn(Fetchers, 'postMyArticle')
      .mockRejectedValueOnce(httpError);
  }
}

function inputFactory(input?: Partial<ArticleInput>): ArticleInput {
  return {
    tags: ['testing'],
    title: 'TypeScriptを使ったテストの書き方',
    body: 'テストを書く時、TypeScriptを使うことで、テストの保守性が向上します。',
    ...input
  }
}

test('returns success response when validation is passed', async () => {
  const input = inputFactory();
  const mock = mockPostMyArticle(input);
  const data = await postMyArticle(input);
  expect(data).toMatchObject(expect.objectContaining(input));
  expect(mock).toHaveBeenCalled();
})

test('rejects when validation is failed', async () => {
  expect.assertions(2)
  const input = inputFactory({ title: '', body: '' });
  const mock = mockPostMyArticle(input);
  await postMyArticle(input).catch(err => {
    expect(err).toMatchObject({ err: { message: expect.anything() }})
    expect(mock).toHaveBeenCalled()
  })
})

test('rejects when data fetching is failed', async () => {
  expect.assertions(2)
  const input = inputFactory();
  const mock = mockPostMyArticle(input, 500);
  await postMyArticle(input).catch(err => {
    expect(err).toMatchObject({ err: { message: expect.anything() }})
    expect(mock).toHaveBeenCalled()
  })
})