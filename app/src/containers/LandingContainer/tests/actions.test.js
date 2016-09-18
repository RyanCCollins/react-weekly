import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('LandingContainer actions', () => {
  it('should handle EMAIL_SUBMISSION_INITIATION', () => {
    const expected = {
      type: types.EMAIL_SUBMISSION_INITIATION,
    };
    expect(
      actions.emailSubmissionInitiation()
    ).toEqual(expected);
  });
  it('should handle EMAIL_SUBMISSION_SUCCESS', () => {
    const message = 'Thanks so much!';
    const expected = {
      type: types.EMAIL_SUBMISSION_SUCCESS,
      message,
    };
    expect(
      actions.emailSubmissionSuccess(message)
    ).toEqual(expected);
  });
  it('should handle EMAIL_SUBMISSION_FAILURE', () => {
    const error = new Error('An error has occured');
    const expected = {
      type: types.EMAIL_SUBMISSION_FAILURE,
      error,
    };
    expect(
      actions.emailSubmissionFailure(error)
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
