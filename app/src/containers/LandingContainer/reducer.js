import {
  SUBMIT_EMAIL_INITIATION,
  SUBMIT_EMAIL_SUCCESS,
  SUBMIT_EMAIL_FAILURE,
  CLOSE_LANDING_MODAL,
  CLOSE_LANDING_ERROR,
  LANDING_IS_LOADED,
} from './constants';

const initialState = {
  isSubmitting: false,
  didSubmit: false,
  error: null,
  message: null,
  isShowingModal: false,
  modalMessage: '',
  isLoaded: false,
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
          isShowingModal: true,
        });
      case SUBMIT_EMAIL_FAILURE:
        return Object.assign({}, state, {
          isSubmitting: false,
          error: action.error,
          isShowingModal: true,
          message: `Sorry, but we just launched and not
            everything is working yet.  Please try again soon, or email
            us and we will make sure to get you on the list`,
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
