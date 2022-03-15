import { registerComponent } from '../../common/registerComponent';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { RegistrationPage } from './registration';
import { renderDom } from '../../common/renderDom';
import InputField from '../../components/InputField';

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');

export const registrationPage = new RegistrationPage();

// renderDom('#app', registrationPage);
