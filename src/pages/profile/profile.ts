import './profile.less';
import { validateInputs } from '../../common/utils';
import {
  REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_NICKNAME, REGEXP_PHONE,
} from '../../common/const';
import Block from '../../common/Block';
import UserController from '../../controllers/UserController';
import { IProfileData } from '../../api/UserAPI';

interface IProfileProps {
  id?: string;
  email?: string;
  login?: string;
  first_name?: string;
  second_name?: string;
  display_name?: string;
  phone?: string;
  avatar?: string;
}

interface IProfile extends IProfileProps {
  onClick: Function;
}

export class ProfilePage extends Block<IProfile> {
  constructor(props: IProfileProps) {
    super({
      ...props,
      onClick: (event: Event) => {
        if ((event.target as HTMLButtonElement).id === 'button-save-profile') {
          this.onSaveProfile();
        }
      },
    });
  }

  async onSaveProfile() {
    const data = validateInputs(
      { elementId: 'email-profile', regexp: REGEXP_EMAIL },
      { elementId: 'login-profile', regexp: REGEXP_LOGIN },
      { elementId: 'first_name-profile', regexp: REGEXP_NAME },
      { elementId: 'second_name-profile', regexp: REGEXP_NAME },
      { elementId: 'display_name-profile', regexp: REGEXP_NICKNAME },
      { elementId: 'phone-profile', regexp: REGEXP_PHONE },
    );
    if (data) {
      try {
        await UserController.updateProfile(data as IProfileData).then(() => alert('Профиль успешно обновлен!'));
      } catch (error) {
        alert(`Ошибка выполнения запроса обновления профиля! ${error ? error.reason : ''}`);
      }
    }
  }

  render() {
    // 'https://previews.123rf.com/images/denizjdazel/denizjdazel1902/denizjdazel190200045/124841367-.jpg?fj=1'
    const email = !this.props.email ? undefined : `"${this.props.email}"`;
    const login = !this.props.login ? undefined : `"${this.props.login}"`;
    const firstName = !this.props.first_name ? undefined : `"${this.props.first_name}"`;
    const secondName = !this.props.second_name ? undefined : `"${this.props.second_name}"`;
    const displayName = !this.props.display_name ? undefined : `"${this.props.display_name}"`;
    const phone = !this.props.phone ? undefined : `"${this.props.phone}"`;
    const avatar = !this.props.avatar ? '"https://previews.123rf.com/images/denizjdazel/denizjdazel1902/denizjdazel190200045/124841367-.jpg?fj=1"' : `"${this.props.avatar}"`;

    // language=hbs
    return `
        <div class="page-container">
            <div class="profile-settings">
                <div class="profile-form">
                    <h2 class="profile-form__title">Настройки</h2>

                    <form class="profile-form__form">
                        <div class="input-block">

                            {{{ InputField inputValue=${email} labelText="Почта:" inputId="email-profile" inputType="email"
                                inputName="email" regexp="${REGEXP_EMAIL}" }}}

                            {{{ InputField inputValue=${login} labelText="Логин:" inputId="login-profile" inputType="text"
                                inputName="login" regexp="${REGEXP_LOGIN}" }}}

                            {{{ InputField inputValue=${firstName} labelText="Имя:" inputId="first_name-profile" inputType="text"
                                inputName="first_name" regexp="${REGEXP_NAME}" }}}

                            {{{ InputField inputValue=${secondName} labelText="Фамилия:" inputId="second_name-profile" inputType="text"
                                inputName="second_name" regexp="${REGEXP_NAME}" }}}

                            {{{ InputField inputValue=${displayName} labelText="Никнэйм:" inputId="display_name-profile" inputType="text"
                                inputName="display_name" regexp="${REGEXP_NICKNAME}" }}}

                            {{{ InputField inputValue=${phone} labelText="Телефон:" inputId="phone-profile" inputType="tel"
                                inputName="phone" regexp="${REGEXP_PHONE}" }}}

                        </div>

                        <div class="button-block">
                            {{{ Button buttonId="button-save-profile" label="Сохранить" onClick=onClick }}}
                            {{{ Button buttonId="button-cancel-profile" label="Отмена" onClick=onClick }}}
                        </div>

                    </form>
                </div>
                <div class="avatar">
                    <input type="image" name="avatar" src=${avatar} alt="avatar" />
                </div>
            </div>
        </div>
    `;
  }
}
