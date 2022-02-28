import './profile.less';
import { validateInputs } from '../../common/utils';
import {
  REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_NICKNAME, REGEXP_PHONE,
} from '../../common/const';
import Block from '../../common/Block';

export class ProfilePage extends Block {
  constructor() {
    super({
      onClick: (event: Event) => {
        if ((event.target as HTMLButtonElement).id === 'button-save') {
          this.validate();
        }
      },
    });
  }

  validate() {
    validateInputs(
      { elementId: 'email', regexp: REGEXP_EMAIL },
      { elementId: 'login', regexp: REGEXP_LOGIN },
      { elementId: 'first_name', regexp: REGEXP_NAME },
      { elementId: 'second_name', regexp: REGEXP_NAME },
      { elementId: 'display_name', regexp: REGEXP_NICKNAME },
      { elementId: 'phone', regexp: REGEXP_PHONE },
    );
  }

  render() {
    // language=hbs
    return `
        <div class="page-container">
            <div class="profile-settings">
                <div class="profile-form">
                    <h2 class="profile-form__title">Настройки</h2>

                    <form class="profile-form__form">
                        <div class="input-block">
                            {{{ Label inputName="email" labelText="Почта:" }}}
                            {{{ Input inputId="email" inputType="email" inputName="email" regexp="^[a-zA-Z0-9_-]+@[a-zA-Z]+.[a-zA-Z]+$" }}}

                            {{{ Label inputName="login" labelText="Логин:" }}}
                            {{{ Input inputId="login" inputType="text" inputName="login" regexp="^(?=.{3,20}$)([a-zA-Z0-9_-]*[a-zA-Z_-][a-zA-Z0-9_-]*)$" }}}

                            {{{ Label inputName="first_name" labelText="Имя:" }}}
                            {{{ Input inputId="first_name" inputType="text" inputName="first_name" regexp="^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ]+$" }}}

                            {{{ Label inputName="second_name" labelText="Фамилия:" }}}
                            {{{ Input inputId="second_name" inputType="text" inputName="second_name" regexp="^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ]+$" }}}

                            {{{ Label inputName="display_name" labelText="Никнэйм:" }}}
                            {{{ Input inputId="display_name" inputType="text" inputName="display_name" regexp="^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ]+$" }}}

                            {{{ Label inputName="phone" labelText="Телефон:" }}}
                            {{{ Input inputId="phone" inputType="tel" inputName="phone" regexp="^\\+?\\d{10,15}$" }}}

                            <nav class="nav-block">
                                <a class="nav-block__link" href="../password/index.html">Сменить пароль</a>
                            </nav>
                        </div>

                        <div class="button-block">
                            {{{ Button buttonId="button-save" label="Сохранить" onClick=onClick }}}
                            {{{ Button buttonId="button-cancel" label="Отмена" onClick=onClick }}}
                        </div>

                    </form>
                </div>
                <div class="avatar">
                    <input type="image" name="avatar" src="https://previews.123rf.com/images/denizjdazel/denizjdazel1902/denizjdazel190200045/124841367-.jpg?fj=1" alt="avatar" />
                </div>
            </div>
        </div>
    `;
  }
}
