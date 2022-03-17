import BaseAPI from './BaseAPI';

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

  create = undefined;

  update = undefined;

  read(): Promise<unknown> {
    return this.http.get('');
  }

  delete = undefined;
}
