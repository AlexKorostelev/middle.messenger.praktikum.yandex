import { withStore } from '../../common/Store';
import { ProfilePage } from './profile';

const withUser = withStore((state) => ({ ...state.currentUser }));Z

export default withUser(ProfilePage);
