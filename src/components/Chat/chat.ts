// import template from './button.hbs';
import Block from '../../common/Block';
import '../../pages/messages/messages.less';
import { getParentDataSetParam } from '../../common/utils';
import { store } from '../../common/Store';
import ChatController from '../../controllers/ChatController';

export interface IChatProps {
  id: string;
  title: string;
  message: string;
  time: string;
  unreadMessages: string;
  avatar: string;
}

interface IChat extends IChatProps {
  events: {
    click: Function;
  };
}

export class Chat extends Block<IChat> {
  constructor(props: IChatProps) {
    super({
      ...props,
      events: {
        click: (e: PointerEvent) => this.setCurrentChatId(e),
      },
    });
  }

  async setCurrentChatId(e: PointerEvent) {
    const id = Number(getParentDataSetParam(e.target as HTMLElement, 'chat-item', 'id'));
    if (id) {
      store.set('currentChatId', id);
      const chatUsers = await ChatController.getChatUsers(id);
      // eslint-disable-next-line no-console
      console.log('Пользователи чата: ', chatUsers);
    }
  }

  render() {
    // language=hbs
    return `
        <div class="chat-item" data-id={{id}}>
            <div class="chat-logo-block">
                <img class="chat-logo-block__img" src={{avatar}} height="60px" width="60px" alt="logo {{title}}" />
            </div>

            <div class="message-container">
                <div class="message-container__title">
                    {{title}}
                </div>
                <div class="message-container__message">
                    {{message}}
                </div>
            </div>

            <div class="chat-item-info">
                <div class="chat-item-info__message-time">
                    {{time}}
                </div>

                <div class="chat-item-info__messages-count">
                    {{unreadMessages}}
                </div>
            </div>
        </div>
    `;
  }
}
