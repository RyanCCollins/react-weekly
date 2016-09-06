import {
  SUBMIT_EMAIL_INITIATION,
  SUBMIT_EMAIL_SUCCESS,
  SUBMIT_EMAIL_FAILURE,
} from './constants';

const baseUrl = "https://react-weekly.com/api/v1/";
const submitEmailUrl = `${baseUrl}/contact/create`;
const postHeaders = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'x-www-form-urlencoded',
};

const submitEmailInitiation = (params) => ({
  type: SUBMIT_EMAIL_INITIATION,
  params,
});

const submitEmailSuccess = (message) => ({
  type: SUBMIT_EMAIL_SUCCESS,
  message,
});

const submitEmailFailure = (email) => ({
  type: SUBMIT_EMAIL_FAILURE,
  email,
});

export const submitEmail = (params) =>
  (dispatch) => {
    dispatch(
      submitEmailInitiation(params)
    );
    return fetch(submitEmailUrl, {
      method: 'post',
      headers: postHeaders,
      body: params,
    })
    .then(res => res.json())
    .then(() => {
      dispatch(
        submitEmailSuccess('Thanks for subscribing!')
      );
    })
    .catch(err => {
      dispatch(
        submitEmailFailure(err)
      );
    });
  };
