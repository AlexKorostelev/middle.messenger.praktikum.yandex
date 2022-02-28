// import template from './button.hbs';
import Block from '../../common/Block';
import '../../pages/conversations/conversations.less';

export interface IChatProps {
  title: string;
  message: string;
  time: string;
  messageCount: string;
  icon: string;
}

export class Chat extends Block {
  constructor({ title, message, time, messageCount, icon }: IChatProps) {
    super({
      title,
      message,
      time,
      messageCount,
      icon,
      events: {
        click: () => console.log('click!'),
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
                    {{messagecount}}
                </div>
            </div>
        </div>
    `;
  }
}
