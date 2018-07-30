import axios from 'axios';
import { setFetching, unsetFetching } from './fetching';
import { RECIEVE_AUTH, AUTH_ERROR } from './actionTypes';
import toaster from '../utils/toaster';


export const recieveAuth = ({ token, user }) => ({
  type: RECIEVE_AUTH,
  token,
  user
});

export const authError = message => ({
  type: AUTH_ERROR,
  isAuthenticated: false,
  message
});


const API_URL = 'https://winkleaf.herokuapp.com/api/v1';

const loginUser = ({ username, password }) => (dispatch) => {

  dispatch(setFetching());
  return axios.post(`${API_URL}/user/login`, { username, password })
    .then((response) => {
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      dispatch(recieveAuth({ token, user }));
      dispatch(unsetFetching());
      toaster.toastSuccess('Welcome');
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(authError(message));
      dispatch(unsetFetching());
      toaster.toastError('Something is wrong');
    });
};

export default loginUser;

