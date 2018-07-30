import axios from 'axios';
import { setFetching, unsetFetching } from './fetching';
import { GET_PAST_EVENTS, GET_PAST_EVENTS_ERROR } from './actionTypes';

const getPastEventsSuccess = events => ({
  type: GET_PAST_EVENTS,
  events
});

const getPastEventsError = message => ({
  type: GET_PAST_EVENTS_ERROR,
  message
});

const API_URL = 'https://winkleaf.herokuapp.com/api/v1';

const getPastEvents = () => (dispatch) => {
  dispatch(setFetching());
  return axios.get(`${API_URL}/events`)
    .then((response) => {
      dispatch(getPastEventsSuccess(response.data.events));
      dispatch(unsetFetching());
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(getPastEventsError(message));
      dispatch(unsetFetching());
    });
};
export default getPastEvents;
