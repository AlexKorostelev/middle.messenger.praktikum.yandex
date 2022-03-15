import Block from '../../common/Block';
import './authorization.less';
import { validateInputs } from '../../common/utils';
import { REGEXP_LOGIN, REGEXP_PASSWORD } from '../../common/const';

export class AuthorizationPage extends Block<{ onClick: Function }> {
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
              {{{ InputField labelText="Логин:" inputId="login" inputType="text" inputName="login" regexp="${REGEXP_LOGIN}" }}}
              {{{ InputField labelText="Пароль:" inputId="password" inputType="password" inputName="password" regexp="${REGEXP_PASSWORD}" }}}

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
