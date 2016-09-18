import {
  EMAIL_SUBMISSION,
  CLOSE_LANDING_MODAL,
  CLOSE_LANDING_ERROR,
  LANDING_IS_LOADED,
  EMAIL_SUBMISSION_SUCCESS,
  EMAIL_SUBMISSION_FAILURE,
  EMAIL_SUBMISSION_INITIATION,
} from './constants';
import * as messages from './messages';

export const initialState = {
  isSubmitting: false,
  didSubmit: false,
  error: null,
  message: null,
  isShowingModal: false,
  isLoaded: false,
  messages,
};

const landingReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case EMAIL_SUBMISSION_FAILURE:
        return Object.assign({}, state, {
          isSubmitting: false,
          error: action.error,
        });
      case EMAIL_SUBMISSION_INITIATION:
        return Object.assign({}, state, {
          isSubmitting: true,
        });
      case EMAIL_SUBMISSION_SUCCESS:
        return Object.assign({}, state, {
          isShowingModal: true,
          message: action.message,
          isSubmitting: false,
          didSubmit: true,
        });
      case CLOSE_LANDING_MODAL:
        return Object.assign({}, state, {
          isShowingModal: false,
          message: null,
        });
      case CLOSE_LANDING_ERROR:
        return Object.assign({}, state, {
          error: null,
        });
      case LANDING_IS_LOADED:
        return Object.assign({}, state, {
          isLoaded: true,
        });
      default:
        return state;
    }
  };

export default landingReducer;
