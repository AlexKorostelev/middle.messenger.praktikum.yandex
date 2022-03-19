import BaseAPI from './BaseAPI';
import { IProfileData } from './UserAPI';

export interface IChatData {
  first_name: 'string';
  second_name: 'string';
  display_name: 'string';
  login: 'string';
  email: 'string';
  phone: 'string';
}

export default class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getChatUsers(chatId: string): Promise<IProfileData[]> {
    return this.http.get(`/${chatId}/users`);
  }

  addUserToChat(chatId: number, userId: number) {
    return this.http.put('/users', { users: [userId], chatId });
  }

  removeUserFromChat(chatId: number, userId: number) {
    return this.http.delete('/users', { users: [userId], chatId });
  }

  create(chatTitle: string): Promise<unknown> {
    return this.http.post('', { title: chatTitle });
  }

  update = undefined;

  read(): Promise<unknown> {
    return this.http.get('');
  }

  delete(chatId: string): Promise<unknown> {
    return this.http.delete('', { chatId });
  }
}
