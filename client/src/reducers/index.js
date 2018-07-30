import { combineReducers } from 'redux';

import auth from './auth';
import isFetching from './isFetching';

const reducers = combineReducers({
  auth,
  isFetching,
});

export default reducers;
