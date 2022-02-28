import './password.less';
import { validateInputs } from '../../common/utils';
import { REGEXP_PASSWORD } from '../../common/const';
import Block from '../../common/Block';

export class PasswordPage extends Block {
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
    validateInputs({ elementId: 'oldPassword', regexp: REGEXP_PASSWORD }, { elementId: 'newPassword', regexp: REGEXP_PASSWORD });
  }

  render() {
    // language=hbs
    return `
        <div class="page-container">
            <div class="password-form">
                <h2 class="password-form__title">Сменить пароль</h2>

                <form class="password-form__form">
                    <div class="input-block">
                        {{{ Label inputName="oldPassword" labelText="Текущий пароль:" }}}
                        {{{ Input inputId="oldPassword" inputType="password" inputName="oldPassword" regexp="^(?=.*?[A-ZА-ЯЁ])(?=.*?[0-9]).{8,40}$" }}}
                        {{{ Label inputName="newPassword" labelText="Новый пароль:" }}}
                        {{{ Input inputId="newPassword" inputType="password" inputName="newPassword" regexp="^(?=.*?[A-ZА-ЯЁ])(?=.*?[0-9]).{8,40}$" }}}
                    </div>

                    <div class="button-block">
                        {{{ Button buttonId="button-save" label="Сохранить" onClick=onClick }}}
                        {{{ Button buttonId="button-cancel" label="Отмена" onClick=onClick }}}
                    </div>
                </form>
            </div>
        </div>
    `;
  }
}
