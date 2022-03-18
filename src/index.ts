import { RegistrationPage } from './pages/registration/registration';
import Router from './common/Router';
import { AuthorizationPage } from './pages/authorization/authorization';
import { registerComponent } from './common/registerComponent';
import Button from './components/Button';
import Input from './components/Input';
import InputField from './components/InputField';
import Link from './components/Link';
import Chat from './components/Chat';
import Message from './components/Message';
import ErrorForm from './components/ErrorForm';
import ProfilePage from './pages/profile';
import MessagesPage from './pages/messages';
import AuthController from "./controllers/AuthController";

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');
registerComponent(Link, 'Link');
registerComponent(Chat, 'Chat');
registerComponent(Message, 'Message');

const router = new Router();

router.use('/signin', AuthorizationPage)
  .use('/signup', RegistrationPage)
  .use('/profile', ProfilePage)
  .use('/messages', MessagesPage)
  .use('/error', ErrorForm);

/** Отправляем запрос для проверки валидности куки.
 * Если запрос прошел успешно - то кука валидна, делаем редирект на страницу чатов.
 * Если ошибка - делаем редирект на страницу авторизации.
 */
AuthController.fetchUser()
  .then(() => {
    router.go('/messages');
  })
  .catch(() => router.go('/signin'));

router.start();
