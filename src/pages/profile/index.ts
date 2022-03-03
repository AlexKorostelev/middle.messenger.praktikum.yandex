import { registerComponent } from '../../common/registerComponent';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { renderDom } from '../../common/renderDom';
import { ProfilePage } from './profile';
import InputField from '../../components/InputField';

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');

const profilePage = new ProfilePage({
  email: 'gfp_man@yandex.ru',
  login: 'myLogin',
  firstName: 'Георгий',
  secondName: 'Иванов',
  displayName: 'Гоша',
  phone: '+79999999999',
  imagePath: 'https://previews.123rf.com/images/denizjdazel/denizjdazel1902/denizjdazel190200045/124841367-.jpg?fj=1',
});

renderDom('#app', profilePage);
