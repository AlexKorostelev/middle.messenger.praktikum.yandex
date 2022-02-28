import { registerComponent } from '../../common/registerComponent';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ConversationsPage } from './conversations';
import { renderDom } from '../../common/renderDom';
import Chat from '../../components/Chat';
import Message from '../../components/Message';

registerComponent(Button);
registerComponent(Input);
registerComponent(Chat);
registerComponent(Message);

const conversationsPage = new ConversationsPage({
  messageList: [
    {
      isMyMessage: true,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '15.03.2021',
      messageTime: '14:08:31',
    },
    {
      isMyMessage: false,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '15.03.2021',
      messageTime: '14:09:20',
    },
    {
      isMyMessage: true,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '15.03.2021',
      messageTime: '14:09:41',
    },
    {
      isMyMessage: false,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '15.03.2021',
      messageTime: '14:10:05',
    },
    {
      isMyMessage: true,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '15.03.2021',
      messageTime: '14:10:51',
    },
    {
      isMyMessage: true,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '15.03.2021',
      messageTime: '14:08:31',
    },
    {
      isMyMessage: false,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '15.03.2021',
      messageTime: '14:09:20',
    },
    {
      isMyMessage: true,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '15.03.2021',
      messageTime: '14:09:41',
    },
    {
      isMyMessage: false,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '15.03.2021',
      messageTime: '14:10:05',
    },
    {
      isMyMessage: true,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '15.03.2021',
      messageTime: '14:10:51',
    },
  ],
  chatList: [
    {
      title: 'Чат о погоде',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi tenetur voluptas quis modi vel nobis possimus laboriosam nisi. Omnis?',
      time: '12:45',
      messageCount: '3',
      icon: 'https://help.alueducation.com/system/photos/360113168439/images.png',
    },
    {
      title: 'Чат о настроении',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi tenetur voluptas quis modi vel nobis possimus laboriosam nisi. Omnis?',
      time: '12:45',
      messageCount: '3',
      icon: 'https://help.alueducation.com/system/photos/360113168439/images.png',
    },
    {
      title: 'Чат об инвестициях',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi tenetur voluptas quis modi vel nobis possimus laboriosam nisi. Omnis?',
      time: '12:45',
      messageCount: '5',
      icon: 'https://help.alueducation.com/system/photos/360113168439/images.png',
    },
    {
      title: 'Группа Друзья',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi tenetur voluptas quis modi vel nobis possimus laboriosam nisi. Omnis?',
      time: '13:25',
      messageCount: '3',
      icon: 'https://help.alueducation.com/system/photos/360113168439/images.png',
    },
    {
      title: 'Группа Семья',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi tenetur voluptas quis modi vel nobis possimus laboriosam nisi. Omnis?',
      time: '13:51',
      messageCount: '3',
      icon: 'https://help.alueducation.com/system/photos/360113168439/images.png',
    },
    {
      title: 'Чат о погоде',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi tenetur voluptas quis modi vel nobis possimus laboriosam nisi. Omnis?',
      time: '11:11',
      messageCount: '3',
      icon: 'https://help.alueducation.com/system/photos/360113168439/images.png',
    },
  ],
});

renderDom('#app', conversationsPage);
