import { FormEvent } from "react";

type Props = {
  name: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export const Form = ({ name, onSubmit } : Props) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit?.(e)
    }}>
      <h2>アカウント情報</h2>
      <p>{name}</p>
      <div>
        <button>編集する</button>
      </div>
    </form>
  )
}