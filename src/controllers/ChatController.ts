import ChatAPI from '../api/ChatAPI';
import { store } from '../common/Store';

class ChatController {
  private api: ChatAPI;

  constructor() {
    this.api = new ChatAPI();
  }

  async getChats() {
    const chatList = await this.api.read();

    store.set('chatList', chatList);
  }
}

export default new ChatController();
