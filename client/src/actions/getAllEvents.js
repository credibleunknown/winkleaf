import axios from 'axios';
import { GET_ALL_EVENTS, GET_ALL_EVENTS_ERROR, GET_EVENT_DETAILS } from './actionTypes';
import { setFetching, unsetFetching } from './fetching';

export const allEvents = events => ({
  type: GET_ALL_EVENTS,
  events,
});

export const getEventDetails = details => ({
  type: GET_EVENT_DETAILS,
  details
});

export const allEventsError = message => ({
  type: GET_ALL_EVENTS_ERROR,
  message
});

const API_URL = 'https://winkleaf.herokuapp.com/api/v1';

const getAllEvents = page => (dispatch) => {
  page = page || 1;
  dispatch(setFetching());
  return axios.get(`${API_URL}/api/v1/events?page=${page}`)
    .then((response) => {
      const { currentPage, limit, numberOfItems, pages, events } = response.data;
      const paginationInfo = { currentPage, limit, numberOfItems, pages };
      dispatch(allEvents(events));
      dispatch(getPageDetails(paginationInfo));
      dispatch(unsetFetching());
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(allEventsError(message));
      dispatch(unsetFetching());
    });
};
export default getAllEvents;
