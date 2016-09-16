import {
  SUBMIT_EMAIL_INITIATION,
  SUBMIT_EMAIL_SUCCESS,
  SUBMIT_EMAIL_FAILURE,
  CLOSE_LANDING_MODAL,
  CLOSE_LANDING_ERROR,
  LANDING_IS_LOADED,
} from './constants';

import 'whatwg-fetch';
const baseUrl = 'http://www.reactweekly.co/';
const submitEmailUrl = `${baseUrl}contact/`;
const postHeaders = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'x-www-form-urlencoded',
};

// submitEmailInitiation :: JSON -> {Action}
export const submitEmailInitiation = (params) => ({
  type: SUBMIT_EMAIL_INITIATION,
  params,
});

// submitEmailSuccess :: String -> {Action}
export const submitEmailSuccess = (message) => ({
  type: SUBMIT_EMAIL_SUCCESS,
  message,
});

// submitEmailFailure :: Error -> {Action}
export const submitEmailFailure = (error) => ({
  type: SUBMIT_EMAIL_FAILURE,
  error,
});

// closeModal :: None -> {Action}
export const closeModal = () => ({
  type: CLOSE_LANDING_MODAL,
});

// closeError :: None -> {Action}
export const closeError = () => ({
  type: CLOSE_LANDING_ERROR,
});

// setIsLoaded :: None -> {Action}
export const setIsLoaded = () => ({
  type: LANDING_IS_LOADED,
});

// submitEmail :: JSON -> Thunk -> Side Effects
export const submitEmail = (params) =>
  (dispatch) => {
    const body = JSON.stringify(params);
    dispatch(
      submitEmailInitiation(body)
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
        submitEmailFailure(new Error(err))
      );
    });
  };
