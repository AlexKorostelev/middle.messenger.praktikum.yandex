import Block from '../../common/Block';
import './authorisation.less';
import { validateInputs } from '../../common/utils';
import { REGEXP_LOGIN, REGEXP_PASSWORD } from '../../common/const';

export class AuthorisationPage extends Block {
  constructor() {
    super({
      onClick: () => this.validate(),
    });
  }

  validate() {
    validateInputs({ elementId: 'login', regexp: REGEXP_LOGIN }, { elementId: 'password', regexp: REGEXP_PASSWORD });
  }

  render() {
    // language=hbs
    return `
      <div class="form-container">
        <div class="authorisation-form">
          <h2 class="authorisation-form__title">Авторизация</h2>
          <form class="authorisation-form__form">
            <div class="input-block">
              {{{ Label inputName="login" labelText="Логин:" }}}
              {{{ Input inputId="login" inputType="text" inputName="login" regexp="^(?=.{3,20}$)([a-zA-Z0-9_-]*[a-zA-Z_-][a-zA-Z0-9_-]*)$" }}}
              {{{ Label inputName="password" labelText="Пароль:" }}}
              {{{ Input inputId="password" inputType="password" inputName="password" regexp="^(?=.*?[A-ZА-ЯЁ])(?=.*?[0-9]).{8,40}$" }}}

              <nav class="nav-block">
                <a class="nav-block__link" href="../registration/index.html">Регистрация</a>
              </nav>
            </div>
            <div class="button-block">
              {{{ Button buttonId="button-auth" label="Авторизация" onClick=onClick }}}
            </div>
          </form>
        </div>
      </div>
    `;
  }
}
