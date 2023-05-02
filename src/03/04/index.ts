export const add = (a: number, b: number) => {
  const result = a + b;
  if (result > 100) {
    return 100;
  }

  return result;
}

export const sub = (a: number, b: number) => {
  const result = a - b;
  if (result < 0) {
    return 0;
  }
  return result;
}