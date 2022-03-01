// import template from './button.hbs';
import Block from '../../common/Block';
import '../../pages/messages/messages.less';

export interface IChatProps {
  title: string;
  message: string;
  time: string;
  newMessages: string;
  icon: string;
}

export class Chat extends Block {
  constructor({
    title, message, time, newMessages, icon,
  }: IChatProps) {
    super({
      title,
      message,
      time,
      newMessages,
      icon,
      events: {
        // eslint-disable-next-line no-console
        click: () => console.log('Select chat'),
      },
    });
  }

  render() {
    // language=hbs
    return `
        <div class="chat-item">
            <div class="chat-logo-block">
                <img class="chat-logo-block__img" src={{icon}} height="60px" width="60px" alt="logo {{title}}" />
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
                    {{newMessages}}
                </div>
            </div>
        </div>
    `;
  }
}
