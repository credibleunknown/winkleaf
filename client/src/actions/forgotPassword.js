import axios from 'axios';
import toaster from '../utils/toaster';
import { setFetching, unsetFetching } from './fetching';


const forgotPassword = email => (dispatch) => {
  dispatch(setFetching());
  return axios({
    method: 'POST',
    url: '/api/v1/users/recover-email',
    data: { email }
  })
    .then(() => {
      dispatch(unsetFetching());
      toaster.toastSuccess('Check your email. Recovery link has been sent.');
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(unsetFetching());
      toaster.toastError(message);
    });
};
export default forgotPassword;
