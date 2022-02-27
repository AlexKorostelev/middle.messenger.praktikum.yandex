import { renderDom } from './common/renderDom';
import LoginPage from './pages/login';
import { registerComponent } from './common/registerComponent';
import Button from './components/Button';

document.addEventListener('DOMContentLoaded', () => {
  registerComponent(Button);

  const loginPage = new LoginPage({
    buttonLabel: 'Click me!',
  });

  renderDom('#app', loginPage);

  setTimeout(() => {
    loginPage.setProps({ buttonLabel: 'newProps!' });
  }, 3000);
});
