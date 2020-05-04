import getNumber from '../js/app';

describe('getMostHealthy', () => {
  test('getNan', () => {
    const someNumber = 'sd231';
    const result = getNumber(someNumber);
    expect(result).toBe(NaN);
  });
  test('getNumber', () => {
    const someNumber = '123213';
    const result = getNumber(someNumber);
    expect(result).toBe(123213);
  });
  test('getNumber', () => {
    const someNumber = 14325;
    const result = getNumber(someNumber);
    expect(result).toBe(14325);
  });
  test('getNan', () => {
    const someNumber = 'sometext';
    const result = getNumber(someNumber);
    expect(result).toBe(NaN);
  });
  test('getNan', () => {
    const someNumber = '1244a';
    const result = getNumber(someNumber);
    expect(result).toBe(NaN);
  });
});
