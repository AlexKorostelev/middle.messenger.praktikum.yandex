# Веб-приложение для обмена сообщениями.
### Ссылка на ПР: [https://github.com/AlexKorostelev/middle.messenger.praktikum.yandex/pull/4](https://github.com/AlexKorostelev/middle.messenger.praktikum.yandex/pull/4 "Ссылка на ПР")
### Ссылка на главную страницу: [https://alex-korostelev-messenger.netlify.app/](https://alex-korostelev-messenger.netlify.app/ "Ссылка на страничку приложения")
### Ссылка страницы на heroku: [https://alex-kor-messenger.herokuapp.com/](https://alex-kor-messenger.herokuapp.com/ "Ссылка страницы на heroku")
### Добавлена работа с Websocket:
* Переключение между чатами
* Подгрузка последних сообщений чата
* Возможнось добавления / удаления пользователей из чата
* Возможность создания / удаления чата

ну и конечно ... возможность обмена сообщениями в реальном времени!

### В качестве дизайн-макета использовались [шаблоны от Яндекс](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1 "Ссылка на макеты Figma") и веб-приложение Телеграмм.
### Используемые технологии:
* Webpack
* Docker
* Шаблонизатор handlebars
* Rest-api
* Node JS
* Websockets
* Препроцессор Less

## Внешний вид страницы списка чатов:
![chatlist](https://user-images.githubusercontent.com/53473616/153272723-350568e7-921d-4632-935a-0c79ee405d51.png)

## Установка

### Запуск проекта локально (Node JS, http://localhost:3000):
```
npm run start
```
### Запуск проекта локально (webpack DevServer, http://localhost:9001):
```
npm run serve
```
### Сборка проекта (в директорий build):
```
npm run build
```
### Запуск unit-тестов:
```
npm run test
```
### Запуск линтера:
```
npm run lint
```
### Запуск deploy-скрипта:
```
npm run deploy
```

