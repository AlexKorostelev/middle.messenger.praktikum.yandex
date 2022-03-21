import { registerComponent } from '../../common/registerComponent';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { renderDom } from '../../common/renderDom';
import { PasswordPage } from './password';
import InputField from '../../components/InputField';

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');

const passwordPage = new PasswordPage();

renderDom('#app', passwordPage);
