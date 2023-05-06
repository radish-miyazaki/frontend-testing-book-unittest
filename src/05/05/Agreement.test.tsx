import { render, screen } from "@testing-library/react";
import { Agreement } from "./Agreement";

test('fieldset accessible name is quoted by legend', () => {
  render(<Agreement />);
  expect(screen.getByRole('group', { name: '利用規約の同意' }))
    .toBeInTheDocument();
})

test('not checked by default', () => {
  render(<Agreement />);
  expect(screen.getByRole('checkbox')).not.toBeChecked();
})