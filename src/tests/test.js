import getNumber from '../js/app';

describe('getMostHealthy', () => {
  test('getError', () => {
    const someNumber = 'sd231';
    expect(() => {
      getNumber(someNumber);
    }).toThrow();
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
  test('getError', () => {
    const someNumber = 'sometext';
    expect(() => {
      getNumber(someNumber);
    }).toThrow();
  });
  test('getNumber', () => {
    const someNumber = '1244a';
    const result = getNumber(someNumber);
    expect(result).toBe(1244);
  });
  test('getError', () => {
    const someNumber = '0x12';
    expect(() => {
      getNumber(someNumber);
    }).toThrow();
  });
});
