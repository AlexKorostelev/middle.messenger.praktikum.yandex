const socket = new WebSocket('wss://ya-praktikum.tech/ws/chats/1/1/fd23a974ce050d56d969b3c4ca1b2cc951ef4110:1600530634');

socket.addEventListener('open', () => {
  console.log('Соединение установлено');

  socket.send(JSON.stringify({
    content: 'Моё первое сообщение миру!',
    type: 'message',
  }));
});

socket.addEventListener('close', (event: CloseEvent) => {
  if (event.wasClean) {
    console.log('Соединение закрыто чисто');
  } else {
    console.log('Обрыв соединения');
  }

  console.log(`Код: ${event.code} | Причина: ${event.reason}`);
});

socket.addEventListener('message', (event: MessageEvent) => {
  console.log('Получены данные', event.data);
});

socket.addEventListener('error', (event: ErrorEvent) => {
  console.log('Ошибка', event.message);
});
