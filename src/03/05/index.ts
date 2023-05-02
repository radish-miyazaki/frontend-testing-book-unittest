const checkRange = (value: number) => {
  if (value < 0 || value > 100) {
    throw new RangeError('value must be between 0 and 100');
  }
}

export const add = (a: number, b: number): number => {
  checkRange(a);
  checkRange(b);

  const result = a + b;
  if (result > 100) {
    return 100;
  }
  return a + b;
}

export const sub = (a: number, b: number): number => {
  checkRange(a);
  checkRange(b);

  const result = a - b;
  if (result < 0) {
    return 0;
  }
  return result;
}

export class HttpError extends Error {}
export class RangeError extends Error {}