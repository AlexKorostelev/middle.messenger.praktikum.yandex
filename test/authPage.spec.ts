import { registerComponent } from '../src/common/registerComponent';
import Input from '../src/components/Input';
import { AuthorizationPage } from '../src/pages/authorization/authorization';
import Button from '../src/components/Button';
import InputField from '../src/components/InputField';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('Проверка отрисовки компонентов', () => {
  beforeEach(() => {
    registerComponent(Button, 'Button');
    registerComponent(Input, 'Input');
    registerComponent(InputField, 'InputField');

    const authPage = new AuthorizationPage();
    global.document = new JSDOM(authPage.render()).window.document;
  });

  it('Тест компонента AuthorizationPage', () => {
    const form = global.document.getElementById('authorisation-form');
    console.log(form);
  });
});
