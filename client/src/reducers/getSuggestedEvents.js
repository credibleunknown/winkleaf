import initialState from '../store/initialState';
import { GET_SUGGESTED_EVENTS, GET_SUGGESTED_EVENTS_ERROR } from '../actions/actionTypes';

const getSuggestedEvents = (state = initialState.events, action) => {
  switch (action.type) {
    case GET_SUGGESTED_EVENTS:
      return {
        ...state,
        events: action.events,
        failure: ''
      };
    case GET_SUGGESTED_EVENTS_ERROR:
      return {
        ...state,
        failure: action.message
      };

    default:
      return state;
  }
};

export default getSuggestedEvents;
