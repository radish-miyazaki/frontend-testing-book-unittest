import { clickSubmit, inputContactNumber, inputDeliveryAddress } from "../06/Form.test";
import { mockPostMyAddress } from "./fetchers/mock";
import { render, screen } from "@testing-library/react";
import { RegisterAddress } from "./RegisterAddress";

jest.mock('./fetchers');

beforeEach(() => {
  jest.resetAllMocks();
})

const fillValuesAndSubmit = async () => {
  const contactNumber = await inputContactNumber();
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
};

test('success - display "登録しました" message', async () => {
  const mockFn = mockPostMyAddress();
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText('登録しました')).toBeInTheDocument();
})

test('failed - display "登録に失敗しました" message', async () => {
  const mockFn = mockPostMyAddress(500);
  render(<RegisterAddress />)
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText('登録に失敗しました')).toBeInTheDocument();
})

const fillInValidValuesAndSubmit = async () => {
  const contactNumber = await inputContactNumber({
    name: '田中太郎',
    phoneNumber: 'abc-def-ghi'
  });
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
}

test('validation error - display "不正な入力値が含まれています" message', async () => {
  const mockFn = mockPostMyAddress();
  render(<RegisterAddress />);
  await fillInValidValuesAndSubmit();
  expect(mockFn).not.toHaveBeenCalled();
  expect(screen.getByText('不正な入力値が含まれています')).toBeInTheDocument();
})

test('undefined error - display "不明なエラーが発生しました" message', async () => {
  render(<RegisterAddress />);
  await fillValuesAndSubmit();
  expect(screen.getByText('不明なエラーが発生しました')).toBeInTheDocument();
})

test('Snapshot: display register form', async () => {
  const mockFn = mockPostMyAddress();
  const { container } = render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(container).toMatchSnapshot();
})