import Landing from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { initialState } from '../reducer';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<LandingContainer />', () => {
  it('should have unit tests specified', () => {
    const store = mockStore({
      landing: initialState,
    });
    const component = shallow(<Landing store={store} />);
    expect(component).toExist();
  });
});
