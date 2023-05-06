import { ArticleListItem, ItemProps } from "./ArticleListItem";
import { render, screen } from "@testing-library/react";
import React from "react";

const item: ItemProps = {
  id: 'howto-testing-with-typescript',
  title: 'TypeScriptを使ったテストの書き方',
  body: 'テストを書く時、TypeScriptを使うことで、テストの保守性が向上します。'
}

test('display link associated with the article', () => {
  render(<ArticleListItem {...item} />);
  expect(screen.getByRole('link', { name: 'もっと見る' }))
    .toHaveAttribute('href', '/articles/howto-testing-with-typescript');
})