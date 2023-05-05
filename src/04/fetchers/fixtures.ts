import { Article, Articles } from "./type";

export const getMyArticlesData: Articles = {
  articles: [
    {
      id: 'howto-testing-with-typescript',
      createdAt: '2021-01-01T00:00:00.000Z',
      tags: ['typescript', 'testing'],
      title: 'TypeScriptを使ったテストの書き方',
      body: 'テストを書く時、TypeScriptを使うことで、テストの保守性が向上します。'
    },
    {
      id: 'nextjs-link-component',
      createdAt: '2021-01-02T00:00:00.000Z',
      tags: ['nextjs', 'react'],
      title: 'Next.jsのLinkコンポーネントの使い方',
      body: 'Next.jsの画面遷移には、Linkコンポーネントを使います。'
    },
    {
      id: 'react-component-testing-with-jest',
      createdAt: '2021-01-03T00:00:00.000Z',
      tags: ['react', 'testing'],
      title: 'JestではじめるReactコンポーネントのテスト',
      body: 'Jestは単体テストとして、UIコンポーネントのテストにも使えます。'
    }
  ]
}

export const postMyArticleData: Article = {
  id: "xxxxxxx-123456",
  createdAt: "2022-07-19T22:38:41.005Z",
  tags: ["testing", "react"],
  title: "Jest ではじめる React のコンポーネントテスト",
  body: "Jest は単体テストとして、UIコンポーネントのテストが可能です。",
};