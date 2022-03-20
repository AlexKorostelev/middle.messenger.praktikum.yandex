import { expect } from 'chai';
// var jsdom = require('mocha-jsdom')

describe('Typescript + Babel usage suite', () => {
  it('should return string correctly', () => {
    expect('Hello mocha').to.equal('Hello mocha');
  });
});

// describe('Проверяем переходы у Роута', () => {
//   jsdom();
//
//   it('Переход на новую страницу должен менять состояние сущности history', () => {
//     window.history.pushState({ page: 'login' }, 'Login', '/login');
//     window.history.pushState({ page: 'register' }, 'Register', '/register');
//
//     expect(window.history.length).to.eq(3);
//   });
// });
