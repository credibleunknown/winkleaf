import axios from 'axios';
import { setFetching, unsetFetching } from './fetching';
import { GET_UPCOMING_EVENTS, GET_UPCOMING_EVENTS_ERROR } from './actionTypes';

const getUpcomingEventsSuccess = events => ({
  type: GET_UPCOMING_EVENTS,
  events
});

const getUpcomingEventsError = message => ({
  type: GET_UPCOMING_EVENTS_ERROR,
  message
});

const API_URL = 'https://winkleaf.herokuapp.com/api/v1';

const getUpcomingEvents = () => (dispatch) => {
  dispatch(setFetching());
  return axios.get(`${API_URL}/events`)
    .then((response) => {
      dispatch(getUpcomingEventsSuccess(response.data.events));
      dispatch(unsetFetching());
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(getUpcomingEventsError(message));
      dispatch(unsetFetching());
    });
};
export default getUpcomingEvents;
