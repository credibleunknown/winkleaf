import initialState from '../store/initialState';
import { GET_UPCOMING_EVENTS, GET_UPCOMING_EVENTS_ERROR } from '../actions/actionTypes';

const getUpcomingEvents = (state = initialState.events, action) => {
  switch (action.type) {
    case GET_UPCOMING_EVENTS:
      return {
        ...state,
        events: action.events,
        failure: ''
      };
    case GET_UPCOMING_EVENTS_ERROR:
      return {
        ...state,
        failure: action.message
      };

    default:
      return state;
  }
};

export default getUpcomingEvents;
