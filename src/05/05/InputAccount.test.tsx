import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { InputAccount } from "./InputAccount";

const user = userEvent.setup();

test('input email address', async () => {
  render(<InputAccount />);
  const textbox = screen.getByRole('textbox', { name: 'メールアドレス' })
  const value = 'taro.tanaka@example.com';
  await user.type(textbox, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
})

test('input password', async () => {
  render(<InputAccount />);
  const password = screen.getByPlaceholderText('8文字以上で入力');
  const value = "password";
  await user.type(password, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
})