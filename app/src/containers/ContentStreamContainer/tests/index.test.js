import ContentStreamContainer, { ContentStream } from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import React from 'react';
import Section from 'grommet/components/Section';
import { initialState } from '../reducer';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<ContentStream />', () => {
  it('should render with expected DOM', () => {
    const wrapper = shallow(<ContentStream />);
    expect(wrapper.find('h1')).toExist();
    expect(wrapper.find(<Section />)).toExist();
  });
  it('should render a connected container with default props', () => {
    const store = mockStore({ contentStream: initialState });
    const wrapper = shallow(<ContentStreamContainer store={store} />);
    expect(wrapper.props().isLoading).toBe(false);
    expect(wrapper.props().error).toNotExist();
    expect(wrapper.props().posts.length).toBe(0);
  });
  it('should show an error', () => {
    const store = mockStore({
      contentStream: Object.assign({}, initialState, {
        error: new Error('An error has occured'),
      }),
    });
    const wrapper = shallow(<ContentStreamContainer store={store} />);
    expect(wrapper.props().error).toExist();
  });
});
