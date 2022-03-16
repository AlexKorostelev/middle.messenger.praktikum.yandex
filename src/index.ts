import { RegistrationPage } from './pages/registration/registration';
import Router from './common/Router';
import { AuthorizationPage } from './pages/authorization/authorization';
import { MessagesPage } from './pages/messages/messages';
import { registerComponent } from './common/registerComponent';
import Button from './components/Button';
import Input from './components/Input';
import InputField from './components/InputField';
import Link from './components/Link';
import Chat from './components/Chat';
import Message from './components/Message';
import ErrorForm from './components/ErrorForm';
import AuthController from './controllers/AuthController';
import ProfilePage from './pages/profile';

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');
registerComponent(Link, 'Link');
registerComponent(Chat, 'Chat');
registerComponent(Message, 'Message');

export const router = new Router();

router.use('/signin', AuthorizationPage)
  .use('/signup', RegistrationPage)
  .use('/profile', ProfilePage)
  .use('/messages', MessagesPage)
  .use('/error', ErrorForm);

try {
  AuthController.fetchUser().then(() => {
    router.go('/profile');
  });
} catch {
  alert('Ошибка запроса данных пользователя!');
}
// router.go('/signin');

router.start();
