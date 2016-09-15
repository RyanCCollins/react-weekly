import {
  SUBMIT_EMAIL_INITIATION,
  SUBMIT_EMAIL_SUCCESS,
  SUBMIT_EMAIL_FAILURE,
  CLOSE_LANDING_MODAL,
  CLOSE_LANDING_ERROR,
} from './constants';

import 'whatwg-fetch';
const baseUrl = 'http://www.reactweekly.co/';
const submitEmailUrl = `${baseUrl}contact/`;
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

const submitEmailFailure = (error) => ({
  type: SUBMIT_EMAIL_FAILURE,
  error,
});

export const closeModal = () => ({
  type: CLOSE_LANDING_MODAL,
});

export const closeError = () => ({
  type: CLOSE_LANDING_ERROR,
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
        submitEmailSuccess(
          `Thank you so much for subscribing!
            We will get the first email out to you shortly!`
        )
      );
    })
    .catch(err => {
      dispatch(
        submitEmailFailure(err)
      );
    });
  };
