import Block from '../../common/Block';
import './registration.less';
import { validateInputs } from '../../common/utils';
import {
  REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_PASSWORD, REGEXP_PHONE,
} from '../../common/const';

export class RegistrationPage extends Block<{ onClick: Function }> {
  constructor() {
    super({
      onClick: () => this.validate(),
    });
  }

  validate() {
    validateInputs(
      { elementId: 'email', regexp: REGEXP_EMAIL },
      { elementId: 'login', regexp: REGEXP_LOGIN },
      { elementId: 'first_name', regexp: REGEXP_NAME },
      { elementId: 'second_name', regexp: REGEXP_NAME },
      { elementId: 'phone', regexp: REGEXP_PHONE },
      { elementId: 'password', regexp: REGEXP_PASSWORD },
    );
  }

  render() {
    // language=hbs
    return `
        <div class="form-container">
            <div class="registration-form">
                <h2 class="registration-form__title">Регистрация</h2>
                <form class="registration-form__form">
                    <div class="input-block">
                        {{{ InputField labelText="Почта:" inputId="email" inputType="email" inputName="email" regexp="${REGEXP_EMAIL}" }}}
                        {{{ InputField labelText="Логин:" inputId="login" inputType="text" inputName="login" regexp="${REGEXP_LOGIN}" }}}
                        {{{ InputField labelText="Имя:" inputId="first_name" inputType="text" inputName="first_name" regexp="${REGEXP_NAME}" }}}
                        {{{ InputField labelText="Фамилия:" inputId="second_name" inputType="text" inputName="second_name" regexp="${REGEXP_NAME}" }}}
                        {{{ InputField labelText="Телефон:" inputId="phone" inputType="tel" inputName="phone" regexp="${REGEXP_PHONE}" }}}
                        {{{ InputField labelText="Пароль:" inputId="password" inputType="password" inputName="password" regexp="${REGEXP_PASSWORD}" }}}
                    </div>
                    <div class="button-block">
                        {{{ Button buttonId="button-register" label="Регистрация" onClick=onClick }}}
                    </div>
                </form>
            </div>
        </div>
    `;
  }
}
