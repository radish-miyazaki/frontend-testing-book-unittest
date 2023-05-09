import { Result } from "./type";

const handleResponse = async (res: Response) => {
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

const host = (path: string) => `https://myapi.testing.com${path}`;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
}

export const postMyAddress = (values: unknown): Promise<Result> => {
  return fetch(host('/my/address'), {
    method: "POST",
    body: JSON.stringify(values),
    headers,
  }).then(handleResponse)
}