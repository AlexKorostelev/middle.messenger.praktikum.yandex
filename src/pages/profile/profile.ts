import './profile.less';
import { validateInputs } from '../../common/utils';
import {
  REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_NICKNAME, REGEXP_PHONE,
} from '../../common/const';
import Block from '../../common/Block';

interface IProfileProps {
  email: string;
  login: string;
  firstName: string;
  secondName: string;
  displayName: string;
  phone: string;
  imagePath: string;
}

interface IProfile extends IProfileProps {
  onClick: Function;
}

export class ProfilePage extends Block<IProfile> {
  constructor(props: IProfileProps) {
    super({
      ...props,
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
    const {
      email, login, firstName, secondName, displayName, phone, imagePath,
    } = this.props;

    // language=hbs
    return `
        <div class="page-container">
            <div class="profile-settings">
                <div class="profile-form">
                    <h2 class="profile-form__title">Настройки</h2>

                    <form class="profile-form__form">
                        <div class="input-block">

                        {{{ InputField inputValue="${email}" labelText="Почта:" inputId="email" inputType="email"
                                       inputName="email" regexp="${REGEXP_EMAIL}" }}}

                        {{{ InputField inputValue="${login}" labelText="Логин:" inputId="login" inputType="text"
                                       inputName="login" regexp="${REGEXP_LOGIN}" }}}

                        {{{ InputField inputValue="${firstName}" labelText="Имя:" inputId="first_name" inputType="text" 
                                       inputName="first_name" regexp="${REGEXP_NAME}" }}}

                        {{{ InputField inputValue="${secondName}" labelText="Фамилия:" inputId="second_name" inputType="text"
                                       inputName="second_name" regexp="${REGEXP_NAME}" }}}

                        {{{ InputField inputValue="${displayName}" labelText="Никнэйм:" inputId="display_name" inputType="text"
                                       inputName="display_name" regexp="${REGEXP_NICKNAME}" }}}

                        {{{ InputField inputValue="${phone}" labelText="Телефон:" inputId="phone" inputType="tel"
                                       inputName="phone" regexp="${REGEXP_PHONE}" }}}

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
                    <input type="image" name="avatar" src="${imagePath}" alt="avatar" />
                </div>
            </div>
        </div>
    `;
  }
}
