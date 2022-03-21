import { AuthorizationPage } from '../src/pages/authorization/authorization';
import { registerComponent } from '../src/common/registerComponent';
import Input from '../src/components/Input';
import InputField from '../src/components/InputField';
import Button from '../src/components/Button';

const chai = require('chai');
chai.use(require('chai-dom'));

describe('Проверка отрисовки компонентов', () => {
  it('Тест компонента AuthorizationPage', () => {
    registerComponent(Button, 'Button');
    registerComponent(Input, 'Input');
    registerComponent(InputField, 'InputField');

    const authPage = new AuthorizationPage();

    chai.expect(authPage.getContent()).to.have.class('form-container');
    chai.expect(authPage.getContent()?.querySelector('h2')).to.have.text('Авторизация');
    chai.expect(authPage.getContent()?.querySelector('form')).to.have.class('authorisation-form__form');
    chai.expect(authPage.getContent()?.querySelector('button')).to.have.text('\n        Авторизация\n      ');
    chai.expect(authPage.getContent()?.querySelectorAll('input')).to.have.length(2);
    chai.expect(authPage.getContent()?.querySelectorAll('label')).to.have.text(['Логин:', 'Пароль:']);
    chai.expect(authPage.getContent()?.querySelectorAll('nav')).to.have.html('Регистрация');
  });
});
