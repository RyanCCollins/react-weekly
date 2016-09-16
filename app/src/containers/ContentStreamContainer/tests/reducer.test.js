import expect from 'expect';
import contentStreamReducer, { initialState } from '../reducer';

describe('contentStreamReducer', () => {
  it('returns the initial state', () => {
    expect(
      contentStreamReducer(undefined, {})
    ).toEqual(initialState);
  });
});
