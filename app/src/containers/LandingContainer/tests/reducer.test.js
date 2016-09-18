import expect from 'expect';
import landingReducer, { initialState } from '../reducer';
import * as types from '../constants';
import * as messages from '../messages';

describe('landingReducer', () => {
  it('returns the initial state', () => {
    expect(
      landingReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle EMAIL_SUBMISSION_INITIATION', () => {
    const stateBefore = {
      isSubmitting: false,
      didSubmit: false,
      error: null,
      message: null,
      isShowingModal: false,
      isLoaded: false,
    };
    const stateAfter = {
      isSubmitting: true,
      didSubmit: false,
      error: null,
      message: null,
      isShowingModal: false,
      isLoaded: false,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.EMAIL_SUBMISSION_INITIATION,
      })
    ).toEqual(stateAfter);
  });
  it('should handle EMAIL_SUBMISSION_FAILURE', () => {
    const error = new Error('An error has occured');
    const stateBefore = {
      isSubmitting: true,
      didSubmit: false,
      error: null,
      message: null,
      isShowingModal: false,
      isLoaded: false,
    };
    const stateAfter = {
      isSubmitting: false,
      didSubmit: false,
      error,
      message: null,
      isShowingModal: false,
      isLoaded: false,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.EMAIL_SUBMISSION_FAILURE,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle EMAIL_SUBMISSION_SUCCESS', () => {
    const message = 'Woohoo!';
    const stateBefore = {
      isSubmitting: true,
      didSubmit: false,
      error: null,
      message: null,
      isShowingModal: false,
      isLoaded: false,
    };
    const stateAfter = {
      isSubmitting: false,
      didSubmit: true,
      error: null,
      message,
      isShowingModal: true,
      isLoaded: false,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.EMAIL_SUBMISSION_SUCCESS,
        message,
      })
    ).toEqual(stateAfter);
  });
  it('should handle CLOSE_LANDING_MODAL', () => {
    const stateBefore = {
      isSubmitting: false,
      didSubmit: false,
      error: null,
      message: 'Hello world',
      isShowingModal: true,
      isLoaded: false,
    };
    const stateAfter = {
      isSubmitting: false,
      didSubmit: false,
      error: null,
      message: null,
      isShowingModal: false,
      isLoaded: false,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.CLOSE_LANDING_MODAL,
      })
    ).toEqual(stateAfter);
  });
  it('should handle CLOSE_LANDING_ERROR', () => {
    const stateBefore = {
      isSubmitting: false,
      didSubmit: false,
      error: new Error('Oh Crap,'),
      message: null,
      isShowingModal: false,
      isLoaded: false,
    };
    const stateAfter = {
      isSubmitting: false,
      didSubmit: false,
      error: null,
      message: null,
      isShowingModal: false,
      isLoaded: false,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.CLOSE_LANDING_ERROR,
      })
    ).toEqual(stateAfter);
  });
  it('should handle LANDING_IS_LOADED', () => {
    const stateAfter = {
      isSubmitting: false,
      didSubmit: false,
      error: null,
      message: null,
      isShowingModal: false,
      isLoaded: true,
      messages,
    };
    expect(
      landingReducer(initialState, {
        type: types.LANDING_IS_LOADED,
      })
    ).toEqual(stateAfter);
  });
});
