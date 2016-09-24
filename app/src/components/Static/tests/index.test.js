import Static from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Markdown from 'grommet/components/Markdown';
import Section from 'grommet/components/Section';
import Article from 'grommet/components/Article';

describe('<Static />', () => {
  it('should have expected components', () => {
    const wrapper = shallow(
      <Static
        content="Hello world"
        hasBoxShadow
      />
    );
    expect(
      wrapper.find(<Markdown />)
    ).toExist();
    expect(
      wrapper.find(<Section />)
    ).toExist();
    expect(
      wrapper.find(<Article />)
    ).toExist();
  });
});
