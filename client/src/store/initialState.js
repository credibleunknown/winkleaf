import authenticateUser from '../utils/authenticateUser';

const initialState = {
  auth: {
    isAuthenticated: authenticateUser(),
  },
  event: {
  },
  isFetching: false,
  isUploading: false,
  events: {
  },
  user: {

  }
};
export default initialState;
