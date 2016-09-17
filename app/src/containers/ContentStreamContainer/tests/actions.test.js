import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('ContentStream actions', () => {
  it('should handle LOAD_CONTENT_INITIATION', () => {
    const expected = {
      type: types.LOAD_CONTENT_INITIATION,
    };
    expect(
      actions.loadContentInitiation()
    ).toEqual(expected);
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
    const expected = {
      type: types.LOAD_CONTENT_SUCCESS,
      posts,
    };
    expect(
      actions.loadContentSuccess(posts)
    ).toEqual(expected);
  });
  it('should handle LOAD_CONTENT_FAILURE', () => {
    const error = new Error('An error occured');
    const expected = {
      type: types.LOAD_CONTENT_FAILURE,
      error,
    };
    expect(
      actions.loadContentFailure(error)
    ).toEqual(expected);
  });
});
