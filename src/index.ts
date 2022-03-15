import { RegistrationPage } from './pages/registration/registration';
import { ProfilePage } from './pages/profile/profile';
import Router from './common/Router';
import { AuthorizationPage } from './pages/authorization/authorization';
import { MessagesPage } from './pages/messages/messages';
import { PasswordPage } from './pages/password/password';
import { errorPage } from './pages/error';

document.addEventListener('DOMContentLoaded', () => {
  const authorizationPage = new AuthorizationPage();
  const registrationPage = new RegistrationPage();
  // const passwordPage = new PasswordPage();
  // const messagesPage = new MessagesPage();
  // const profilePage = new ProfilePage();
  // const error500Page = errorPage;

  const router = new Router();

  router.use('/signin', AuthorizationPage).use('/signup', RegistrationPage);

  router.go('/signin');

  router.start();
});
