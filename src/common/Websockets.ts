export class WS {
  private socket: WebSocket;

  private host = 'ya-praktikum.tech';

  private chatId: number;

  private static instance: WS;

  constructor() {
    if (WS.instance) {
      // eslint-disable-next-line no-constructor-return
      return WS.instance;
    }
    WS.instance = this;
  }

  private onOpenConnection() {
    console.log('Соединение установлено');
    this.socket.send(
      JSON.stringify({
        content: `Моё первое сообщение миру! ${Date.now()}`,
        type: 'message',
      }),
    );
  }

  private onCloseConnection(event: CloseEvent) {
    if (event.wasClean) {
      console.log(event.wasClean ? 'Соединение закрыто чисто' : 'Обрыв соединения');
      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    }
  }

  private onReceiveMessage(event: MessageEvent) {
    console.log('Получены данные', event.data);
  }

  private onError(event: ErrorEvent) {
    console.log('Ошибка', event.message);
  }

  connect(chatId: number, userId: number) {
    fetch(`https://${this.host}/api/v2/chats/token/${chatId}`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    }).then((response) => response.json())
      .then((data: { token: string }) => {
        /** Если до этого было соденинение по WS с другим чатом
         *  то удаляем старые обработчики событий */
        if (this.chatId !== undefined) {
          this.socket.removeEventListener('open', this.onOpenConnection.bind(this));
          this.socket.removeEventListener('close', this.onCloseConnection.bind(this));
          this.socket.removeEventListener('message', this.onReceiveMessage.bind(this));
          this.socket.removeEventListener('error', this.onError.bind(this));
          this.socket.close(1000, 'Close previous chat connection');
        }

        this.socket = new WebSocket(`wss://${this.host}/ws/chats/${userId}/${chatId}/${data.token}`);

        this.socket.addEventListener('open', this.onOpenConnection.bind(this));
        this.socket.addEventListener('close', this.onCloseConnection.bind(this));
        this.socket.addEventListener('message', this.onReceiveMessage.bind(this));
        this.socket.addEventListener('error', this.onError.bind(this));
        this.chatId = chatId;
      })
      .catch((error) => console.log('Ошибка установки соединения', error));
  }
}
