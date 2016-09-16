import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('LandingContainer actions', () => {
  it('should dispatch an action to initiate email submission', () => {
    const params = { email: 'admin@ryancollins.io' };
    const expected = {
      type: types.SUBMIT_EMAIL_INITIATION,
      params,
    };
    expect(
      actions.submitEmailInitiation(params)
    ).toEqual(expected);
  });
  it('should handle success control flow', () => {
    const message = 'Thanks so much!';
    const expected = {
      type: types.SUBMIT_EMAIL_SUCCESS,
      message,
    };
    expect(
      actions.submitEmailSuccess()
    ).toEqual(expected);
  });
  it('should handle failure control flow', () => {
    const error = new Error('An error has occured');
    const expected = {
      type: types.SUBMIT_EMAIL_FAILURE,
      error,
    };
    expect(
      actions.submitEmailFailure(error)
    ).toEqual(expected);
  });
  it('should send an action to toggle modal closed', () => {
    const expected = {
      type: types.CLOSE_LANDING_MODAL,
    };
    expect(
      actions.closeModal()
    ).toEqual(expected);
  });
  it('should send an action to toggle error closed', () => {
    const expected = {
      type: types.CLOSE_LANDING_ERROR,
    };
    expect(
      actions.closeError()
    ).toEqual(expected);
  });
  it('should send an action to update view animations when loaded', () => {
    const expected = {
      type: types.LANDING_IS_LOADED,
    };
    expect(
      actions.setIsLoaded()
    ).toEqual(expected);
  });
});
