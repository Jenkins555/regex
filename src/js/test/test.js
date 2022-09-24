import { Validator } from '../app';

test('validate1', () => {
  const user = new Validator('Ппп');
  expect(user.validateUsername()).toEqual('Неверный формат логина'); // Проверка латиницы
});

test('validate2', () => {
  const user = new Validator('qwerty12345');
  expect(user.validateUsername()).toEqual('Неверный формат логина'); // Проверка цифр
});

test('validate3', () => {
  const user = new Validator('_qw');
  expect(user.validateUsername()).toEqual('Неверный формат логина'); // Проверка первого символа
});

test('validate4', () => {
  const user = new Validator('qw-');
  expect(user.validateUsername()).toEqual('Неверный формат логина'); // Проверка последнего символа
});

test('validate5', () => {
  const user = new Validator('login');
  expect(user.validateUsername()).toEqual('login'); // Проверка верного логина
});
