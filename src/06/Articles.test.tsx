import { render, screen } from '@testing-library/react';
import { Articles } from "./Articles";

test('items is present, then display articles lists', () => {
  const items = [
    { id: 1, title: 'Testing Next.js' },
    { id: 2, title: 'Storybook play function' },
    { id: 3, title: 'Visual Regression Testing' },
  ]

  render(<Articles items={items} isLoading={false} />)
  expect(screen.getByRole('list')).toBeInTheDocument()
})

test('isLading is true, then display "...Loading"', () => {
  render(<Articles items={[]} isLoading={true} />)
  expect(screen.getByText('...Loading')).toBeInTheDocument()
})

test('items is empty, then display "投稿記事がありません"', () => {
  render(<Articles items={[]} isLoading={false} />)
  expect(screen.getByText('投稿記事がありません')).toBeInTheDocument()
})