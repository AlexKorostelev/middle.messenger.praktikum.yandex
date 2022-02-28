import { registerComponent } from '../../common/registerComponent';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';
import { renderDom } from '../../common/renderDom';
import { ProfilePage } from './profile';

registerComponent(Button);
registerComponent(Label);
registerComponent(Input);

const profilePage = new ProfilePage();

renderDom('#app', profilePage);
