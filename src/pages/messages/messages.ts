import Block from '../../common/Block';
import './messages.less';
import { validateInputs } from '../../common/utils';
import { REGEXP_MESSAGE } from '../../common/const';
import { IChatProps } from '../../components/Chat/chat';
import { IMessageProps } from '../../components/Message/message';

interface IChatListProps {
  chatList: IChatProps[];
  messageList: IMessageProps[];
}

interface IChatList extends IChatListProps {
  onClick: Function;
}

export class MessagesPage extends Block<IChatList> {
  constructor({ chatList, messageList }: IChatListProps) {
    super({
      chatList,
      messageList,
      onClick: () => this.validate(),
    });
  }

  validate() {
    validateInputs({ elementId: 'message', regexp: REGEXP_MESSAGE });
  }

  messageListToJSX() {
    return this.props.messageList.map((message: IMessageProps) => `{{{ Message isMyMessage=${message.isMyMessage} messageText="${message.messageText}" }}}`).join('');
  }

  chatListToJSX() {
    return this.props.chatList
      .map(
        (chat: IChatProps) => `
        {{{ Chat
        title="${chat.title}"
        message="${chat.message}"
        time="${chat.time}"
        newMessages="${chat.newMessages}"
        icon="${chat.icon}"
      }}}`,
      )
      .join('');
  }

  render() {
    // language=hbs
    return `
        <div class="page-container">
            <div class="block-left">
                <div class="link-container">
                    <a class="link-container__link" href="../../pages/profile/index.html">Профиль ❯</a>
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
                        &#x2807;
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
