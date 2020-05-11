export default function getNumber(count) {
  const parsedCount = parseInt(count, 10);
  const parsedparsedCountHexadecimal = parseInt(count, 16);
  try {
    if (Number.isNaN(parsedCount) || (parsedCount === 0 && parsedparsedCountHexadecimal !== 0)) {
      throw Error('Ошибка! Ввод не является числом в десятичной системе счисления');
    }
  } catch (e) {
    throw Error('Ошибка! Ввод не является числом в десятичной системе счисления');
  }
  return parsedCount;
}
