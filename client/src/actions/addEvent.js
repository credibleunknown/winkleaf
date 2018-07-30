import axios from 'axios';
import { setFetching, unsetFetching } from '../actions/fetching';
import { ADD_EVENT, EVENT_ERROR } from '../actions/actionTypes';
import toaster from '../utils/toaster';
import uploadImage from '../utils/uploadImage';


const createEvent = event => ({
  type: ADD_EVENT,
  newEvent: event
});

const eventError = message => ({
  type: EVENT_ERROR,
  addEventErrorMessage: message
});

const API_URL = 'https://winkleaf.herokuapp.com/api/v1';

const addEventRequest = (event, token, dispatch) => axios({
  method: 'POST',
  url: `${API_URL}/events`,
  headers: {
    'x-access-token': token
  },
  data: event
})
  .then((response) => {
    dispatch(createEvent(response.data));
    dispatch(unsetFetching());
    toaster.toastSuccess('Your Event has been published');
  })
  .catch((error) => {
    const { message } = error.response.data;
    dispatch(eventError(message));
    dispatch(unsetFetching());
    toaster.toastError(message);
  });


const addEvent = event => (dispatch) => {
  dispatch(setFetching());
  const token = localStorage.getItem('token');
  const { picture } = event;

    return uploadImage(picture)
      .then((uploadResponse) => {
        const eventUrl = uploadResponse.data.secure_url;
        event = { ...event, picture: eventUrl };
        return addEventRequest(event, token, dispatch);
      })
      .catch(() => {
        const message = 'unable to upload image';
        dispatch(eventError(message));
        dispatch(unsetFetching());
        toaster.toastError(message);
      });

  const { name, description, startDate, endDate, location, state, country } = event;
  return addEventRequest(token, dispatch);
};
export default addEvent;

