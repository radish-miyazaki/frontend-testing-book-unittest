export class ValidationError extends Error {}

export const checkPhoneNumber = (value: any) => {
  if (!value.match(/^[0-9\-]+$/)) {
    throw new ValidationError();
  }
}