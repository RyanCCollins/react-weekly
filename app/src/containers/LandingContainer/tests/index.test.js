import { LandingContainer }, Landing from '../index';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { initialState } from '../reducer';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import { HomeHero } from 'components';

describe('<LandingContainer />', () => {
  const store = mockStore({ landing: initialState });
  it('should render with expected DOM.', () => {
    const component = shallow(<LandingContainer />);
    expect(
      component.find(<HomeHero />)
    ).toExist();
  });
  it('should render with default props.', () => {
    const component = shallow(<Landing store={store} />);
    expect(component.props().isLoaded).toBe(false);
    expect(component.props().error).toNotExist();
    expect(component.props().message).toNotExist();
    expect(component.props().isShowingModal).toBe(false);
    expect(component.props().isSubmitting).toBe(false);
  });
  it('handles submission with a failure', () => {
    const component = mount(<Landing store={store} />);
    component.find('#submit-button').simulate('click');
    expect(component.props().error).toExist();
  })
});
