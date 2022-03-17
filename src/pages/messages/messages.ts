import Block from '../../common/Block';
import './messages.less';
import { validateInputs } from '../../common/utils';
import { REGEXP_MESSAGE } from '../../common/const';
import { IMessageProps } from '../../components/Message/message';
import { IChatData } from '../../common/Store';
import AuthController from '../../controllers/AuthController';
import Router from '../../common/Router';
// import { router } from '../../index';

interface IChatListProps {
  chatList?: IChatData[];
  messageList?: IMessageProps[];
}

interface IChatList extends IChatListProps {
  onClick: Function;
}

export class MessagesPage extends Block<IChatList> {
  constructor(props: IChatListProps) {
    console.log('MessagesPage props: ', props);

    super({
      ...props,
      onClick: (event: Event) => {
        if ((event.target as HTMLButtonElement).id === 'button-send-message') {
          this.onSendMessage();
        } else {
          this.onLogout();
        }
      },
      getProfileInfo: () => this.getProfileInfo(),
    });
  }

  async getProfileInfo() {
    try {
      await AuthController.fetchUser();
    } catch {
      alert('Ошибка запроса данных пользователя!');
    }
  }

  onSendMessage() {
    const data = validateInputs({ elementId: 'message', regexp: REGEXP_MESSAGE });
    if (data) {
      console.log('message sent!', data);
    }
  }

  async onLogout() {
    try {
      await AuthController.logout().then(() => new Router().go('/signin'));
    } catch (error) {
      alert(`Ошибка выполнения запроса /logout! ${error ? error.reason : ''}`);
    }
  }

  messageListToJSX() {
    if (!this.props.messageList) {
      return '';
    }

    return this.props.messageList.map((message: IMessageProps) => `{{{ Message isMyMessage=${message.isMyMessage} messageText="${message.messageText}" }}}`).join('');
  }

  chatListToJSX() {
    if (!this.props.chatList) {
      return '';
    }

    return this.props.chatList
      .map((chat: IChatData) => {
        const avatar = chat.avatar === null ? '"https://help.alueducation.com/system/photos/360113168439/images.png"' : `"${chat.avatar}"`;
        const lastMessage = !chat.last_message?.content ? undefined : `"${chat.last_message?.content}"`;
        const lastMessageTime = !chat.last_message?.time ? undefined : `"${chat.last_message?.time}"`;
        const unreadMessagesCount = !chat.unread_count ? undefined : `"${chat.unread_count}"`;

        return `
          {{{ Chat
          id="${chat.id}"
          title="${chat.title}"
          message=${lastMessage}
          time=${lastMessageTime}
          unreadMessages=${unreadMessagesCount}
          avatar=${avatar}
          }}}
        `;
      })
      .join('');
  }

  render() {
    // language=hbs
    return `
        <div class="messages-page-container">
            <div class="block-left">
                <div class="link-container">
                    {{{ Link to="/profile" text="Профиль ❯" linkHandler=getProfileInfo }}}
                </div>

                <div class="search-block">
                    <input type="search" placeholder="Поиск" class="form-input input-normal" />
                </div>
                <div class="chat-list">
                    ${this.chatListToJSX()}
                </div>
            </div>

            <div class="block-right">
                <div class="profile-info">
                    <div class="profile-logo">
                        <img class="profile-logo__img" src="https://help.alueducation.com/system/photos/360113168439/images.png" height="34px" width="34px" alt="logo {{title}}" />
                    </div>
                    <div class="profile-info__chat-name">
                        Александр
                    </div>
                    <div class="profile-info__settings-icon">
                        {{{ Button buttonId="button-logout" label="Выход" onClick=onClick }}}
                    </div>
                </div>

                <div class="messages-container">
                    ${this.messageListToJSX()}
                </div>

                <form class="send-message-block">
                    {{{ Input inputId="message" inputPlaceholder="Сообщение" inputType="text" inputName="message" regexp="^.*\\S.*$" }}}
                    <div class="button-container">
                        {{{ Button buttonId="button-send-message" label="Отправить" onClick=onClick }}}
                    </div>
                </form>
            </div>
        </div>
    `;
  }
}
