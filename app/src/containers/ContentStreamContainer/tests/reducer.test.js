import expect from 'expect';
import contentStreamReducer, { initialState } from '../reducer';
import * as types from '../constants';

describe('contentStreamReducer', () => {
  it('returns the initial state', () => {
    expect(
      contentStreamReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle LOAD_CONTENT_INITIATION', () => {
    expect(
      contentStreamReducer(
        initialState,
        {
          type: types.LOAD_CONTENT_INITIATION,
        },
      )
    ).toEqual(
      {
        posts: [],
        error: null,
        isLoading: true,
      }
    );
  });
  it('should handle LOAD_CONTENT_SUCCESS', () => {
    const posts = [
      {
        id: 1,
        content: 'Hello',
      },
      {
        id: 2,
        content: 'World',
      },
    ];
    const stateBefore = {
      isLoading: true,
      error: null,
      posts: [],
    };
    const stateAfter = {
      isLoading: false,
      error: null,
      posts,
    };
    expect(
      contentStreamReducer(stateBefore, {
        type: types.LOAD_CONTENT_SUCCESS,
        posts,
      })
    ).toEqual(stateAfter);
  });
  it('should handle LOAD_CONTENT_FAILURE', () => {
    const error = new Error('An error has occurred');
    const stateBefore = {
      isLoading: true,
      error: null,
      posts: [],
    };
    const stateAfter = {
      isLoading: false,
      error,
      posts: [],
    };
    expect(
      contentStreamReducer(stateBefore, {
        type: types.LOAD_CONTENT_FAILURE,
        error,
      })
    ).toEqual(stateAfter);
  });
});
