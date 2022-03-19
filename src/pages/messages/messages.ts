import Block from '../../common/Block';
import './messages.less';
import { validateInputs } from '../../common/utils';
import { REGEXP_MESSAGE } from '../../common/const';
import { IMessageProps } from '../../components/Message/message';
import { IChatData, store } from '../../common/Store';
import AuthController from '../../controllers/AuthController';
import Router from '../../common/Router';
import ChatController from '../../controllers/ChatController';

interface IChatListProps {
  chatList?: IChatData[];
  messageList?: IMessageProps[];
}

interface IChatList extends IChatListProps {
  onClick: Function;
}

export class MessagesPage extends Block<IChatList> {
  constructor(props: IChatListProps) {
    super({
      ...props,
      onClick: (event: Event) => {
        if ((event.target as HTMLButtonElement).id === 'button-send-message') {
          this.onSendMessage();
        } else {
          this.onLogout();
        }
      },
      onCreateChat: () => this.createChat(),
      onDeleteChat: () => this.deleteChat(),
      onAddUser: () => this.addUserToChat(),
      onDeleteUser: () => this.removeUserFromChat(),
      getProfileInfo: () => this.getProfileInfo(),
    });
  }

  componentDidMount() {
    const router = new Router();
    ChatController.getChats().catch(() => router.go('/signin'));
  }

  addUserToChat() {
    const userId = prompt('Введите ID пользователя для добавления в текущий чат');
    if (userId) {
      ChatController.addUserToChat(store.getState().currentChatId, +userId)
        .then(() => alert('Пользователь успешно добавлен!'))
        .catch((error) => alert(`Ошибка выполнения запроса! ${error ? error.reason : ''}`));
    } else {
      alert('Поле не должно быть пустым!');
    }
  }

  removeUserFromChat() {
    const userId = prompt('Введите ID пользователя для удаления из текущего чата');
    if (userId) {
      ChatController.removeUserFromChat(store.getState().currentChatId, +userId)
        .then(() => alert('Пользователь успешно удалён!'))
        .catch((error) => alert(`Ошибка выполнения запроса! ${error ? error.reason : ''}`));
    } else {
      alert('Поле не должно быть пустым!');
    }
  }

  createChat() {
    const chatTitle = prompt('Введите название чата');
    if (chatTitle) {
      ChatController.createChat(chatTitle)
        .then(() => ChatController.getChats())
        .catch((error) => alert(`Ошибка выполнения запроса! ${error ? error.reason : ''}`));
    } else {
      alert('Название чата не должно быть пустым!');
    }
  }

  deleteChat() {
    const result = window.confirm('Вы действительно хотите удалить этот чат?');

    if (result) {
      ChatController.deleteChat(store.getState().currentChatId)
        .then(() => ChatController.getChats())
        .catch((error) => alert(`Ошибка выполнения запроса! ${error ? error.reason : ''}`));
    }
  }

  async getProfileInfo() {
    try {
      await AuthController.fetchUser();
    } catch {
      alert('Ошибка запроса данных пользователя!');
    }
  }

  onSendMessage() {
    // const data = validateInputs({ elementId: 'message', regexp: REGEXP_MESSAGE });
    // if (data) {
    //   console.log('message sent!', data);
    // }

    const host = 'ya-praktikum.tech';
    fetch(`https://${host}/api/v2/chats/token/2171`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        const { token } = data;
        const userId = 378050; // Александр
        const chatId = 2171; // #затащимтретийспринт

        const socket = new WebSocket(`wss://${host}/ws/chats/${userId}/${chatId}/${token}`);

        setTimeout(() => socket.close(), 5000);

        socket.addEventListener('open', () => {
          console.log('Соединение установлено');

          socket.send(JSON.stringify({
            content: 'Не расслабляйся! Скоро финиш!',
            type: 'message',
          }));
        });

        socket.addEventListener('close', (event) => {
          if (event.wasClean) {
            console.log('Соединение закрыто чисто');
          } else {
            console.log('Обрыв соединения');
          }

          console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });

        socket.addEventListener('message', (event) => {
          console.log('Получены данные', event.data);
        });

        socket.addEventListener('error', (event) => {
          console.log('Ошибка', event.message);
        });
      });
  }

  async onLogout() {
    try {
      await AuthController.logout().then(() => {
        store.clearUserInfo(); // Заметаем следы ;)
        const router = new Router();
        router.go('/signin');
      });
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
        const unreadMessagesCount = !chat.unread_count ? undefined : `"${chat.unread_count}"`;

        let lastMessageTime;
        if (chat.last_message?.time) {
          lastMessageTime = `"${new Date(chat.last_message?.time).toLocaleTimeString()}"`;
        }

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

  getChatTitle() {
    const chatId = store.getState()?.currentChatId;
    if (chatId) {
      const chat = store.getState()?.chatList.filter((item: IChatData) => String(item.id) === chatId);

      if (chat && chat.length > 0) {
        return chat[0].title;
      }
    }

    return undefined;
  }

  render() {
    const currentChatTitle = this.getChatTitle();

    // language=hbs
    return `
        <div class="messages-page-container">
            <div class="block-left">
                <div class="link-container">
                    <div class="button-chat-container">
                        {{{ Button buttonId="button-create-chat" label="Создать чат" onClick=onCreateChat }}}
                        
                        ${currentChatTitle ? `
                          {{{ Button buttonId="button-add-user" label="Пригласить" onClick=onAddUser }}}
                          {{{ Button buttonId="button-delete-user" label="Исключить" onClick=onDeleteUser }}}
                        ` : ''}
                    </div>
                    {{{ Link to="/profile" text="Профиль ❯" }}}
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
                        ${currentChatTitle ? `
                            <img class="profile-logo__img" src="https://help.alueducation.com/system/photos/360113168439/images.png"
                                 height="34px" width="34px" alt="logo {{title}}" />  
                            ` : ''}
                    </div>
                    <div class="profile-info__chat-name">
                        ${currentChatTitle || '↙ Выберите чат из списка'}
                        ${currentChatTitle ? '{{{ Button buttonId="button-delete-chat" label="Удалить" onClick=onDeleteChat }}}' : ''}
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
                        ${currentChatTitle ? '{{{ Button buttonId="button-send-message" label="Отправить" onClick=onClick }}}' : ''}
                    </div>
                </form>
            </div>
        </div>
    `;
  }
}
