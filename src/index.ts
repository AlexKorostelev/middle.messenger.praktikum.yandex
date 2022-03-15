import { RegistrationPage } from './pages/registration/registration';
import { ProfilePage } from './pages/profile/profile';
import Router from './common/Router';
import { AuthorizationPage } from './pages/authorization/authorization';
import { MessagesPage } from './pages/messages/messages';
import { PasswordPage } from './pages/password/password';
import { errorPage } from './pages/error';
import { registerComponent } from './common/registerComponent';
import Button from './components/Button';
import Input from './components/Input';
import InputField from './components/InputField';

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');

// const authorizationPage = new AuthorizationPage();
// const registrationPage = new RegistrationPage();
// const passwordPage = new PasswordPage();
// const messagesPage = new MessagesPage();
// const profilePage = new ProfilePage();
// const error500Page = errorPage;

const router = new Router();

router.use('/signin', AuthorizationPage).use('/signup', RegistrationPage);

router.go('/signin');

setTimeout(() => {
  // registerComponent(Button, 'Button');
  // registerComponent(Input, 'Input');
  // registerComponent(InputField, 'InputField');
  router.go('/signup');
}, 2000);

router.start();
