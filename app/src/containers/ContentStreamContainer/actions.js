import {
  LOAD_CONTENT_INITIATION,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_FAILURE,
} from './constants';
import fetch from 'isomorphic-fetch';

const feedUrl = 'https://medium.com/react-weekly/latest?format=json';

const headers = new Headers({
  'content-type': 'application/json',
});

const options = {
  method: 'GET',
  headers,
  mode: 'cors',
};

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
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(posts => {
        dispatch(
          loadContentSuccess(posts)
        );
      })
      .catch(err => {
        dispatch(
          loadContentFailure(err)
        );
      });
  };
