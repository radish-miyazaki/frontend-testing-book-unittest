import { render, screen } from "@testing-library/react";
import { Form } from "./Form";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("'サインアップ' button is disabled", () => {
  render(<Form />);
  expect(screen.getByRole('button', { name: 'サインアップ' })).toBeDisabled();
})

test("when '利用規約の同意' checkbox is checked, 'サインアップ' button is enabled", async () => {
  render(<Form />);
  await user.click(screen.getByRole('checkbox'));
  expect(screen.getByRole('button', { name: 'サインアップ' })).toBeEnabled();
})

test('form accessible name is quoted by heading', () => {
  render(<Form />);
  expect(screen.getByRole('form', { name: '新規アカウント登録' })).toBeInTheDocument();
})