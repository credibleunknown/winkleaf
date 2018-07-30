import axios from 'axios';
import { setFetching, unsetFetching } from './fetching';
import { recieveAuth, authError } from './loginUser';
import toaster from '../utils/toaster';


const API_URL = 'https://winkleaf.herokuapp.com/api/v1';

const signupUser = userData => (dispatch) => {
  
  dispatch(setFetching());
  return axios.post(`${API_URL}/user/signup`, userData)
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      dispatch(recieveAuth({ user, token }));
      dispatch(unsetFetching());
      toaster.toastSuccess('Welcome to Winkleaf');
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(authError(message));
      dispatch(unsetFetching());
    });
};
export default signupUser;
