import { ADD_EVENT, EVENT_ERROR } from '../actions/actionTypes';
import initialState from '../store/initialState';

const addEvent = (state = initialState.events, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        addEventErrorMessage: null,
        addEventSuccess: 'Your event has been published',
        newRecipe: action.newEvent
      };
    case EVENT_ERROR:
      return {
        ...state,
        addEventErrorMessage: action.addEventErrorMessage
      };
    default:
      return state;
  }
};
export default addEvent;
