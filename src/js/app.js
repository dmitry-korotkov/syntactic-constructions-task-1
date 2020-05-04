export default function getNumber(count) {
  const number = Number(count);
  try {
    if (typeof count !== 'number') {
      throw Error('Ошибка! Ввод не является числом в десятичной системе счисления');
    }
  } catch (e) {
    console.log(e.message);
  }
  return number;
}
