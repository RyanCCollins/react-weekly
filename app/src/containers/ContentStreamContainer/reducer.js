import {
  LOAD_CONTENT_INITIATION,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_FAILURE,
} from './constants';

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
};

const contentStreamReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case LOAD_CONTENT_INITIATION:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case LOAD_CONTENT_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          posts: action.posts,
        });
      case LOAD_CONTENT_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
          error: action.error,
        });
      default:
        return state;
    }
  };

export default contentStreamReducer;
