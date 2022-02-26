import { renderDom } from './common/renderDom';
import LoginPage from './pages/login';

document.addEventListener('DOMContentLoaded', () => {
  const loginPage = new LoginPage({
    buttonLabel: 'Click me!',
  });
  renderDom('#app', loginPage);

  setTimeout(() => {
    loginPage.setProps({ buttonLabel: 'newProps!' });
  }, 3000);
});
