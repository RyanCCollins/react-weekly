import {
  EMAIL_SUBMISSION_SUCCESS,
  EMAIL_SUBMISSION_FAILURE,
  EMAIL_SUBMISSION_INITIATION,
  CLOSE_LANDING_MODAL,
  CLOSE_LANDING_ERROR,
  LANDING_IS_LOADED,
} from './constants';

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

export const emailSubmissionInitiation = () => ({
  type: EMAIL_SUBMISSION_INITIATION,
});

export const emailSubmissionSuccess = (message) => ({
  type: EMAIL_SUBMISSION_SUCCESS,
  message,
});

export const emailSubmissionFailure = (error) => ({
  type: EMAIL_SUBMISSION_FAILURE,
  error,
});
