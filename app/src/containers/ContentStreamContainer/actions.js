import {
  LOAD_CONTENT_INITIATION,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_FAILURE,
} from './constants';
import 'whatwg-fetch';

const postsUrl = 'https://react-weekly.herokuapp.com/posts';

const loadContentInitiation = () => ({
  type: LOAD_CONTENT_INITIATION,
});

const loadContentSuccess = (posts) => ({
  type: LOAD_CONTENT_SUCCESS,
  posts,
});

const loadContentFailure = (error) => ({
  type: LOAD_CONTENT_FAILURE,
  error,
});

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
