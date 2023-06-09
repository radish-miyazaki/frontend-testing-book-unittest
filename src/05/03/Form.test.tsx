import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import { Form } from "./Form";

test('display name', () => {
  render(<Form name="taro" />)
  expect(screen.getByText('taro')).toBeInTheDocument();
})

test('display button', () => {
  render(<Form name="taro" />)
  expect(screen.getByRole('button')).toBeInTheDocument();
})

test('display heading', () => {
  render(<Form name="taro" />)
  expect(screen.getByRole('heading')).toHaveTextContent('アカウント情報');
})

test('when press button, carry out event handler', () => {
  const mockFn = jest.fn();
  render(<Form name="taro" onSubmit={mockFn} />);
  fireEvent.click(screen.getByRole('button'));
  expect(mockFn).toHaveBeenCalled();
})

test('Snapshot: account name "jiro" is displayed', () => {
  const { container } = render(<Form name="jiro" />);
  expect(container).toMatchSnapshot();
})

test('logRoles: check role and accessibility name', () => {
  const { container } = render(<Form name="jiro" />);
  logRoles(container);
})