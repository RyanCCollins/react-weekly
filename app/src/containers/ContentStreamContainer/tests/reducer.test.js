import expect from 'expect';
import contentStreamReducer from '../reducer';

const initialState = {
  // Initial State goes here!
};

describe('contentStreamReducer', () => {
  it('returns the initial state', () => {
    expect(
      contentStreamReducer(undefined, {})
    ).toEqual(initialState);
  });
});
