import Block from '../../common/Block';
import './authorization.less';
import { validateInputs } from '../../common/utils';
import { REGEXP_LOGIN, REGEXP_PASSWORD } from '../../common/const';
import AuthController from '../../controllers/AuthController';
import { SignInData } from '../../api/AuthAPI';
import Router from '../../common/Router';

export class AuthorizationPage extends Block<{ onClick: Function }> {
  constructor() {
    super({
      onClick: (event: Event) => {
        if ((event.target as HTMLButtonElement).id === 'button-auth') {
          this.onSignIn();
        } else {
          this.logout();
        }
      },
    });
  }

  async onSignIn() {
    const data = validateInputs({ elementId: 'login-auth', regexp: REGEXP_LOGIN }, { elementId: 'password-auth', regexp: REGEXP_PASSWORD });

    if (data) {
      try {
        await AuthController.signIn(data as SignInData).then(() => {
          console.log('Авторизация выполнена успешно!');
          new Router().go('/messages');
        });
      } catch (error) {
        alert(`Ошибка выполнения запроса авторизации! ${error ? error.reason : ''}`);
      }
    }
  }

  async logout() {
    try {
      await AuthController.logout().then(() => alert('Выход пользователя выполнен успешно!'));
    } catch (error) {
      alert(`Ошибка выполнения запроса /logout! ${error ? error.reason : ''}`);
    }
  }

  render() {
    // language=hbs
    return `
      <div class="form-container">
        <div class="authorisation-form">
          <h2 class="authorisation-form__title">Авторизация</h2>
          <form class="authorisation-form__form">
            <div class="input-block">
              {{{ InputField labelText="Логин:" inputId="login-auth" inputType="text" inputName="login" regexp="${REGEXP_LOGIN}" }}}
              {{{ InputField labelText="Пароль:" inputId="password-auth" inputType="password" inputName="password" regexp="${REGEXP_PASSWORD}" }}}

              <nav class="nav-block">
                {{{ Link to="/signup" text="Регистрация" }}}
              </nav>
            </div>
            <div class="button-block">
              {{{ Button buttonId="button-auth" label="Авторизация" onClick=onClick }}}
              {{{ Button buttonId="button-logout" label="Выход" onClick=onClick }}}
            </div>
          </form>
        </div>
      </div>
    `;
  }
}
