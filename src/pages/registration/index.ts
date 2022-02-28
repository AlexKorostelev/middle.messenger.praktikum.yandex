import { registerComponent } from '../../common/registerComponent';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { RegistrationPage } from './registration';
import { renderDom } from '../../common/renderDom';

registerComponent(Button);
registerComponent(Label);
registerComponent(Input);

const registrationPage = new RegistrationPage();

renderDom('#app', registrationPage);
