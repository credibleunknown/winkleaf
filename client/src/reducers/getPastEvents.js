import initialState from '../store/initialState';
import { GET_PAST_EVENTS, GET_PAST_EVENTS_ERROR } from '../actions/actionTypes';

const getPastEvents = (state = initialState.events, action) => {
  switch (action.type) {
    case GET_PAST_EVENTS:
      return {
        ...state,
        events: action.events,
        failure: ''
      };
    case GET_PAST_EVENTS_ERROR:
      return {
        ...state,
        failure: action.message
      };

    default:
      return state;
  }
};

export default getPastEvents;
