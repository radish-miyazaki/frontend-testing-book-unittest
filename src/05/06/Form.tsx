import { ComponentProps, FormEvent, useState } from "react";
import { DeliveryAddress } from "./DeliveryAddress";
import { PastDeliveryAddress } from "./PastDeliveryAddress";
import { RegisterDeliveryAddress } from "./RegisterDeliveryAddress";
import { ContactNumber } from "./ContactNumber";

export type AddressOption = ComponentProps<'option'> & {
  id: string;
}

export type Props = {
  deliveryAddresses?: AddressOption[];
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export const Form = ({ deliveryAddresses, onSubmit }: Props) => {
  const [registerNew, setRegisterNew] = useState<boolean | undefined>(undefined);

  return (
    <form onSubmit={onSubmit}>
      <h2>お届け先情報の入力</h2>
      <ContactNumber />
      {deliveryAddresses?.length ? (
        <>
          <RegisterDeliveryAddress onChange={setRegisterNew} />
          {registerNew ? (
            <DeliveryAddress title="新しいお届け先" />
          ) : (
            <PastDeliveryAddress disabled={registerNew === undefined} options={deliveryAddresses}  />
          )}
        </>
      ) : (
        <DeliveryAddress />
      )}
      <hr />
      <div>
        <button>注文内容の確認へ進む</button>
      </div>
    </form>
  )
}