import {
  SUBMIT_EMAIL_INITIATION,
  SUBMIT_EMAIL_SUCCESS,
  SUBMIT_EMAIL_FAILURE,
} from './constants';

const initialState = {
  isSubmitting: false,
  didSubmit: false,
  error: null,
  message: null,
};

const landingReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case SUBMIT_EMAIL_INITIATION:
        return Object.assign({}, state, {
          isSubmitting: true,
        });
      case SUBMIT_EMAIL_SUCCESS:
        return Object.assign({}, state, {
          isSubmitting: false,
          didSubmit: true,
          message: action.message,
        });
      case SUBMIT_EMAIL_FAILURE:
        return Object.assign({}, state, {
          isSubmitting: false,
          error: action.error,
        });
      default:
        return state;
    }
  };

export default landingReducer;
