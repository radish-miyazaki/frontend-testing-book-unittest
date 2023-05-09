import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";
import { FormEvent } from "react";
import { deliveryAddresses } from "./fixtures";

const user = userEvent.setup();

export const inputContactNumber = async (inputValues = { name: "田中太郎", phoneNumber: "000-0000-0000" }) => {
  await user.type(
    screen.getByRole("textbox", { name: "電話番号" }),
    inputValues.phoneNumber
  );
  await user.type(
    screen.getByRole("textbox", { name: "お名前" }),
    inputValues.name
  );
  return inputValues;
};

export const inputDeliveryAddress = async (inputValues = {
  postalCode: "167-0051",
  prefectures: "東京都",
  municipalities: "杉並区荻窪1",
  streetNumber: "00-00"
}) => {
  await user.type(
    screen.getByRole("textbox", { name: "郵便番号" }),
    inputValues.postalCode
  );
  await user.type(
    screen.getByRole("textbox", { name: "都道府県" }),
    inputValues.prefectures
  );
  await user.type(
    screen.getByRole("textbox", { name: "市区町村" }),
    inputValues.municipalities
  );
  await user.type(
    screen.getByRole("textbox", { name: "番地番号" }),
    inputValues.streetNumber
  );
  return inputValues;
};

const mockHandleSubmit = () => {
  const mockFn = jest.fn();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: { [k: string]: unknown } = {};
    formData.forEach((v, k) => (data[k] = v));
    mockFn(data);
  };

  return [mockFn, onSubmit] as const;
}

export const clickSubmit = async () => {
  await user.click(screen.getByRole("button", { name: "注文内容の確認へ進む" }));
}

describe("past delivery address does not exist", () => {
  test("delivery input form is displayed", async () => {
    render(<Form />);
    expect(screen.getByRole("group", { name: "連絡先" })).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "お届け先" })).toBeInTheDocument();
  });

  test("input and submit, then send input values", async () => {
    const [mockFn, onSubmit] = mockHandleSubmit();
    render(<Form onSubmit={onSubmit} />);
    const contactNumber = await inputContactNumber();
    const deliveryAddress = await inputDeliveryAddress();
    await clickSubmit();
    expect(mockFn).toHaveBeenCalledWith(
      expect.objectContaining({
        ...contactNumber,
        ...deliveryAddress
      })
    );
  });
});

describe('past delivery address exists', () => {
  test('until answer question, does not select delivery address', () => {
    render(<Form deliveryAddresses={deliveryAddresses} />)
    expect(screen.getByRole('group', { name: '新しいお届け先を登録しますか？' })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: '過去のお届け先' })).toBeDisabled();
  });

  test('select no, and input and submit, then send input values', async () => {
    const [mockFn, onSubmit] = mockHandleSubmit();
    render(<Form deliveryAddresses={deliveryAddresses} onSubmit={onSubmit} />);
    await user.click(screen.getByLabelText('いいえ'));
    expect(screen.getByRole('group', { name: '過去のお届け先' })).toBeInTheDocument();
    const inputValues = await inputContactNumber();
    await clickSubmit();
    expect(mockFn).toHaveBeenCalledWith(
      expect.objectContaining(inputValues)
    );
  });

  test('select yes, and input and submit, then send input values', async () => {
    const [mockFn, onSubmit] = mockHandleSubmit();
    render(<Form deliveryAddresses={deliveryAddresses} onSubmit={onSubmit} />);
    await user.click(screen.getByLabelText('はい'));
    expect(screen.getByRole('group', { name: '新しいお届け先' })).toBeInTheDocument();
    const inputValues = await inputDeliveryAddress();
    await clickSubmit();
    expect(mockFn).toHaveBeenCalledWith(
      expect.objectContaining(inputValues)
    );
  });
});