import { StringCalculator } from '../src/StringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });
  test('should return the number for a single number string', () => {
    expect(calculator.add("1")).toBe(1);
  });
  test('should return the sum of two numbers separated by a comma', () => {
    expect(calculator.add("1,2")).toBe(3);
  });
});
