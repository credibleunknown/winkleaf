import initialState from '../store/initialState';
import { RECIEVE_AUTH, AUTH_ERROR, LOGOUT, SIGN_IN_USER } from '../actions/actionTypes';

const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    case RECIEVE_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        errorMessage: '',
        token: action.token
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null
      };
    case SIGN_IN_USER:
      return {
        ...state,
        isAuthenticated: true,
        errorMessage: '',
        token: action.token,
        user: action.user,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: action.message
      };
    default:
      return state;
  }
};
export default auth;
