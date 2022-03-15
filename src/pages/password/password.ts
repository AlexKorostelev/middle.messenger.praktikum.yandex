import './password.less';
import { validateInputs } from '../../common/utils';
import { REGEXP_PASSWORD } from '../../common/const';
import Block from '../../common/Block';

export class PasswordPage extends Block<{ onClick: Function }> {
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
                        {{{ InputField labelText="Текущий пароль:" inputId="oldPassword" inputType="password"
                                       inputName="oldPassword" regexp="${REGEXP_PASSWORD}" }}}
                        {{{ InputField labelText="Новый пароль:" inputId="newPassword" inputType="password"
                                       inputName="newPassword" regexp="${REGEXP_PASSWORD}" }}}  
                    </div>

                    <div class="button-block">
                        {{{ Button buttonId="button-save-new-password" label="Сохранить" onClick=onClick }}}
                        {{{ Button buttonId="button-cancel-new-password" label="Отмена" onClick=onClick }}}
                    </div>
                </form>
            </div>
        </div>
    `;
  }
}
