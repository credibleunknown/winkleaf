import axios from 'axios';
import { setFetching, unsetFetching } from './fetching';
import { GET_SUGGESTED_EVENTS, GET_SUGGESTED_EVENTS_ERROR } from './actionTypes';

const getSuggestedEventsSuccess = events => ({
  type: GET_SUGGESTED_EVENTS,
  events
});

const getSuggestedEventsError = message => ({
  type: GET_SUGGESTED_EVENTS_ERROR,
  message
});

const API_URL = 'https://winkleaf.herokuapp.com/api/v1';

const getSuggestedEvents = () => (dispatch) => {
  dispatch(setFetching());
  return axios.get(`${API_URL}/events`)
    .then((response) => {
      dispatch(getSuggestedEventsSuccess(response.data.events));
      dispatch(unsetFetching());
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(getSuggestedEventsError(message));
      dispatch(unsetFetching());
    });
};
export default getSuggestedEvents;
