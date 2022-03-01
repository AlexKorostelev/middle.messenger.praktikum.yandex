import { registerComponent } from '../../common/registerComponent';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';
import { renderDom } from '../../common/renderDom';
import { PasswordPage } from './password';

registerComponent(Button, 'Button');
registerComponent(Label, 'Label');
registerComponent(Input, 'Input');

const passwordPage = new PasswordPage();

renderDom('#app', passwordPage);
