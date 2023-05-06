import { ArticleList } from "./ArticleList";
import { render, screen, within } from "@testing-library/react";
import { items } from "./fixture";

test('display lists by the number of articles', () => {
  render(<ArticleList items={items} />);
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
})

test('display lists', () => {
  render(<ArticleList items={items} />);
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();

  // 取得対象ノードを上記のlistに含まれるlistitemだけに絞り込み、要素数をチェック
  expect(within(list).getAllByRole('listitem')).toHaveLength(3);
})

test("when items is empty, display '投稿記事がありません'", () => {
  render(<ArticleList items={[]} />);
  const list = screen.queryByRole('list');
  expect(list).not.toBeInTheDocument();
  expect(list).toBeNull();
  expect(screen.getByText('投稿記事がありません')).toBeInTheDocument();
})