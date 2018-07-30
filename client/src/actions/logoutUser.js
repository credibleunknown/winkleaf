import toaster from '../utils/toaster';
import { LOGOUT } from '../actions/actionTypes';

const logOut = () => ({
  type: LOGOUT
});

const logOutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logOut());
  toaster.toastSuccess('You have logged out');
};

export default logOutUser;
