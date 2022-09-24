/// 1.Создать класс Validator///
export class Validator {
  constructor(login) {
    this.login = login;
  }

  validateUsername() { /// метод проверки
    const re1 = /\W/gi; /// Латинские буквы
    const re2 = /\d{4,}/g;/// Более трёх цыфр подряд
    const re3 = /_|-/;/// Символы
    if (re1.test(this.login) === true
    || re2.test(this.login) === true
    || re3.test(this.login[0]) === true
    || this.login[this.login.length - 1] === true) {
      return 'Неверный формат логина'; /// если исключения истинны, выводим предупреждение
    }
    return this.login;
  }
}
