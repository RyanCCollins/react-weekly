import expect from 'expect';
import landingReducer, { initialState } from '../reducer';
import configureMockStore from 'redux-mock-store';
import * as actions from '../actions';
import * as types from '../constants';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('landingReducer', () => {
  it('returns the initial state', () => {
    expect(
      landingReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle SUBMIT_EMAIL_INITIATION', () => {
    const stateAfter = {
      isSubmitting: true,
      didSubmit: false,
      error: null,
      message: null,
      isShowingModal: false,
      isLoaded: false,
    };
    expect(
      landingReducer(initialState, {
        type: types.SUBMIT_EMAIL_INITIATION,
      })
    ).toEqual(stateAfter);
  });
  it('should handle SUBMIT_EMAIL_SUCCESS', () => {
    const message = 'Woohoo!!';
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
        type: types.SUBMIT_EMAIL_SUCCESS,
        message,
      })
    ).toEqual(stateAfter);
  });
  it('should handle SUBMIT_EMAIL_FAILURE', () => {
    const error = new Error('Oh crap!');
    const message = `Sorry, but we just launched and not
      everything is working yet.  Please try again soon, or email
      us and we will make sure to get you on the list`;
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
      message,
      isShowingModal: true,
      isLoaded: false,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.SUBMIT_EMAIL_FAILURE,
        error,
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
    };
    expect(
      landingReducer(initialState, {
        type: types.LANDING_IS_LOADED,
      })
    ).toEqual(stateAfter);
  });
});
