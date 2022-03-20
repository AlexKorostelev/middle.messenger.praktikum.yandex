import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

chai.use(chaiHttp);

describe('mocha tests', () => {
  it('test DOM', () => {
    const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
    // eslint-disable-next-line no-console
    console.log(dom.window.document.querySelector('p').textContent); // "Hello world"
  });
});

// describe('Тест страницы чатов', () => {
//   it('Переход на новую страницу должен менять состояние сущности history', () => {
//     const dom = new JSDOM('test', {
//       url: 'http://localhost:1234/messages',
//       referrer: 'http://localhost:1234/messages',
//       contentType: 'text/html',
//       includeNodeLocations: true,
//       storageQuota: 10000000,
//     });
//
//     JSDOM.fromURL('http://localhost:1234/messages', {}).then((dom) => {
//       console.log(dom.serialize());
//     });
//   });
// });

describe('/POST signin', () => {
  it('Проверка роута авторизации', (done) => {
    const payload = {
      login: 'Alex1985',
      password: 'Alexander1985!',
    };
    chai
      .request('https://ya-praktikum.tech/api/v2/auth')
      .post('/signin')
      .send(payload)
      .end((_, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
