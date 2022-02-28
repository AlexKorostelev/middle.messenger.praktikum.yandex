import Block from '../../common/Block';
import './registration.less';
import { validateInputs } from '../../common/utils';
import {
  REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_PASSWORD, REGEXP_PHONE,
} from '../../common/const';

export class RegistrationPage extends Block {
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
                        {{{ Label inputName="email" labelText="Почта:" }}}
                        {{{ Input inputId="email" inputType="email" inputName="email" regexp="^[a-zA-Z0-9_-]+@[a-zA-Z]+.[a-zA-Z]+$" }}}

                        {{{ Label inputName="login" labelText="Логин:" }}}
                        {{{ Input inputId="login" inputType="text" inputName="login" regexp="^(?=.{3,20}$)([a-zA-Z0-9_-]*[a-zA-Z_-][a-zA-Z0-9_-]*)$" }}}

                        {{{ Label inputName="first_name" labelText="Имя:" }}}
                        {{{ Input inputId="first_name" inputType="text" inputName="first_name" regexp="^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ]+$" }}}

                        {{{ Label inputName="second_name" labelText="Фамилия:" }}}
                        {{{ Input inputId="second_name" inputType="text" inputName="second_name" regexp="^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ]+$" }}}

                        {{{ Label inputName="phone" labelText="Телефон:" }}}
                        {{{ Input inputId="phone" inputType="tel" inputName="phone" regexp="^\\+?\\d{10,15}$" }}}

                        {{{ Label inputName="password" labelText="Пароль:" }}}
                        {{{ Input inputId="password" inputType="password" inputName="password" regexp="^(?=.*?[A-ZА-ЯЁ])(?=.*?[0-9]).{8,40}$" }}}
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
