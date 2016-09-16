import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
  describe('LandingContainer Async Actions', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('should handle success control flow logic', () => {
      const body = { body: { email: 'admin@ryancollins.io' } };
      nock('http://www.reactweekly.co')
        .post('/contact', body)
        .reply(200);
      const expected = [
        {
          type: types.SUBMIT_EMAIL_INITIATION,
          params: body,
        },
        {
          type: types.SUBMIT_EMAIL_SUCCESS,
          message: 'Thanks so much!',
        },
      ];
      const store = mockStore({
        message: '',
        didSubmit: false,
      });
      return store
        .dispatch(actions.submitEmail(body))
        .then(() => {
          expect(
            store.getActions()
          ).toEqual(expected);
        });
    });
  });
});
