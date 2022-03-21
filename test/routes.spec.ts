import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('Проверка авторизации', () => {
  it('/POST signin', (done) => {
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
