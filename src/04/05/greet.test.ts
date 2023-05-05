import { greet } from "./greet";
import { checkConfig } from "./checkConfig";

test('mock fn carried out', () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toBeCalled();
})

test('mock fn not carried out', () => {
  const mockFn = jest.fn();
  expect(mockFn).not.toBeCalled();
})

test('mock fn records how times it was carried out', () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(1);
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(2);
})

test('mock fn carried out in function', () => {
  const mockFn = jest.fn();
  function greet() {
    mockFn();
  }
  greet();
  expect(mockFn).toHaveBeenCalledTimes(1);
})

test('mock fn records arguments when carried out', () => {
  const mockFn = jest.fn();
  function greet(message: string) {
    mockFn(message);
  }
  greet('Hello!');
  expect(mockFn).toHaveBeenCalledWith('Hello!');
})

test('mock fn can be passed as callback', () => {
  const mockFn = jest.fn();
  greet('Jiro', mockFn);
  expect(mockFn).toHaveBeenCalledTimes(1);
})

test('mock fn can assert object args when carried out', () => {
  const mockFn = jest.fn();
  checkConfig(mockFn);
  expect(mockFn).toHaveBeenCalledWith({
    mock: true,
    feature: { spy: true }
  });
})

test('assert by expect.objectContaining', () => {
  const mockFn = jest.fn();
  checkConfig(mockFn);
  expect(mockFn).toHaveBeenCalledWith(
    expect.objectContaining({
      feature: { spy: true }
    })
  );
})