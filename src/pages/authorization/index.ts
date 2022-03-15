import { registerComponent } from '../../common/registerComponent';
import Button from '../../components/Button';
import { AuthorizationPage } from './authorization';
import { renderDom } from '../../common/renderDom';
import InputField from '../../components/InputField';
import Input from '../../components/Input';

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');

export const authorizationPage = new AuthorizationPage();

// renderDom('#app', authPage);
