import {
  LOAD_CONTENT_INITIATION,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_FAILURE,
} from './constants';
import 'whatwg-fetch';

const postsUrl = 'https://react-weekly.herokuapp.com/posts';

// loadContentInitiation :: None -> {Action}
export const loadContentInitiation = () => ({
  type: LOAD_CONTENT_INITIATION,
});

// loadContentSuccess :: Array -> {Action}
export const loadContentSuccess = (posts) => ({
  type: LOAD_CONTENT_SUCCESS,
  posts,
});

// loadContentFailure :: Error -> {Action}
export const loadContentFailure = (error) => ({
  type: LOAD_CONTENT_FAILURE,
  error,
});

// loadPostContent :: None -> Thunk
export const loadPostContent = () =>
  (dispatch) => {
    dispatch(
      loadContentInitiation()
    );
    fetch(postsUrl)
      .then(res => res.json())
      .then(posts => {
        dispatch(
          loadContentSuccess(posts)
        );
      }).catch(err => {
        dispatch(
          loadContentFailure(err)
        );
      });
  };
