import { FormEvent } from "react";

export const handleSubmit = (callback: (values: any) => Promise<void> | void) => {
  return (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values: { [k: string]: unknown } = {};
    formData.forEach((v, k) => (values[k] = v))
    return callback(values);
  }
}