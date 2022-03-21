import { registerComponent } from '../../common/registerComponent';
import Button from '../../components/Button';
import { AuthorisationPage } from './authorisation';
import { renderDom } from '../../common/renderDom';
import InputField from '../../components/InputField';
import Input from '../../components/Input';

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');

const authPage = new AuthorisationPage();

renderDom('#app', authPage);
