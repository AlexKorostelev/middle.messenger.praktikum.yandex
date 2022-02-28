import { registerComponent } from '../../common/registerComponent';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { AuthorisationPage } from './authorisation';
import { renderDom } from '../../common/renderDom';

registerComponent(Button);
registerComponent(Label);
registerComponent(Input);

const authPage = new AuthorisationPage();

renderDom('#app', authPage);
